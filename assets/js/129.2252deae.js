(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{451:function(e,i,n){"use strict";n.r(i);var s=n(7),t=Object(s.a)({},(function(){var e=this,i=e._self._c;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("p",[e._v("https://developer.aliyun.com/article/44562")]),e._v(" "),i("p",[e._v("分布式是指将不同的业务分布在不同的地方；而集群指的是将几台服务器集中在一起，实现同一业务。")]),e._v(" "),i("p",[e._v("分布式中的每一个节点，都可以做集群。 而集群并不一定就是分布式的。")]),e._v(" "),i("p",[e._v("简单说，分布式是以缩短单个任务的执行时间来提升效率的，而集群则是通过提高单位时间内执行的任务数来提升效率。")]),e._v(" "),i("p",[e._v("例如：如果一个任务由10个子任务组成，每个子任务单独执行需1小时，则在一台服务器上执行改任务需10小时。")]),e._v(" "),i("p",[e._v("采用分布式方案，提供10台服务器，每台服务器只负责处理一个子任务，不考虑子任务间的依赖关系，执行完这个任务只需一个小时。(这种工作模式的一个典型代表就是Hadoop的Map/Reduce分布式计算模型）")]),e._v(" "),i("p",[e._v("而采用集群方案，同样提供10台服务器，每台服务器都能独立处理这个任务。假设有10个任务同时到达，10个服务器将同时工作，10小后，10个任务同时完成，这样，整身来看，还是1小时内完成一个任务！")]),e._v(" "),i("p",[e._v("redis sentinel 算分布式吗？")]),e._v(" "),i("p",[e._v("Redis Sentinel并不是一个严格意义上的分布式系统，而是Redis提供的一个高可用性解决方案。Redis Sentinel通过运行多个Redis实例来提供故障转移和自动故障恢复功能，使Redis在发生主节点故障时能够自动切换到备用节点。")]),e._v(" "),i("p",[e._v("在Redis Sentinel中，一个主节点可以有多个备用节点，每个备用节点都可以自动接管主节点的工作。当主节点发生故障时，Redis Sentinel会自动从备用节点中选举一个新的主节点，并将新的主节点信息广播给所有客户端。这样，客户端就可以无感知地继续使用Redis服务，而无需手动切换主节点。")]),e._v(" "),i("p",[e._v("虽然Redis Sentinel本身不是一个分布式系统，但它可以通过运行多个Redis实例来提高Redis服务的可用性和容错能力，使得Redis集群更加健壮和可靠。因此，在某些场景下，Redis Sentinel也可以被看作是一种分布式解决方案。")])])}),[],!1,null,null,null);i.default=t.exports}}]);