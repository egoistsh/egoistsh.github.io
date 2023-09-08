(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{442:function(t,a,s){"use strict";s.r(a);var n=s(7),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"base"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base"}},[t._v("#")]),t._v(" Base")]),t._v(" "),a("p",[t._v("Sentinel 以流量为切入点，从"),a("strong",[t._v("流量控制")]),t._v("、"),a("strong",[t._v("熔断降级")]),t._v("、"),a("strong",[t._v("系统负载")]),t._v("保护等多个维度保护服务的稳定性。")]),t._v(" "),a("p",[t._v("随着微服务的流行，服务与服务之间的调用稳定性变得越来越重要；")]),t._v(" "),a("p",[t._v("1、当服务访问量达到一定程度，流量扛不住的时候，该如何处理？（限流）")]),t._v(" "),a("p",[t._v("2、服务之间相互依赖，当服务B出现响应时间过长，影响到服务A的响应（A调用B），进而产生连锁反应，直至影响整个依赖链上的所有服务（雪崩），该如何处理？（熔断降级）")]),t._v(" "),a("p",[a("strong",[t._v("Sentinel 分为两个部分")]),t._v(":")]),t._v(" "),a("ul",[a("li",[t._v("核心库（Java 客户端）不依赖任何框架/库，能够运行于所有 Java 运行时环境，同时对 Dubbo / Spring Cloud 等框架也有较好的支持。")]),t._v(" "),a("li",[t._v("控制台（Dashboard）基于 Spring Boot 开发，打包后可以直接运行，不需要额外的 Tomcat 等应用容器。\n"),a("ul",[a("li",[t._v("java -Dserver.port=9091 -jar sentinel-dashboard-1.8.5.jar")])])])]),t._v(" "),a("p",[t._v("限流埋点：")]),t._v(" "),a("ul",[a("li",[t._v("http埋点：sentinel starter默认为所有的http接口提供了限流埋点")]),t._v(" "),a("li",[t._v("自定义埋点：通过 @SentinelResource 定义资源埋点")])]),t._v(" "),a("p",[t._v("流控效果：")]),t._v(" "),a("ul",[a("li",[t._v("快速失败")]),t._v(" "),a("li",[t._v('warm up：通过"冷启动"，让通过的流量'),a("strong",[t._v("缓慢增加")]),t._v("，在"),a("strong",[t._v("一定时间内")]),t._v("逐渐增加到"),a("strong",[t._v("阈值上限")]),t._v("，给冷系统一个"),a("strong",[t._v("预热")]),t._v("的时间，避免冷系统被压垮。底层是令牌桶算法的实现")]),t._v(" "),a("li",[t._v("排队等待：匀速排队方式会严格控制请求通过的间隔时间，也即是让请求以均匀的速度通过，对应的是"),a("strong",[t._v("漏桶算法")]),t._v("。")])]),t._v(" "),a("p",[t._v("流控模式：")]),t._v(" "),a("ul",[a("li",[t._v("直接拒绝")]),t._v(" "),a("li",[t._v("关联：当关联的资源达到阈值时，限流自己")]),t._v(" "),a("li",[t._v("链路：只记录指定链路上的流量（指定资源从入口资源进来的流量，如果达到阈值，就可以限流）")])]),t._v(" "),a("p",[t._v("两种统计类型：")]),t._v(" "),a("ul",[a("li",[t._v("QPS")]),t._v(" "),a("li",[t._v("并发线程数")])]),t._v(" "),a("p",[t._v("熔断降级：")]),t._v(" "),a("p",[t._v("三种熔断策略：")]),t._v(" "),a("ul",[a("li",[t._v("平均响应时间")]),t._v(" "),a("li",[t._v("异常比例")]),t._v(" "),a("li",[t._v("异常数")])]),t._v(" "),a("p",[t._v("熔断和降级（GPT）：")]),t._v(" "),a("p",[t._v("熔断和降级是相关的概念，但它们并不完全相同。")]),t._v(" "),a("p",[t._v("降级是指当系统出现异常、故障、高负载等情况时，为了保证系统的稳定性和可用性，通过一定的手段降低系统的服务能力，提高系统的容错能力，避免系统崩溃或者雪崩。")]),t._v(" "),a("p",[t._v("熔断是指当服务调用失败率超过一定的阈值时，通过断路器的机制，将对该服务的请求熔断或者限制其访问，防止请求继续调用失败，从而保证服务的可用性和稳定性。熔断机制可以减轻系统的负载，避免故障扩散，同时也可以加速故障的恢复。")]),t._v(" "),a("p",[t._v("因此，熔断和降级都是为了保证系统的稳定性和可用性，但它们的实现机制和应用场景不同。降级主要是为了保证整体系统的稳定性和可用性，避免雪崩效应，而熔断主要是为了保护被调用服务的稳定性和可用性，避免错误的请求继续发生，导致服务的负载过高、性能下降或者故障扩散等问题。")]),t._v(" "),a("h2",{attrs:{id:"持久化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#持久化"}},[t._v("#")]),t._v(" 持久化")]),t._v(" "),a("p",[t._v("默认情况下，sentinel-dashboard 中的规则是存储在微服务（不是dashboard的，是实际是使用它的）内存中，重启后就会丢失。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("本地文件持久化：在Sentinel的启动参数中，通过"),a("code",[t._v("-Dcsp.sentinel.dashboard.file=filepath")]),t._v("指定配置文件的路径")])]),t._v(" "),a("li",[a("p",[t._v("用 nacos 当配置中心：需要引入"),a("code",[t._v("sentinel-datasource-nacos")]),t._v("的依赖，并在应用配置文件中配置Nacos的地址和认证信息。Sentinel会自动从Nacos加载规则配置信息。")])]),t._v(" "),a("li",[a("p",[t._v("编程方式加载和持久化：可以通过编程方式加载和持久化规则配置信息。可以使用"),a("code",[t._v("com.alibaba.csp.sentinel.datasource.Converter")]),t._v("接口实现自定义的数据源和规则配置信息的转换逻辑。然后使用"),a("code",[t._v("com.alibaba.csp.sentinel.datasource.ReadableDataSource")]),t._v("和"),a("code",[t._v("com.alibaba.csp.sentinel.datasource.WritableDataSource")]),t._v("接口来加载和持久化规则配置。")])])]),t._v(" "),a("h2",{attrs:{id:"our-project-stratage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#our-project-stratage"}},[t._v("#")]),t._v(" our project stratage")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("用 sentinel做实时监控。")])]),t._v(" "),a("li",[a("p",[t._v("同时在 gateway 网关进行限流")])]),t._v(" "),a("li",[a("p",[t._v("限流参数应该设定，目前为简单模拟，具体参数需要根据实际情况进行调研。")])])]),t._v(" "),a("p",[t._v("当前的规则：（感觉有点奇怪GPT）")]),t._v(" "),a("ol",[a("li",[t._v("针对预订火车票的API接口进行限流：\n"),a("ul",[a("li",[t._v("设置每分钟允许通过的请求数量，例如：500个请求。")]),t._v(" "),a("li",[t._v("设置一个平均响应时间阈值，例如：200毫秒。")]),t._v(" "),a("li",[t._v("设置一个最大并发数，例如：50个并发请求。")])])]),t._v(" "),a("li",[t._v("针对用户注册的API接口进行限流：\n"),a("ul",[a("li",[t._v("设置每小时允许通过的请求数量，例如：100个请求。")]),t._v(" "),a("li",[t._v("设置一个平均响应时间阈值，例如：500毫秒。")]),t._v(" "),a("li",[t._v("设置一个最大并发数，例如：10个并发请求。")])])]),t._v(" "),a("li",[t._v("针对火车票查询的API接口进行限流：\n"),a("ul",[a("li",[t._v("设置每秒允许通过的请求数量，例如：200个请求。")]),t._v(" "),a("li",[t._v("设置一个平均响应时间阈值，例如：100毫秒。")]),t._v(" "),a("li",[t._v("设置一个最大并发数，例如：20个并发请求。")])])])]),t._v(" "),a("p",[t._v("总而言之，针对预定车票接口设定了单机 QPS = 500，然后就快速失败。针对 route id = member 进行限流。")]),t._v(" "),a("h2",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),a("p",[t._v("版本对应：")]),t._v(" "),a("p",[t._v("com.alibaba.cloud 的版本就包括了它包下面的starter。或许引入 alibaba 的包都需要手动指定版本。")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[t._v("如果这种情况maven无法下到包，就先指定版本号让它去下载\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.alibaba.cloud"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-cloud-starter-alibaba-sentinel"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.alibaba.cloud"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-cloud-starter-alibaba-sentinel"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2022.0.0.0-RC1"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"todo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#todo"}},[t._v("#")]),t._v(" todo")]),t._v(" "),a("p",[t._v("需要搞明白：网关限流和具体微服务限流使用上的区别")]),t._v(" "),a("p",[t._v("网关限流可针对 route id 进行统一限流。")]),t._v(" "),a("p",[t._v("具体微服务的限流，更多是对具体的某个api进行限流。")]),t._v(" "),a("p",[t._v("reference:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("https://www.cnblogs.com/gagaxiang/p/17014134.html")])]),t._v(" "),a("li",[a("p",[t._v("https://juejin.cn/post/7018406221120045087#heading-38 more useful 面经")])]),t._v(" "),a("li",[a("p",[t._v("https://github.com/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E 版本说明")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);