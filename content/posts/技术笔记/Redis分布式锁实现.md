---
title: "Redis分布式锁实现"
date: 2021-07-03T23:28:22+08:00
categories: ["技术笔记"]
tags: ["Redis"]
draft: false

---

# 什么是分布式锁？

分布式锁顾名思义就是用在分布式系统中，用于控制分布式系统之间同步访问共享资源。

核心操作：加锁、解锁、防止锁超时。

# 分布式锁的几种实现

- Memcached 分布式锁：Memecached add命令是原子性的。
- Zookeeper 分布式锁：利用Zookeeper 的顺序临时节点，且临时节点连接中断会自动删除，来实现分布式锁。同时还提供watch机制，可以实现加锁失败就阻塞住，直到获取到锁为止。
- Chubby：Google实现的粗粒度分布式锁服务。
- Redis 分布式锁：下文详细讨论。

# Redis分布式锁的实现

## SETNX指令

SETNX指令只在key不存在的情况下，将key设置为value值，若key存在，则不做任何操作。

key是锁的唯一标识，可以按业务需求锁定的资源命名。

```shell
SETNX lock_key lock_value
do something
DEL lock_key
```

这一方式的问题在于：锁超时问题。如果获得锁的进程在业务处理过程中出现了异常，将导致DEL指令无法执行，锁无法释放，该资源将会被一直锁住。

## SETNX指令 + EXPIRE指令

因此很容易想到，给key设置一个过期时间。由于SETNX不支持设置过期时间，所以需要额外的EXPIRE指令

```sh
SETNX lock_key lock_value
EXPIRE lock_key 10
do something
DEL lock_key
```

这一方式的问题在于：SETNX 和 EXPIRE 这两个操作是非原子性的， 如果进程在执行 SETNX 和 EXPIRE 之间发生异常，同样会出现上述问题。

## SET扩展指令

为了解决 SETNX 和 EXPIRE 两个操作非原子性的问题，可以使用 Redis 的 SET 指令的扩展参数，使得 SETNX 和 EXPIRE 这两个操作可以原子执行。

```sh
SET lock_key lock_value NX EX 10
do something
DEL lock_key
```

这一方式的问题在于：锁可能在业务处理结束前提前释放。从而也可能导致锁被误删。

为了避免上述情况，建议不要在执行时间过长的场景中使用 Redis 分布式锁，同时一个比较安全的做法是在执行 DEL 释放锁之前对锁进行判断，验证当前锁的持有者是否是自己。

具体实现就是在加锁时将 value 设置为一个唯一的随机数（或者线程 ID ），释放锁时先判断随机数是否一致，然后再执行释放操作，确保不会错误地释放其它线程持有的锁，除非是锁过期了被服务器自动释放。

```sh
SET lock_key random_value nx ex 10
do something
if random_value == lock_key.value
	DEL lock_key
```

## SET扩展指令 + Lua

但判断 value 和删除 key 是两个独立的操作，并不是原子性的，所以这个地方需要使用 Lua 脚本进行处理。

```lua
if redis.call("get", KEYS[1]) == ARGV[1] then
  return redis.call("del", KEYS[1])
else 
  return 0
end
```



> Redis使用Lua脚本时为什么能保证原子性?
>
> Redis使用同一个的Lua解释器，来运行所有的命令。Redis保证以一种原子性的方式来执行脚本。在执行脚本时，不会执行其他脚本或Redis命令。这个语义类似于MULTI（开启事务）/EXEC（触发事务，一并执行事务中的所有命令）。从所有其他客户端的角度来看，脚本的效果要么仍然不可见，要么已经完成。

但这并不是一个完美的方案，只是相对完全一点，因为它并没有完全解决执行超时锁被提前释放的问题。

## Redisson

原理：可以利用锁的可重入特性，让获得锁的线程开启一个定时器的守护线程，每 expireTime/3 执行一次，去检查该线程的锁是否存在，如果存在则对锁的过期时间重新设置为 expireTime，即利用守护线程对锁进行“续命”，防止锁由于过期提前释放。

![image-20220314220024341](https://tva1.sinaimg.cn/large/e6c9d24egy1h09rbzt7i7j216s0p4wha.jpg)

## 基于Redis多机实现的Redlock

以上几种基于 Redis 单机实现的分布式锁其实都存在一个问题，就是加锁时只作用在一个 Redis 节点上，即使 Redis 通过 Sentinel 保证了高可用，但由于 Redis 的复制是异步的，Master 节点获取到锁后在未完成数据同步的情况下发生故障转移，此时其他客户端上的线程依然可以获取到锁，因此会丧失锁的安全性。



在 Redis 的分布式环境中，Redis 的作者 antirez 提供了 RedLock 的算法来实现一个分布式锁，该算法大概是这样的：

假设有 N（N>=5）个 Redis 节点，这些节点完全互相独立，不存在主从复制或者其他集群协调机制，确保在这 N 个节点上使用与在 Redis 单实例下相同的方法获取和释放锁。

获取锁的过程，客户端应执行如下操作：

- 获取当前 Unix 时间，以毫秒为单位。
- 按顺序依次尝试从 5 个实例使用相同的 key 和具有唯一性的 value（例如 UUID）获取锁。当向 Redis 请求获取锁时，客户端应该设置一个网络连接和响应超时时间，这个超时时间应该小于锁的失效时间。例如锁自动失效时间为 10 秒，则超时时间应该在 5-50 毫秒之间。这样可以避免服务器端 Redis 已经挂掉的情况下，客户端还在一直等待响应结果。如果服务器端没有在规定时间内响应，客户端应该尽快尝试去另外一个 Redis 实例请求获取锁。
- 客户端使用当前时间减去开始获取锁时间（步骤 1 记录的时间）就得到获取锁使用的时间。当且仅当从大多数（N/2+1，这里是 3 个节点）的 Redis 节点都取到锁，并且使用的时间小于锁失效时间时，锁才算获取成功。
- 如果取到了锁，key 的真正有效时间等于有效时间减去获取锁所使用的时间（步骤 3 计算的结果）。
- 如果因为某些原因，获取锁失败（没有在至少 N/2+1 个 Redis 实例取到锁或者取锁时间已经超过了有效时间），客户端应该在所有的 Redis 实例上进行解锁（使用 Redis Lua 脚本）。

# 参考

1. https://www.infoq.cn/article/dvaaj71f4fbqsxmgvdce

2. https://juejin.cn/post/6844903830442737671#heading-14