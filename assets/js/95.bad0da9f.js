(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{421:function(t,e,a){"use strict";a.r(e);var v=a(7),l=Object(v.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("消息队列的主要作用是：")]),t._v(" "),e("ol",[e("li",[t._v("解耦")]),t._v(" "),e("li",[t._v("异步。减少响应所需时间")]),t._v(" "),e("li",[t._v("削峰")])]),t._v(" "),e("p",[t._v("消息队列的缺点 ：")]),t._v(" "),e("ol",[e("li",[t._v("降低系统的可用性：系统引入的外部依赖越多，越容易挂掉；")]),t._v(" "),e("li",[t._v("系统复杂度提高：使用 MQ 后可能需要保证消息没有被重复消费、处理消息丢失的情况、保证消息传递的顺序性等等问题；")]),t._v(" "),e("li",[t._v("一致性问题：A 系统处理完了直接返回成功了，但问题是：要是 B、C、D 三个系统那里，B 和 D 两个系统写库成功了，结果 C 系统写库失败了，就造成数据不一致了。")])]),t._v(" "),e("h2",{attrs:{id:"常用mq对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用mq对比"}},[t._v("#")]),t._v(" 常用MQ对比")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("特性")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("RabbitMQ")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Apache Kafka")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Apache RocketMQ")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("ActiveMQ")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("AMQP、STOMP、MQTT等多种协议")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Pub/Sub消息系统")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("纯Java消息队列")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JMS消息系统")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("性能")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("稳定、性能一般，适合小规模应用")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("高吞吐量、低延迟，适合大规模分布式系统")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("高吞吐量、低延迟，适合大规模分布式系统")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("性能一般，适合小规模应用")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("可用性")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持多种HA机制，包括主从复制、镜像队列、集群等")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持多种HA机制，包括主从复制、分区副本等")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持多种HA机制，包括主从复制、Broker HA、Namesrv HA、异地多活等")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持多种HA机制，包括主从复制、集群等")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("可靠性")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持事务、持久化、消息确认等机制，保证消息可靠性")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持副本机制、持久化、消息确认等机制，保证消息可靠性")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持主从复制、持久化、消息确认等机制，保证消息可靠性")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持持久化、消息确认等机制，保证消息可靠性")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("管理工具")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持Web管理界面、CLI、REST API等多种管理工具")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持Web管理界面、CLI等多种管理工具")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持Web管理界面、CLI等多种管理工具")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持Web管理界面、CLI等多种管理工具")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("社区支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("开源社区活跃，文档丰富，插件丰富")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("开源社区活跃，文档丰富，插件丰富")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("开源社区活跃，文档丰富，插件丰富")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("开源社区活跃，文档丰富，插件丰富")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("适用场景")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("中小规模应用、需要事务支持、需要AMQP协议的应用")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("大规模分布式系统、实时数据处理、日志收集等")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("大规模分布式系统、高可用性场景、需要事务支持的应用")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("中小规模应用、需要JMS协议的应用")])])])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("吞吐量：万级的 ActiveMQ 和 RabbitMQ 的吞吐量（ActiveMQ 的性能最差）要比十万级甚至是百万级的 RocketMQ 和 Kafka 低一个数量级。")])]),t._v(" "),e("li",[e("p",[t._v("可用性：都可以实现高可用。ActiveMQ 和 RabbitMQ 都是基于主从架构实现高可用性。RocketMQ 基于分布式架构。 Kafka 也是分布式的，一个数据多个副本，少数机器宕机，不会丢失数据，不会导致不可用")])]),t._v(" "),e("li",[e("p",[t._v("时效性：RabbitMQ 基于 Erlang 开发，所以并发能力很强，性能极其好，延时很低，达到微秒级，其他几个都是 ms 级。")])]),t._v(" "),e("li",[e("p",[t._v("功能支持：Pulsar 的功能更全面，支持多租户、多种消费模式和持久性模式等功能，是下一代云原生分布式消息流平台。")])]),t._v(" "),e("li",[e("p",[t._v("消息丢失：ActiveMQ 和 RabbitMQ 丢失的可能性非常低， Kafka、RocketMQ 和 Pulsar 理论上可以做到 0 丢失。")])]),t._v(" "),e("li",[e("p",[t._v("ActiveMQ 的社区算是比较成熟，但是较目前来说，ActiveMQ 的性能比较差，而且版本迭代很慢，不推荐使用，已经被淘汰了。")])]),t._v(" "),e("li",[e("p",[t._v("RabbitMQ 在吞吐量方面虽然稍逊于 Kafka 、RocketMQ 和 Pulsar，但是由于它基于 Erlang 开发，所以并发能力很强，性能极其好，延时很低，达到微秒级。但是也因为 RabbitMQ 基于 Erlang 开发，所以国内很少有公司有实力做 Erlang 源码级别的研究和定制。如果业务场景对并发量要求不是太高（十万级、百万级），那这几种消息队列中，RabbitMQ 或许是你的首选。")])]),t._v(" "),e("li",[e("p",[t._v("RocketMQ 和 Pulsar 支持强一致性，对消息一致性要求比较高的场景可以使用。")])]),t._v(" "),e("li",[e("p",[t._v("RocketMQ 阿里出品，Java 系开源项目，源代码我们可以直接阅读，然后可以定制自己公司的 MQ，并且 RocketMQ 有阿里巴巴的实际业务场景的实战考验。")])]),t._v(" "),e("li",[e("p",[t._v("Kafka 的特点其实很明显，就是仅仅提供较少的核心功能，但是提供超高的吞吐量，ms 级的延迟，极高的可用性以及可靠性，而且分布式可以任意扩展。同时 Kafka 最好是支撑较少的 topic 数量即可，保证其超高吞吐量。Kafka 唯一的一点劣势是有可能消息重复消费，那么对数据准确性会造成极其轻微的影响，在大数据领域中以及日志采集中，这点轻微影响可以忽略这个特性天然适合大数据实时计算以及日志收集。如果是大数据领域的实时计算、日志采集等场景，用 Kafka 是业内标准的。")])])]),t._v(" "),e("h2",{attrs:{id:"jms和amqp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jms和amqp"}},[t._v("#")]),t._v(" JMS和AMQP")]),t._v(" "),e("h3",{attrs:{id:"jms"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jms"}},[t._v("#")]),t._v(" JMS")]),t._v(" "),e("p",[t._v("JMS（JAVA Message Service,java 消息服务）是 Java 的消息服务，JMS 的客户端之间可以通过 JMS 服务进行异步的消息传输。"),e("strong",[t._v("JMS API 是一个消息服务的标准或者说是规范")]),t._v("，允许应用程序组件基于 JavaEE 平台创建、发送、接收和读取消息。它使分布式通信耦合度更低，消息服务更加可靠以及异步性。")]),t._v(" "),e("p",[t._v("ActiveMQ 就是基于 JMS 规范实现的。")]),t._v(" "),e("p",[t._v("JMS的两种消息模型")]),t._v(" "),e("ul",[e("li",[t._v("点到点模式（P2P）")]),t._v(" "),e("li",[t._v("发布/订阅模式（Pub/Sub），通过topic订阅，类似广播")])]),t._v(" "),e("h3",{attrs:{id:"amqp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#amqp"}},[t._v("#")]),t._v(" AMQP")]),t._v(" "),e("p",[t._v("AMQP，即 Advanced Message Queuing Protocol，一个提供统一消息服务的应用层标准"),e("strong",[t._v("高级消息队列协议")]),t._v("（二进制应用层协议），是应用层协议的一个开放标准，为面向消息的中间件设计，兼容 JMS。基于此协议的客户端与消息中间件可传递消息，并不受客户端/中间件同产品，不同的开发语言等条件的限制。")]),t._v(" "),e("p",[t._v("RabbitMQ 就是基于 AMQP 协议实现的。")]),t._v(" "),e("h3",{attrs:{id:"jms-vs-amqp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jms-vs-amqp"}},[t._v("#")]),t._v(" JMS vs AMQP")]),t._v(" "),e("ul",[e("li",[t._v("AMQP 为消息定义了线路层（wire-level protocol）的协议，而 JMS 所定义的是 API 规范。在 Java 体系中，多个 client 均可以通过 JMS 进行交互，不需要应用修改代码，但是其对跨平台的支持较差。而 AMQP 天然具有跨平台、跨语言特性。")]),t._v(" "),e("li",[t._v("JMS 支持 "),e("code",[t._v("TextMessage")]),t._v("、"),e("code",[t._v("MapMessage")]),t._v(" 等复杂的消息类型；而 AMQP 仅支持 "),e("code",[t._v("byte[]")]),t._v(" 消息类型（复杂的类型可序列化后发送）。")]),t._v(" "),e("li",[t._v("由于 Exchange 提供的路由算法，AMQP 可以提供多样化的路由方式来传递消息到消息队列，而 JMS 仅支持 队列 和 主题/订阅方式两种。")])]),t._v(" "),e("html")])}),[],!1,null,null,null);e.default=l.exports}}]);