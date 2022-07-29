---
title: "Nacos"
date: 2022-05-23T14:11:30+08:00
categories: ["技术笔记"]
tags: ["Spring Cloud"]
draft: false
---



服务治理的关键任务就是：服务注册和服务发现。Nacos 就是一个中心化的服务注册中心。

异常容错机制：业界通常的解决方案是“heartbeat”。每个节点每隔一段时间想注册中心同步自己当前的状态。如果注册中心很长一段时间没有收到 Client 的心跳包，就会标记这个节点为下线状态，将其剔除服务列表。

Nacos 的数据模型有三个层次：Namespace、Group、Service/DataId，依次包含。通过 Namespace + Group + Service/DataId，可以精确定位到一个具体的微服务。通过 Namespace 可以做到环境隔离或者多租户隔离。



Nacos 核心功能有两个：

- Naming Service 服务发现
- Config Service ：提供配置管理、动态更新配置和元数据的功能



Nacos 基本架构：

![image-20220723142531385](https://tva1.sinaimg.cn/large/e6c9d24ely1h4gud2rvfdj21e20my793.jpg)

Nacos 内部支持两种一致性协议：

- Raft：侧重一致性
- Distro：侧重可用性，保证最终一致性

## Nacos 自动装配原理

Nacos 通过Spring Boot 的自动装配功能加载配置项并开启服务注册。Spring Cloud 各个组件都采用了自动装配器实现了轻量级组件集成功能，通过几行配置，将初始化工作交给背后的自动装配器执行。

将 Nacos 依赖添加到项目中就同时引入了 Nacos 自带的自动装配器。比如以下几个 Nacos 核心功能的初始化任务：

- NacosDiscoveryAutoConfiguration：服务发现功能的自动装配器
  - 加载 Nacos 配置项：nacosProperties()
  - 声明 NacosServiceDiscovery 类作用服务发现：nacosServiceDiscovery()
- NacosServiceAutoConfiguration
  - 声明核心服务治理类 NacosServiceManager，可以通过service id、group 等参数获取已注册的服务列表
- NacosServiceRegistryAutoConfiguration：服务注册功能的自动装配器



Spring Boot 自动装配流程：

1. Spring Boot 项目启动时，会有使用 @SpringBootApplication，其中包含了 @EnableAutoConfiguration，会去实例化 jar 包中的META-INF/spring.factories 配置的 xxxAutoConfiguration。
2. 而 spring-cloud-starter-alibaba-nacos-discovery 这个包下的 META-INF/spring.factories 定义了 NacosDiscoveryAutoConfiguration 这些自动装配器。



## Nacos 服务发现的底层原理

Nacos Client 通过**主动轮询**方式从Nacos Server 获取服务注册信息，包括地址列表、group 分组、cluster 名称等。

也就是 Nacos Client 会开启一个定时任务，每隔一段时间，从Nacos Server 查询服务注册表，将最新的注册信息更新到本地。

是Pull 模式，客户端主动从服务端拉取。

定时任务是负责拉取服务源码是 UpdateTask 类，是 HostReactive 类的一个内部类。在 fianlly 执行  executor 不断循环。



