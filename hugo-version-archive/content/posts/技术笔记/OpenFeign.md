---
title: "OpenFeign"
date: 2022-05-25T14:11:30+08:00
categories: ["技术笔记"]
tags: ["Spring Cloud"]
draft: false
---

使用 OpenFeign 组件进行远程调用过程。



## 使用步骤

1. 在启动类上声明 @EnableFeignClients
2. 用 @FeignClient 修饰代理接口，需确保接口中的每个方法的请求路径和要调用的目标服务保持一致，FeignClient 指定的服务名称和 Nacos 中服务注册名一致。
3. 发起远程调用



## OpenFeign 的动态代理

OpenFeign 通过 Java 动态代理生成代理类，代理类将接口调用转换成远程服务调用。

![image-20220729164625162](https://tva1.sinaimg.cn/large/e6c9d24ely1h4nw5iudakj21j50u0tb4.jpg)

步骤1~3是项目启动阶段加载完成的。步骤4发生在项目运行阶段。

1. OpenFeign 框架发起一个主动的扫包流程，从指定目录下扫描并加载所有被 @FeignClient 注解修饰的接口。
2. OpenFeign 针对每个 FeignClient 接口生成一个动态代理对象。这个代理对象属于 FeignClient 注解所修饰的接口的实例。
3. 动态代理对象被加入 Spring 上下文中，并注入到对应的服务中。
4. LocalService 发起底层方法调用。这个方法调用实际上会被 OpenFeign 生成的代理对象接管，由代理对象发起一个远程调用，并将结果返回给 LocalService。



## OpenFeign 如何通过动态代理创建代理对象的？

![image-20220729165901282](https://tva1.sinaimg.cn/large/e6c9d24ely1h4nwimvmsoj21kv0u0got.jpg)

1. 项目加载：项目启动阶段，@EnableFeignClients 注解扮演了“启动开关”的角色，通过 @Import 导入了 FeignClientsRegister 类，开始 OpenFeign 组件的加载。
2. 扫包：FeignClientsRegister 负责 FeignClient 接口的加载，扫描指定包路径下被 @FeignClient 注解修饰的接口，并构造 FeignClientFactoryBean 对象来解析 FeignClient 接口。
3. 解析 FeignClient 注解：FeignClientFactoryBean 有两个重要的功能，一是解析 FeignClient 接口中的请求路径和降级函数配置信息；二是触发动态代理的构造过程（由 ReflectiveFeign 完成）。
4. 构建动态代理对象：ReflectiveFeign 包含了 OpenFeign 动态代理的核心逻辑，主要负责创建 FeignClient 接口的动态代理对象。ReflectiveFeign 有两个主要任务：
   1. 解析 FeignClient 接口上各个方法级别的注解，将其中的远程接口URL、接口类型（POST、GET）、请求参数等封装成元数据，并为每个方法生成一个对应的 MethodHandler 类作为方法级别的代理。
   2. 将 MethodHandler 方法代理做进一步的封装，通过 JDK 动态代理，构建一个实现了 InvocationHandler 接口的动态代理对象，并将这个动态代理对象绑定到 FeignClient 接口上。



## 优化 OpenFeign 的使用

通常把 OpenFeign 接口定义在了调用方这一端。如果你的服务需要暴露给很多业务方使用，每个业务方都要维护一套独立的 OpenFeign 接口似乎也不太方便，有什么更好的接口管理办法吗？

- 法1：可以由服务提供方提取一层接口出来， 由服务提供方维护请求路径， 服务消费方，直接声明一个接口extends消费方的接口， 加上@FeignClients即可。
- 法2：每个服务提供方单独添加一个openfeign的模块，服务调用方添加对应的openfeign模块即可



## OpenFeign 其他功能：异常信息排查、超时判定、服务降级

### 异常信息排查

针对打印日志。假如你在开发的是一个下单服务，执行一次下单流程前前后后要调用十多个微服务。你需要在请求发送的前后分别打印 Request 和 Response，不仅麻烦，还未必能把包括 Header 在内的完整请求信息打印出来。

使用 OpenFeign 的小功能，轻松实现远程调用参数的日志打印。既简单又不需要硬编码的日志打印功能，让它自动打印所有远程方法的 Request 和 Response，方便我们做异常信息排查。

Spring Boot 日志默认级别是info，OpenFeign 组件默认日志信息是debug模式输出。

步骤：

1. 设置服务日志打印级别为 debug。
2. 声明 Feign 组件的日志级别（用 @Configuration），设置为 FULL。
   - NONE：不记录任何信息，是 OpenFeign 默认的日志级别
   - BASIC：记录服务请求的 URL、HTTP Method、状态码和服务调用的执行时间
   - HEADERS：在 BASIC 的基础上，还记录了请求和响应中的 HTTP Headers
   - FULL：在 HEADERS 的基础上，还记录了服务请求和服务响应中的 Body 和metadata

```java
// 声明 Feign 日志级别
@org.springframework.context.annotation.Configuration
public class Configuration {
    @Bean
    Logger.Level feignLogger() {
        return Logger.Level.FULL;
    }
}
```

适合测试开发的使用用，生成环境用不上，因为生成环境不会使用 Debug 级别的日志。



### 超时判定

如果目标调用服务RT（Response Time）过高，那你的调用请求也会处于一个长时间挂起，容易造成服务雪崩。

配置超时判定的阈值，一旦下游接口的响应时间超过阈值，程序会自动取消此次调用并返回一个异常。

步骤：(配置 application.yml)

1. 配置 connectTimeout
2. 配置 readTimeout

线上往往会采用多维度的超时判定，比如 OpenFeign + 网关层超时判断 + Sentinel。可以相互作为兜底方案。

超时判定算法的底层：滑动窗口。

```yml
feign:
  client:
    config:
      default:
        connectTimeout: 1000
        readTimeout: 2000
      coupon-template-service:
        connectTimeout: 1000
        readTimeout: 1500
```





### 服务降级

触发熔断-》服务降级。

降级逻辑是在远程服务调用发生超时或者异常（比如 400、500 Error Code）的时候，自动执行的一段业务逻辑。你可以根据具体的业务需要编写降级逻辑，比如执行一段兜底逻辑将服务请求从失败状态中恢复，或者发送一个失败通知到相关团队提醒它们来线上排查问题。

可以使用 Sentinel 组件搭建中心化的服务容错控制逻辑，但这是一种重量级的服务容错手段。

OpenFeign 实现 Client 端的服务降级。尽管它的功能远不如 Sentinel 强大，但它相比于 Sentinel 而言更加轻量级且容易实现，足以满足一些简单的服务降级业务需求。OpenFeign 对服务降级的支持是借助 Hystrix 组件（已移除）实现的，所以现在要使用 OpenFeign + Hystrix（要移除Ribbon，避免冲突）。

OpenFeign 支持两种不同的方式来指定降级逻辑：

- 定义 fallback 类
- 定义 fallback 工厂。可在降级方法中获取到异常的具体原因。

关于服务降级的方案选型，做技术选型的时候也要考虑开发成本和维护成本。

像 Sentinel 这类中心化的服务容错控制台，它的功能固然强大，各种花式玩法它都考虑到了。但相对应地，如果你要在项目中引入 Sentinel，在运维层面你要多维护一个Sentinel 服务集群，并且在代码中接入 Sentinel 也是一个成本项。如果你只需要一些简单的降级功能，那 OpenFeign+Hystrix 的 Client 端降级方案就完全可以满足你的要求。

注意：hystrix使用2.2.10.RELEASE的版本时，要在配置文件里面加上feign.circuitbreaker.enabled: true。

```java
// 定义 fallback 类方式
@Slf4j
@Component
public class TemplateServiceFallback implements TemplateService {
    @Override
    public CouponTemplateInfo getTemplate(Long templateId) {
        log.info("fallback getTemplate");
        return null;
    }
}

@FeignClient(value = "coupon-template-service", path = "/template", fallback = TemplateServiceFallback.class)
public interface TemplateService {
    @GetMapping("/getTemplate")
    CouponTemplateInfo getTemplate(@RequestParam("id") Long templateId);
}
```



```java
// 定义 fallback factory 方式
@Slf4j
@Component
public class TemplateServiceFallbackFactory implements FallbackFactory<TemplateService> {
    @Override
    public TemplateService create(Throwable cause) {
        return new TemplateService() {
            @Override
            public CouponTemplateInfo getTemplate(Long templateId) {
                log.info("fallback factory getTemplate " + cause);
                return null;
            }
        };
    }
}

@FeignClient(value = "coupon-template-service", path = "/template", fallbackFactory = TemplateServiceFallbackFactory.class)
public interface TemplateService {
    @GetMapping("/getTemplate")
    CouponTemplateInfo getTemplate(@RequestParam("id") Long templateId);
}
```

