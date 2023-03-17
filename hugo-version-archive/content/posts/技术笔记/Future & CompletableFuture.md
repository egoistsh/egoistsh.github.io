---
title: "Future & CompletableFuture"
date: 2021-12-16T16:38:28+08:00
categories: ["技术笔记"]
tags: ["Java并发"]
---

# Future

**Future 模式**是多线程开发中非常常见的一种设计模式，它的核心思想是**异步调用**。

当我们需要调用一个函数方法时，如果这个函数执行的很慢，那么我们就要进行等待。但有时候，我们可能并不急于获取结果。因此，我们可以让被调用者立即返回，让它在后台慢慢处理这个请求。对于调用者来说，则可以先处理一些其他任务，在真正需要数据的场合再去尝试获取需要的数据。

对 Future 模式来说，虽然它无法立即给你需要的数据，但它会给你一个契约，将来你可以凭借这个契约去重新获取你需要的信息。

这里我们主要谈论 JDK 中的 Future 模式，即 java.util.concurrent  包下的 `Future` 接口。

`RunnableFutre` 接口：继承了 `Future` 和 `Runnable` 两个接口。其中run() 方法用于构造真实的数据。

`FutureTask` 类：一个具体的实现类。`WaitNode` 是其内部类。



![](https://tva1.sinaimg.cn/large/008i3skNly1gxfsgo80tpj30u010swhq.jpg)

<center>图：Diagram for FutureTask</center>

## 常见操作

```java
ExecutorService executor = Executors.newFixedThreadPool(4); 
// 定义任务:
Callable<String> task = new Task();
// 提交任务并获得Future:
Future<String> future = executor.submit(task);
// 从Future获取异步执行返回的结果:
String result = future.get(); // 可能阻塞
```

流程：

1. 当我们提交一个`Callable`任务后（`Runnable` 任务没有返回值），我们会同时获得一个`Future`对象。

2. 然后，我们在主线程某个时刻调用`Future`对象的`get()`方法，就可以获得异步执行的结果。

3. 在调用`get()`时，如果异步任务已经完成，我们就直接获得结果。

4. 如果异步任务还没有完成，那么`get()`会阻塞，直到任务完成后才返回结果。



## Future 接口方法

一个`Future<V>`接口表示一个未来可能会返回的结果，它定义的方法有：

- `get()`：获取结果（可能会等待）
- `get(long timeout, TimeUnit unit)`：获取结果，但只等待指定的时间；
- `cancel(boolean mayInterruptIfRunning)`：取消当前任务；
- `isDone()`：判断任务是否已完成。

# CompletableFuture

`CompletableFuture` 是 Java8 新增的工具类，是增强的 Future。

CompletableFuture 它实现了 `Future` 接口，还实现了 `CompletionStage` 接口。

`CompletableFuture` 除了提供了更为好用和强大的 Future 特性之外，还提供了函数式编程的能力。

```java
public class CompletableFuture<T> implements Future<T>, CompletionStage<T> {
}
```

`CompletionStage` 接口也是 Java8 新增的。而这个接口里有多达40种方法，是为了函数式编程中的流式调用准备的。

通过这个接口，我们可以在一个执行结果上进行多次流式调用。

```java
stage.thenApply(x -> square(x)).thenAccept(x -> System.out.print(x)).thenRun(() -> System.out.println)
```

其功能：

- 完成了就通知
- 异步执行任务
- 流式调用
- 异常处理
- 组合多个CompletableFuture

## 常见操作

### 创建CompletableFuture

常见的创建 `CompletableFuture` 对象的方法如下：

1. 通过 new 关键字。
2. 基于 `CompletableFuture` 自带的静态工厂方法：`runAsync()` 、`supplyAsync()` 。

```java
CompletableFuture<RpcResponse<Object>> resultFuture = new CompletableFuture<>();

static <U> CompletableFuture<U> supplyAsync(Supplier<U> supplier);
// 使用自定义线程池(推荐)
static <U> CompletableFuture<U> supplyAsync(Supplier<U> supplier, Executor executor);
static CompletableFuture<Void> runAsync(Runnable runnable);
// 使用自定义线程池(推荐)
static CompletableFuture<Void> runAsync(Runnable runnable, Executor executor);

```

### 处理异步结算的结果

当我们获取到异步计算的结果之后，还可以对其进行进一步的处理，比较常用的方法有下面几个：

- `thenApply()`
- `thenAccept()`
- `thenRun()`
- `whenComplete()`

### 异常处理

- `handle()`
- `exceptionally()`
- `completeExceptionally()`

### 组合CompletableFuture

- `thenCompose()`
- `thenCombine()`

 `thenCompose()` 和 `thenCombine()` 有什么区别呢？

- `thenCompose()` 可以两个 `CompletableFuture` 对象，并将前一个任务的返回结果作为下一个任务的参数，它们之间存在着先后顺序。
- `thenCombine()` 会在两个任务都执行完成后，把两个任务的结果合并。两个任务是并行执行的，它们之间并没有先后依赖顺序。

### 并行运行多个CompletableFuture

- `allOf()`
- `anyOf()`

**`allOf()` 方法会等到所有的 `CompletableFuture` 都运行完成之后再返回**

**`anyOf()` 方法不会等待所有的 `CompletableFuture` 都运行完成之后再返回，只要有一个执行完成即可！**

# 参考

[1] 《实战Java高并发程序设计》

[2] [廖雪峰-使用Future](https://www.liaoxuefeng.com/wiki/1252599548343744/1306581155184674)

[3] [JavaGuide-CompletableFuture入门](https://javaguide.cn/java/concurrent/completablefuture-intro/)



