(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{381:function(v,_,t){"use strict";t.r(_);var s=t(7),r=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"缓存穿透"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存穿透"}},[v._v("#")]),v._v(" 缓存穿透")]),v._v(" "),_("p",[v._v("缓存穿透是指查询一个"),_("strong",[v._v("不存在的数据")]),v._v("，由于缓存是不命中时被动写的，如果从DB查不到数据则不写入缓存，这将导致这个不存在的数据每次请求都要到DB去查询，失去了缓存的意义。在流量大时，可能DB就挂掉了。")]),v._v(" "),_("p",[v._v("解决方案：")]),v._v(" "),_("ol",[_("li",[_("strong",[v._v("缓存空值")]),v._v("，不会查数据库。")]),v._v(" "),_("li",[v._v("采用"),_("strong",[v._v("布隆过滤器")]),v._v("，将所有可能存在的数据哈希到一个足够大的"),_("code",[v._v("bitmap")]),v._v("中，查询不存在的数据会被这个"),_("code",[v._v("bitmap")]),v._v("拦截掉，从而避免了对"),_("code",[v._v("DB")]),v._v("的查询压力。")])]),v._v(" "),_("p",[v._v("布隆过滤器的原理：当一个元素被加入集合时，通过K个哈希函数将这个元素映射成一个位数组中的K个点，把它们置为1。查询时，将元素通过哈希函数映射之后会得到k个点，如果这些点有任何一个0，则被检元素一定不在，直接返回；如果都是1，则查询元素很可能存在，就会去查询Redis和数据库。")]),v._v(" "),_("p",[v._v("布隆过滤器一般用于在大数据量的集合中判定某元素是否存在。")]),v._v(" "),_("h2",{attrs:{id:"缓存雪崩"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存雪崩"}},[v._v("#")]),v._v(" 缓存雪崩")]),v._v(" "),_("p",[v._v("缓存雪崩指："),_("strong",[v._v("缓存在同一时间大面积的失效，后面的请求都直接落到了数据库上，造成数据库短时间内承受大量请求。")])]),v._v(" "),_("p",[v._v("存在两种可能：")]),v._v(" "),_("ul",[_("li",[v._v("系统缓存模块出问题，宕机不可用。")]),v._v(" "),_("li",[v._v("大量访问数据（热点缓存）在某一时刻大面积失效")])]),v._v(" "),_("p",[v._v("解决方案：")]),v._v(" "),_("p",[_("strong",[v._v("针对 Redis 服务不可用的情况：")])]),v._v(" "),_("ol",[_("li",[v._v("采用 Redis 集群，避免单机出现问题整个缓存服务都没办法使用。保证高可用，redis sentinel、redis cluster。")]),v._v(" "),_("li",[v._v("限流，避免同时处理大量的请求。限流熔断降级，sentinel、hystrix。")]),v._v(" "),_("li",[_("strong",[v._v("加锁排队可以起到缓冲的作用")]),v._v("，防止大量的请求同时操作数据库，但它的缺点是"),_("strong",[v._v("增加了系统的响应时间")]),v._v("，"),_("strong",[v._v("降低了系统的吞吐量")]),v._v("，牺牲了一部分用户体验。当缓存未查询到时，对要请求的 key 进行加锁，只允许一个线程去数据库中查，其他线程等候排队。")]),v._v(" "),_("li",[v._v("设置二级缓存。二级缓存指的是除了 Redis 本身的缓存，"),_("strong",[v._v("再设置一层缓存")]),v._v("，当 Redis 失效之后，先去查询二级缓存。例如可以设置一个本地缓存，在 Redis 缓存失效的时候先去查询本地缓存而非查询数据库。")])]),v._v(" "),_("p",[_("strong",[v._v("针对热点缓存失效的情况：")])]),v._v(" "),_("ol",[_("li",[_("strong",[v._v("设置不同的失效时间比如随机设置缓存的失效时间。")])]),v._v(" "),_("li",[v._v("热点缓存永不失效。")])]),v._v(" "),_("h2",{attrs:{id:"缓存击穿"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存击穿"}},[v._v("#")]),v._v(" 缓存击穿")]),v._v(" "),_("p",[v._v("缓存击穿：大量的请求同时查询一个 key 时，此时这个 key 正好失效了，就会导致大量的请求都落到数据库。"),_("strong",[v._v("缓存击穿是查询缓存中失效的 key，而缓存穿透是查询不存在的 key。")])]),v._v(" "),_("p",[v._v("解决方案：")]),v._v(" "),_("p",[v._v("1、"),_("strong",[v._v("加互斥锁")]),v._v("。在并发的多个请求中，只有第一个请求线程能拿到锁并执行数据库查询操作，其他的线程拿不到锁就阻塞等着，等到第一个线程将数据写入缓存后，直接走缓存。可以使用Redis分布式锁实现。")]),v._v(" "),_("p",[v._v("2、"),_("strong",[v._v("热点数据不过期")]),v._v("。直接将缓存设置为不过期，然后由定时任务去异步加载数据，更新缓存。这种方式适用于比较极端的场景，例如流量特别特别大的场景，使用时需要考虑业务能接受数据不一致的时间，还有就是异常情况的处理，保证缓存可以定时刷新。")]),v._v(" "),_("h2",{attrs:{id:"缓存预热"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存预热"}},[v._v("#")]),v._v(" 缓存预热")]),v._v(" "),_("p",[v._v("缓存预热就是系统上线后，将相关的缓存数据直接加载到缓存系统。这样就可以避免在用户请求的时候，先查询数据库，然后再将数据缓存的问题！用户直接查询事先被预热的缓存数据。")]),v._v(" "),_("p",[v._v("解决方案：")]),v._v(" "),_("ol",[_("li",[v._v("直接写个缓存刷新页面，上线时手工操作一下；")]),v._v(" "),_("li",[v._v("数据量不大，可以在项目启动的时候自动进行加载；")]),v._v(" "),_("li",[v._v("定时刷新缓存；")])]),v._v(" "),_("h2",{attrs:{id:"缓存降级"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存降级"}},[v._v("#")]),v._v(" 缓存降级")]),v._v(" "),_("p",[v._v("当访问量剧增、服务出现问题（如响应时间慢或不响应）或非核心服务影响到核心流程的性能时，即使是有损服务，系统可以根据一些关键数据进行自动降级，也可以配置开关实现人工降级。")]),v._v(" "),_("p",[v._v("缓存降级的最终目的是"),_("strong",[v._v("保证核心服务可用")]),v._v("，即使是有损的。而且有些服务是无法降级的（如加入购物车、结算）。")]),v._v(" "),_("p",[v._v("在进行降级之前要对系统进行梳理，看看系统是不是可以丢卒保帅；从而梳理出哪些必须誓死保护，哪些可降级；比如可以参考日志级别设置预案：")]),v._v(" "),_("ol",[_("li",[v._v("一般：比如有些服务偶尔因为网络抖动或者服务正在上线而超时，可以自动降级；")]),v._v(" "),_("li",[v._v("警告：有些服务在一段时间内成功率有波动（如在95~100%之间），可以自动降级或人工降级，并发送告警；")]),v._v(" "),_("li",[v._v("错误：比如可用率低于90%，或者数据库连接池被打爆了，或者访问量突然猛增到系统能承受的最大阀值，此时可以根据情况自动降级或者人工降级；")]),v._v(" "),_("li",[v._v("严重错误：比如因为特殊原因数据错误了，此时需要紧急人工降级。")])]),v._v(" "),_("p",[v._v("服务降级的目的，是为了防止Redis服务故障，导致数据库跟着一起发生雪崩问题。因此，对于不重要的缓存数据，可以采取服务降级策略，例如一个比较常见的做法就是，Redis出现问题，不去数据库查询，而是直接返回默认值给用户。")])])}),[],!1,null,null,null);_.default=r.exports}}]);