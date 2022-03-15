---
title: "JVM垃圾回收"
date: 2022-01-04T22:43:47+08:00
categories: ["技术笔记"]
tags: ["JVM"]
draft: false
author: "Billy"
---





## 垃圾回收算法

- 标记-清除 Mark-Sweep
- 标记-复制：常用于新生代
- 标记-整理 Mark-Compact

分代回收：只是根据对象存活周期的不同将内存分为几块。一般将 java 堆分为新生代和老年代，这样我们就可以根据各个年代的特点选择合适的垃圾收集算法。



## 并行和并发

- **并行（Parallel）** ：指多条垃圾收集线程并行工作，但此时用户线程仍然处于等待状态。
- **并发（Concurrent）**：指用户线程与垃圾收集线程同时执行（但不一定是并行，可能会交替执行），用户程序在继续运行，而垃圾收集器运行在另一个 CPU 上。

## 垃圾回收器图解

![](https://tva1.sinaimg.cn/large/008i3skNly1gxknq4l9o1j30uz0u076f.jpg)

![image-20211220221837671](https://tva1.sinaimg.cn/large/008i3skNly1gxknt2ga16j31fo0e2mzi.jpg)

Serial 是单线程的收集器

ParNew 收集器实质上是Serial收集器的多线程并行版本。除了同时使用多条线程进行垃圾收集之外， 其余的行为包括Serial收集器可用的所有控制参数（例如： -XX： SurvivorRatio、 -XX：PretenureSizeThreshold、 -XX： HandlePromotionFailure等） 、 收集算法、 Stop The World、 对象分配规则、 回收策略等都与Serial收集器完全一致， 在实现上这两种收集器也共用了相当多的代码。

ParNew收集器除了支持多线程并行收集之外， 其他与Serial收集器相比并没有太多创新之处。

![image-20211220222205582](https://tva1.sinaimg.cn/large/008i3skNly1gxknwom8opj31h40e6acn.jpg)



![image-20211220223454125](https://tva1.sinaimg.cn/large/008i3skNly1gxkoa08d79j31fi0f0wh6.jpg)

![image-20211220223728691](https://tva1.sinaimg.cn/large/008i3skNly1gxkocp9dq0j31fy0e4adb.jpg)

![image-20211220224748802](https://tva1.sinaimg.cn/large/008i3skNly1gxkonfrgxsj310a0u0gnx.jpg)

![image-20211220225159744](https://tva1.sinaimg.cn/large/008i3skNly1gxkorsmn7nj31g40eqjuj.jpg)

![image-20211221222409725](https://tva1.sinaimg.cn/large/008i3skNly1gxltl62s82j31fs0j2q6h.jpg)

![image-20211221223401283](https://tva1.sinaimg.cn/large/008i3skNly1gxltvehs4kj31f60e0gnc.jpg)

## 垃圾回收器分类

- 经典垃圾回收器
  - 新生代
    - Serial：新生代采用标记-复制算法，老年代采用标记-整理算法。
    - ParNew：serial的多线程版
    - Parallel Scavenge：新生代采用标记-复制算法，老年代采用标记-整理算法。
      - **Parallel Scavenge 收集器关注点是吞吐量（高效率的利用 CPU）。CMS 等垃圾收集器的关注点更多的是用户线程的停顿时间（提高用户体验）。所谓吞吐量就是 CPU 中用于运行用户代码的时间与 CPU 总消耗时间的比值。** Parallel Scavenge 收集器提供了很多参数供用户找到最合适的停顿时间或最大吞吐量，如果对于收集器运作不太了解，手工优化存在困难的时候，使用 Parallel Scavenge 收集器配合自适应调节策略，把内存管理优化交给虚拟机去完成也是一个不错的选择。
      - ParNew和Parallel Scavenge的异同：两者都是复制算法，都是并行处理，但是不同的是，paralel scavenge 可以设置最大gc停顿时间（-XX:MaxGCPauseMills）以及gc时间占比(-XX:GCTimeRatio) 
  - 老年代：
    - Serial Old
    - Parallel Old：多线程+标记整理
    - CMS：Concurrent Mark Sweep，采用标记-清除算法。目标最短回收停顿时间。
  - G1：面向服务器的垃圾收集器,主要针对配备多颗处理器及大容量内存的机器. 以极高概率满足 GC 停顿时间要求的同时,还具备高吞吐量性能特征.（低停顿+高吞吐）。G1 从整体来看是基于“标记-整理”算法实现的收集器；从局部上来看是基于“标记-复制”算法实现的。
    - G1 收集器在后台维护了一个优先列表，每次根据允许的收集时间，优先选择回收价值最大的 **Region**(这也就是它的名字 Garbage-First 的由来) 。
- 低延迟垃圾回收器
  - ZGC：基于Region 内存布局，不设分代，使用了读屏障、染色指针和内存多重映射等技术实现可并发的标记-整理算法，以低延迟为首要目标。
  - Shenandoah



CMS缺点：

- **对 CPU 资源敏感；**
- **无法处理浮动垃圾；**
- **它使用的回收算法-“标记-清除”算法会导致收集结束时会有大量空间碎片产生。**



Shenandoah与G1的3个明显不同：

- 支持并发的整理算法（最重要）。G1的回收阶段是可以多线程并行的，但不能与用户线程并发。
- 目前默认不使用分代回收
- 摒弃G1中耗费大量内存和计算资源去维护的记忆集，使用“连接矩阵”的全局数据结构来记录跨Region的引用关系。



默认搭配：

- JDK8 默认使用的是 Parallel Scavenge + Parallel Old。但一般不用这个。常用ParNew+CMS吧（因为是唯一搭配呀）
- JDK9~16 默认G1



在JVM中是+XX配置实现的搭配组合：

- -XX:+UseSerialGC，虚拟机运行在Client模式下的默认值，Serial+Serial Old。
- -XX:+UseParNewGC，ParNew+Serial Old，在JDK1.8被废弃，在JDK1.7还可以使用。
- -XX:+UseConcMarkSweepGC，ParNew+CMS+Serial Old。
- -XX:+UseParallelGC，虚拟机运行在Server模式下的默认值，Parallel Scavenge+Serial Old(PS Mark Sweep)。
- -XX:+UseParallelOldGC，Parallel Scavenge+Parallel Old。
- -XX:+UseG1GC，G1+G1。

![image-20211222232903949](https://tva1.sinaimg.cn/large/008i3skNly1gxn12zd7eaj314s0seagg.jpg)

![image-20211222222828422](https://tva1.sinaimg.cn/large/008i3skNgy1gxmzbzszs2j317o0judhp.jpg)

**堆内存常见分配策略：**

- 对象优先分配在eden区
- 大对象直接分配到老年代。大对象就是需要大量连续内存空间的对象（比如：字符串、数组）。
- 长期存活的对象进入老年代



**空间分配担保**：目的是确保Minor GC之前老年代有足够空间容纳新生代所有对象

JDK 6 Update 24 之前，在发生 Minor GC 之前，虚拟机必须先检查老年代最大可用的连续空间是否大于新生代所有对象总空间，如果这个条件成立，那这一次 Minor GC 可以确保是安全的。如果不成立，则虚拟机会先查看 `-XX:HandlePromotionFailure` 参数的设置值是否允许担保失败(Handle Promotion Failure);如果允许，那会继续检查老年代最大可用的连续空间是否大于历次晋升到老年代对象的平均大小，如果大于，将尝试进行一次 Minor GC，尽管这次 Minor GC 是有风险的;如果小于，或者 `-XX: HandlePromotionFailure` 设置不允许冒险，那这时就要改为进行一次  Full GC。

JDK 6 Update 24之后的规则变为只要老年代的连续空间大于新生代对象总大小或者历次晋升的平均大小，就会进行 Minor GC，否则将进行 Full GC。



动态对象年龄判定：Hotspot 遍历所有对象时，按照年龄从小到大对其所占用的大小进行累积，当累积的某个年龄大小超过了 survivor 区的 50% 时（默认值是 50%，可以通过 `-XX:TargetSurvivorRatio=percent` 来设置 ），取这个年龄和 `MaxTenuringThreshold`（默认15岁） 中更小的一个值，作为新的晋升年龄阈值”。



**GC分类**

- Partial GC:

  - Minor GC/Young GC

  - Major GC/Old GC
  - Mixed GC：对整个新生代和老年代进行垃圾回收

- Full GC：收集整个Java堆和方法区



## 如何判断一个对象已经无效？

- 引用计数法
  - 实现简单，效率高，但是目前主流的虚拟机中并没有选择这个算法来管理内存，其最主要的原因是它很难解决对象之间相互循环引用的问题。

- 可达性分析法
  - 通过一系列的称为 **“GC Roots”** 的对象作为起点，从这些节点开始向下搜索，节点所走过的路径称为引用链，当一个对象到 GC Roots 没有任何引用链相连的话，则证明此对象是不可用的。



**可作为GC Roots的对象：**

- 虚拟机栈（栈帧中的本地变量表）中引用的对象
- 本地方法栈（Native方法）中引用的对象
- 方法区中类静态属性引用的对象
- 方法区中常量引用的对象
- 所有被同步锁持有的对象



## 引用

JDK1.2 之前，Java 中引用的定义很传统：如果 reference 类型的数据存储的数值代表的是另一块内存的起始地址，就称这块内存代表一个引用。

JDK1.2 以后，Java 对引用的概念进行了扩充，将引用分为强引用、软引用、弱引用、虚引用四种（引用强度逐渐减弱）



- 强引用（StrongReference）

  以前我们使用的大部分引用实际上都是强引用，这是使用最普遍的引用。如果一个对象具有强引用，那就类似于必不可少的生活用品，**垃圾回收器绝不会回收它**。当内存空间不足，Java 虚拟机宁愿抛出 OutOfMemoryError 错误，使程序异常终止，也不会靠随意回收具有强引用的对象来解决内存不足问题。

- 软引用（SoftReference）

  如果一个对象只具有软引用，那就类似于可有可无的生活用品。**如果内存空间足够，垃圾回收器就不会回收它，如果内存空间不足了，就会回收这些对象的内存。**只要垃圾回收器没有回收它，该对象就可以被程序使用。软引用可用来实现内存敏感的高速缓存。

  软引用可以和一个引用队列（ReferenceQueue）联合使用，如果软引用所引用的对象被垃圾回收，JAVA 虚拟机就会把这个软引用加入到与之关联的引用队列中。

- 弱引用（WeakReference）

  如果一个对象只具有弱引用，那就类似于可有可无的生活用品。弱引用与软引用的区别在于：只具有弱引用的对象拥有更短暂的生命周期。在垃圾回收器线程扫描它所管辖的内存区域的过程中，**一旦发现了只具有弱引用的对象，不管当前内存空间足够与否，都会回收它的内存**。不过，由于垃圾回收器是一个优先级很低的线程， 因此不一定会很快发现那些只具有弱引用的对象。

  弱引用可以和一个引用队列（ReferenceQueue）联合使用，如果弱引用所引用的对象被垃圾回收，Java 虚拟机就会把这个弱引用加入到与之关联的引用队列中。

- 虚引用（PhantomReference）

  "虚引用"顾名思义，就是形同虚设，与其他几种引用都不同，虚引用并不会决定对象的生命周期。**如果一个对象仅持有虚引用，那么它就和没有任何引用一样，在任何时候都可能被垃圾回收。**

  **虚引用主要用来跟踪对象被垃圾回收的活动**。

  **虚引用与软引用和弱引用的一个区别在于：** 虚引用**必须**和引用队列（ReferenceQueue）联合使用。当垃圾回收器准备回收一个对象时，如果发现它还有虚引用，就会在回收对象的内存之前，把这个虚引用加入到与之关联的引用队列中。程序可以通过判断引用队列中是否已经加入了虚引用，来了解被引用的对象是否将要被垃圾回收。程序如果发现某个虚引用已经被加入到引用队列，那么就可以在所引用的对象的内存被回收之前采取必要的行动。

  特别注意，在程序设计中一般很少使用弱引用与虚引用，使用软引用的情况较多，这是因为**软引用可以加速 JVM 对垃圾内存的回收速度，可以维护系统的运行安全，防止内存溢出（OutOfMemory）等问题的产生**。

[你会使用软引用和弱引用吗？](https://cloud.tencent.com/developer/article/1752779)软引用和弱引用的例子不错。



## **常量池的位置**

JDK1.7 之前运行时常量池逻辑包含字符串常量池存放在方法区, 此时 hotspot 虚拟机对方法区的实现为永久代。

JDK1.7 字符串常量池被从方法区拿到了堆中, 这里没有提到运行时常量池,也就是说字符串常量池被单独拿到堆,运行时常量池剩下的东西还在方法区, 也就是 hotspot 中的永久代 。

JDK1.8 hotspot 移除了永久代用元空间(Metaspace)取而代之, 这时候字符串常量池还在堆, 运行时常量池还在方法区, 只不过方法区的实现从永久代变成了元空间(Metaspace)

假如在字符串常量池中存在字符串 "abc"，如果当前没有任何 String 对象引用该字符串常量的话，就说明常量 "abc" 就是废弃常量，如果这时发生内存回收的话而且有必要的话，"abc" 就会被系统清理出常量池了。



## 如何判断一个类是无用的类

方法区主要回收的是无用的类，那么如何判断一个类是无用的类的呢？

判定一个常量是否是“废弃常量”比较简单，而要判定一个类是否是“无用的类”的条件则相对苛刻许多。类需要同时满足下面 3 个条件才能算是 **“无用的类”** ：

- 该类所有的实例都已经被回收，也就是 Java 堆中不存在该类的任何实例。
- 加载该类的 `ClassLoader` 已经被回收。
- 该类对应的 `java.lang.Class` 对象没有在任何地方被引用，无法在任何地方通过反射访问该类的方法。

虚拟机可以对满足上述 3 个条件的无用类进行回收，这里说的仅仅是“可以”，而并不是和对象一样不使用了就会必然被回收。
