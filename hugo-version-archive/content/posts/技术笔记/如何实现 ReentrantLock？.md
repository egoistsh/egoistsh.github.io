---
title: "如何实现 ReentrantLock？"
date: 2022-09-04T21:11:30+08:00
categories: ["技术笔记"]
tags: ["Java并发"]
draft: false
---

## ReentrantLock 是什么？提供什么功能？

ReentrantLock 为可重入锁，指一个线程可以对临界资源重复加锁。

- 支持公平锁和非公平锁。

- 支持设置多个条件。

- 支持响应中断。 



**公平锁和非公平锁：**

公平锁是指多个线程**按照申请锁的顺序**来获取锁，线程直接进入队列中排队，队列中的第一个线程才能获得锁。公平锁的优点是等待锁的线程不会饿死。缺点是整体吞吐效率相对非公平锁要低，等待队列中除第一个线程以外的所有线程都会阻塞，CPU唤醒阻塞线程的开销比非公平锁大。

非公平锁是多个线程加锁时**直接尝试获取锁**，获取不到才会到等待队列的队尾等待。但如果此时锁刚好可用，那么这个线程可以无需阻塞直接获取到锁。非公平锁的优点是可以减少唤起线程的开销，整体的吞吐效率高，因为线程有几率不阻塞直接获得锁，CPU不必唤醒所有线程。缺点是处于等待队列中的线程可能会饿死，或者等很久才会获得锁。

## ReentrantLock 跟 Synchronized 的对比

|            | ReentrantLock                  | Synchronized     |
| ---------- | ------------------------------ | ---------------- |
| 锁实现机制 | 依赖 AQS                       | 依赖 JDK         |
| 灵活性     | 支持响应中断、超时、尝试获取锁 | 不灵活           |
| 锁释放形式 | 必须显示调用 unlock()          | 自动释放监视器   |
| 锁类型     | 公平锁 & 非公平锁              | 非公平锁         |
| 条件队列   | 可关联多个条件                 | 只能关联一个条件 |
| 可重入性   | 可重入                         | 可重入           |

都是可重入锁。可重入的意思是同一个线程在外层方法获取锁的时候，该线程的内层方法会自动获取该锁（前提是锁的对象是同一个对象或class），不会因为之前获取过还没释放而阻塞。在一定程度上可以避免死锁。

## ReentrantLock 的使用

```java
ReentrantLock lock = new ReentrantLock();
lock.lock();
try {
    if(lock.tryLock(100, TimeUnit.MILLISECONDS)){ }
} finally {
    lock.unlock()
}
```

## ReentrantLock 是如何实现的？

### 整体实现流程

继承 AQS，具体获取锁的方法由内部类公平锁（FairSync）和非公平锁（NonfairSync）重写 tryAcquire() 方法实现，该方法通过 CAS 去设置 state，如果该方法返回了 true，表示当前线程获取锁成功，执行结束；如果该方法返回 false，表示获取失败，则需要加入等待队列中，通过执行 addWaiter(Node.EXCLUSIVE)。

在 ReentrantLock 里面的公平锁和非公平锁的父类 Sync 定义了可重入锁的释放锁机制，重写了 tryRelease() 方法。

### 重入锁和其他非重入锁的实现

通过父类 AQS 中维护的同步状态 state 来计算重入次数，state 初始化为0。

当线程尝试获取锁时，可重入锁先尝试获取并更新 state 值，如果 state == 0 表示没有其他线程占用，将 state 置位1，当前线程开始执行；如果 state != 0，则判断当前线程是否是获取到这个锁的线程，如果是的话，state + 1，且当前线程可以再次获取锁。

非重入锁则是直接去获取并尝试更新当前 state 的值，如果 state != 0，则获取锁失败，当前线程阻塞。



### 公平锁和非公平锁的实现

ReentrantLock 的公平锁和非公平锁都是独享锁。当一个线程调用 lock 方法获取锁时，如果同步资源没有被其他线程锁住，那么当前线程使用 CAS 更新 state 值成功后会抢占该资源。如果同步资源被占用且不是当前线程占用时，则加锁失败。



ReentrantLock 中有一个内部类 Sync，Sync 继承了 AQS（AbstractQueuedSynchronizer），公平锁（FairSync）和非公平锁（NonfairSync）继承了Sync。ReentrantLock默认使用非公平锁，可通过构造器指定使用公平锁。

公平锁与非公平锁的 lock() 方法唯一的区别就在于公平锁在获取同步状态时多了一个限制条件：hasQueuedPredecessors()。主要是用于判断当前线程是否位于同步队列中的第一个。如果是则返回true，否则返回false。

公平锁就是通过同步队列来实现多个线程按照申请锁的顺序来获取锁，从而实现公平的特性。非公平锁加锁时不考虑排队等待问题，直接尝试获取锁，所以存在后申请却先获得锁的情况。

## ReentranLock 与 AQS

加锁逻辑：通过 CAS 设置 state，设置成功表示获取锁成功。获取锁失败则进入等待队列处理。



ReentrantLock 加锁解锁时 API 层核心方法的映射关系：

![img](https://cdn.nlark.com/yuque/0/2022/png/1558860/1662296856679-e3e29773-2205-4168-a7a4-1f43dff0f81f.png)



## AQS

AQS 的核心思想是，如果共享资源空闲，将当前请求资源的线程设置为有效的工作线程，同时通过 CAS 将共享资源的状态（state）设置为锁定状态。如果共享资源被占用，则通过阻塞等待唤醒机制来保证锁的分配，这里通过 CLH 队列的变体实现，将暂时没获取到锁的线程加入队列。



### 底层数据结构

- Node节点的 CLH队列。原始的 CLH 是单向链表，AQS 的队列是 CLH 的变体，是虚拟双向队列，AQS 通过将每条请求共享资源的线程封装成一个节点（Node）来实现锁的分配。
- state。用 volatile int state 表示同步状态，通过 CAS 完成对 state 值的修改，通过队列完成资源获取的排队。

![img](https://cdn.nlark.com/yuque/0/2022/png/1558860/1662295951613-2b6bdfe4-3ce4-460a-b8ad-1b010a088e3c.png)![img](https://cdn.nlark.com/yuque/0/2022/png/1558860/1662296091491-fe7b8987-b9bb-4daa-8287-abed88b139cc.png)



### 通过修改 state 同步状态实现多线程的独占模式和共享模式

![img](https://cdn.nlark.com/yuque/0/2022/png/1558860/1662296471551-4913834d-9f8c-49ad-b55a-8ecf908c101d.png)![img](https://cdn.nlark.com/yuque/0/2022/png/1558860/1662296488370-5df93895-95f4-4e44-87dd-0b23ad8b521f.png)

### 自定义同步器

- 独占模式，实现 tryAcquire-tryRelease。如 ReentrantLock
- 共享模式，实现 ryAcquireShared-tryReleaseShared
- 同时实现独占和共享两种模式。如 ReentrantReadWriteLock



```java
public class LeeLock  {

    private static class Sync extends AbstractQueuedSynchronizer {
        @Override
        protected boolean tryAcquire (int arg) {
            return compareAndSetState(0, 1);
        }

        @Override
        protected boolean tryRelease (int arg) {
            setState(0);
            return true;
        }

        @Override
        protected boolean isHeldExclusively () {
            return getState() == 1;
        }
    }

    private Sync sync = new Sync();

    public void lock () {
        sync.acquire(1);
    }

    public void unlock () {
        sync.release(1);
    }
}


public class LeeMain {

    static int count = 0;
    static LeeLock leeLock = new LeeLock();

    public static void main (String[] args) throws InterruptedException {

        Runnable runnable = new Runnable() {
            @Override
            public void run () {
                try {
                    leeLock.lock();
                    for (int i = 0; i < 10000; i++) {
                        count++;
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                } finally {
                    leeLock.unlock();
                }

            }
        };
        Thread thread1 = new Thread(runnable);
        Thread thread2 = new Thread(runnable);
        thread1.start();
        thread2.start();
        thread1.join();
        thread2.join();
        System.out.println(count);
    }
}
```

上述代码每次运行结果都会是 20000。通过简单的几行代码实现同步功能。

### AQS 应用

**实现 ReentrantLock 可重入性**

1. State 初始化的时候为 0，表示没有任何线程持有锁。
2. 当有线程持有该锁时，值就会在原来的基础上+1，同一个线程多次获得锁是，就会多次+1，这里就是可重入的概念。
3. 解锁也是对这个字段-1，一直到 0，此线程对锁释放。



**同步工具**

| 同步工具               | 同步工具与 AQS 的关联                                        |
| ---------------------- | ------------------------------------------------------------ |
| ReentrantLock          | 使用 AQS 保存锁重复持有的次数。当一个线程获取锁时，ReentrantLock 记录当前获得锁的线程标识，用于检测是否重复获取，以及错误线程试图解锁操作时异常情况的处理。 |
| Semaphore              | 使用 AQS 同步状态来保存信号量的当前计数。tryRelease 会增加计数，acquireShared 会减少计数。 |
| CountDownLatch         | 使用 AQS 同步状态来表示计数。计数为 0 时，所有的 Acquire 操作（CountDownLatch 的 await 方法）才可以通过。 |
| ReentrantReadWriteLock | 使用 AQS 同步状态中的 16 位保存写锁持有的次数，剩下的 16 位用于保存读锁的持有次数。 |
| ThreadPoolExecutor     | Worker 利用 AQS 同步状态实现对独占线程变量的设置（tryAcquire 和 tryRelease）。 |

## Q & A（ReentrantLock）

Q：某个线程获取锁失败的后续流程是什么呢？

A：存在某种排队等候机制，线程继续等待，仍然保留获取锁的可能，获取锁流程仍在继续。

Q：既然说到了排队等候机制，那么就一定会有某种队列形成，这样的队列是什么数据结构呢？

A：是 CLH 变体的 FIFO 双端队列。

Q：处于排队等候机制中的线程，什么时候可以有机会获取锁呢？

A：前置节点是头结点，且当前线程获取锁成功

Q：如果处于排队等候机制中的线程一直无法获取锁，需要一直等待么？还是有别的策略来解决这一问题？

A：线程所在节点的状态会变成取消状态，取消状态的节点会从队列中释放。

Q：Lock 函数通过 Acquire 方法进行加锁，但是具体是如何加锁的呢？

A：AQS 的 Acquire 会调用 tryAcquire 方法，tryAcquire 由各个自定义同步器实现，通过 tryAcquire 完成加锁过程。

## 参考资料

- [【基本功】不可不说的Java“锁”事](https://mp.weixin.qq.com/s?__biz=MjM5NjQ5MTI5OA==&mid=2651749434&idx=3&sn=5ffa63ad47fe166f2f1a9f604ed10091&chksm=bd12a5778a652c61509d9e718ab086ff27ad8768586ea9b38c3dcf9e017a8e49bcae3df9bcc8&scene=38#wechat_redirect)
- [从ReentrantLock的实现看AQS的原理及应用](https://javaguide.cn/java/concurrent/reentrantlock.html#前言)
- [synchronized 实现原理 | 小米信息部技术团队](https://xiaomi-info.github.io/2020/03/24/synchronized/)
- [AQS 详解](https://javaguide.cn/java/concurrent/aqs.html#aqs-简单介绍)
