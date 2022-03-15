---
title: "Flume快速上手"
date: 2021-06-01T23:38:28+08:00
categories: ["技术笔记"]
tags: ["Flume"]

---

本文旨在提供一个快速上手Flume的教程，内容上麻雀虽小但五脏俱全.

# 什么是Flume
> Flume is a distributed, reliable, and available service for efficiently collecting, aggregating, and moving large amounts of log data.

Flume 是一种分布式、可靠且可用的服务，用于高效地收集、聚合和移动大量日志数据。由此可见，flume的应用场景是处理大量的日志数据。


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1dfc4010ed684fd2aa153572a52ba24a~tplv-k3u1fbpfcp-watermark.image)

其中框框部分就是Flume。  
由Source、Channel、Sink三个核心组件组成。整体构成一个Agent。

名词解释：
- Source：是负责接受数据到Agent的组件。
- Channel：位于Source和Sink之间的缓冲区。
- Sink：负责将事件从从Channel写入到其他地方。可以是另一个Agent也可以是存储系统。
- Event：Flume以事件的形式传递数据。

# 一个例子
## 安装（针对Linux）
1. 官网下载 apache-flume-1.7.0-bin.tar.gz
2. 解压 tar -zxf apache-flume-1.7.0-bin.tar.gz

## 使用
主要是配置一个flume的配置文件，这里起名example.conf，规定以如下形式：

```
# Name the components on this agent
a1.sources = r1 //定义了一个agent a1，r1为a1的source
a1.sinks = k1 //k1为a1的sink
a1.channels = c1 //c1为a1的channel

# Describe/configure the source
a1.sources.r1.type = netcat #source r1的类型为netcat
a1.sources.r1.bind = localhost #source r1绑定的地址
a1.sources.r1.port = 44444 #source r1绑定的端口

# Describe the sink
a1.sinks.k1.type = logger #sink k1的类型

# Use a channel which buffers events in memory
a1.channels.c1.type = memory #channel c1的类型
a1.channels.c1.capacity = 1000 #channel c1的容量
a1.channels.c1.transactionCapacity = 100 #channel c1的事务容量

# Bind the source and sink to the channel
a1.sources.r1.channels = c1 #source r1和channel c1绑定
a1.sinks.k1.channel = c1 #sink k1和channel c1绑定
```

启动命令：  
`
bin/flume-ng agent --conf conf --conf-file example.conf --name a1 -Dflume.root.logger=INFO,console
`

# 组件种类
以下列举的是常用的组件类型，有用到其他的类型可以通过官网直接直接搜索类型查看详情
## source
- avro：用于接收从另一个flume（agent）中收到的数据
- exec：用于接收从命令中获取的数据，如结合命令tail -f使用
- netcat：用于接收端口传来的数据
- spooling directory：用于接收文件变动的数据

## channel
- memory channel 内存，速度快，但宕机时有数据丢失的风险
- file channel 速度比较慢，但安全
- kafka channel

## sink
- avro 输出到另一个flume（agent）
- hdfs 输出到hdfs
- logger 日志形式输出
- file 文件形式落地

> To be continue...

# 参考
1. [Flume官网用户使用手册](https://flume.apache.org/releases/content/1.9.0/FlumeUserGuide.html)