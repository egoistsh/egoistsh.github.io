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



## Nacos Config 配置中心

实现配置项与业务逻辑的职责分离。

动态更新的应用场景：

- 业务开关
- 业务规则更新
- 灰度发布验证。Nacos 的 Beta 发布功能。



### 长轮询机制

当 Client 向 Nacos Config 服务端发起一个配置查询请求时，服务端并不会立即返回查询结果，而是将这个请求保持一段时间。如果这段时间内又配置项数据的变更，服务端会触发变更时间，客户端会监听到该实践，并获取相关配置变更。如果这段时间没有数据变更，服务端将释放请求。

采用长轮询机制可以降低多次请求带来的网络开销，并降低更新配置项的延迟。



### Nacos config 的使用

1. 添加 spring-cloud-starter-alibaba-nacos-config 和 spring-cloud-starter-bootstrap 依赖
2. 添加本地 Nacos config 配置（boostrap.yml）
3. 添加配置文件到 Nacos Config Server



### 为什么要引入 bootstrap 依赖？

引入 bootstrap 依赖是为了让程序启动时能加载本地的 bootstrap 配置文件，因为 Nacos 配置中心的连接信息需要配置在 bootstrap 文件中，而非 application 文件中。在 Spring Cloud 2020.0.0 版本后，bootstrap 文件不会被自动加载，需要主动添加 spring-cloud-starter-bootstrap 依赖，来开启 bootstrap 的自动加载程序。

在 Spring Boot 规范中，bootstrap 文件通常被用于应用程序的上下文引导，bootstrap.yml 的加载优先级高于 application.yml。



### 动态属性推送实现 Demo

在配置文件中配置了一个特殊的业务属性

在代码中通过 @Value 获取这个属性的值，对其进行判断使用

注意：在Controller类上添加 @RefreshScope 注解，当 Nacos Config 中的属性变动时会动态同步当前类的变量。(原理还是动态代理)

```java
//xxx-service.yml
disableRequest: true
---
@Value("${disableRequest}")
private Boolean disable;

@RefreshScope
public class xxxController {
}
```

