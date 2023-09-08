(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{413:function(e,r,t){"use strict";t.r(r);var v=t(7),l=Object(v.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"什么是-mvc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是-mvc"}},[e._v("#")]),e._v(" 什么是 MVC")]),e._v(" "),r("p",[e._v("MVC英文是Model View Controller，是模型(model)－视图(view)－控制器(controller)的缩写，一种软件设计规范。本质上也是一种解耦。")]),e._v(" "),r("p",[e._v("用一种业务逻辑、数据、界面显示分离的方法，将业务逻辑聚集到一个部件里面，在改进界面时，不需要重新编写业务逻辑。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://p.ipic.vip/0mxd3m.png",alt:"img"}})]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Model")]),e._v("（模型）是应用程序中用于处理应用程序数据逻辑的部分。通常模型对象负责在数据库中存取数据。")]),e._v(" "),r("li",[r("strong",[e._v("View")]),e._v("（视图）是应用程序中处理数据显示的部分。通常视图是依据模型数据创建的。")]),e._v(" "),r("li",[r("strong",[e._v("Controller")]),e._v("（控制器）是应用程序中处理用户交互的部分。通常控制器负责从视图读取数据，控制用户输入，并向模型发送数据。")])]),e._v(" "),r("h2",{attrs:{id:"spring-mvc-的请求流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-mvc-的请求流程"}},[e._v("#")]),e._v(" Spring MVC 的请求流程")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://p.ipic.vip/17exxi.png",alt:"img"}})]),e._v(" "),r("p",[r("strong",[e._v("核心架构的具体流程步骤")]),e._v("如下：")]),e._v(" "),r("ol",[r("li",[r("strong",[e._v("首先用户发送请求——>DispatcherServlet")]),e._v("，前端控制器收到请求后自己不进行处理，而是委托给其他的解析器进行处理，作为统一访问点，进行全局的流程控制；")]),e._v(" "),r("li",[r("strong",[e._v("DispatcherServlet——>HandlerMapping")]),e._v("， HandlerMapping 将会把请求映射为 HandlerExecutionChain 对象（包含一 个Handler 处理器（页面控制器）对象、多个HandlerInterceptor 拦截器）对象，通过这种策略模式，很容易添加新的映射策略；")]),e._v(" "),r("li",[r("strong",[e._v("DispatcherServlet——>HandlerAdapter")]),e._v("，HandlerAdapter 将会把处理器包装为适配器，从而支持多种类型的处理器， 即适配器设计模式的应用，从而很容易支持很多类型的处理器；")]),e._v(" "),r("li",[r("strong",[e._v("HandlerAdapter——>处理器功能处理方法的调用")]),e._v("，HandlerAdapter 将会根据适配的结果调用真正的处理器的功能处 理方法，完成功能处理；并返回一个ModelAndView 对象（包含模型数据、逻辑视图名）；")]),e._v(" "),r("li",[r("strong",[e._v("ModelAndView 的逻辑视图名——> ViewResolver")]),e._v("，ViewResolver 将把逻辑视图名解析为具体的View，通过这种策 略模式，很容易更换其他视图技术；")]),e._v(" "),r("li",[r("strong",[e._v("View——>渲染")]),e._v("，View 会根据传进来的Model 模型数据进行渲染，此处的Model 实际是一个Map 数据结构，因此 很容易支持其他视图技术；")]),e._v(" "),r("li",[r("strong",[e._v("返回控制权给DispatcherServlet")]),e._v("，由DispatcherServlet 返回响应给用户，到此一个流程结束。")])])])}),[],!1,null,null,null);r.default=l.exports}}]);