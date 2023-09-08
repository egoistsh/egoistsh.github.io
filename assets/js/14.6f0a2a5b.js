(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{337:function(a,v,s){"use strict";s.r(v);var t=s(7),_=Object(t.a)({},(function(){var a=this,v=a._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h2",{attrs:{id:"类的生命周期"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#类的生命周期"}},[a._v("#")]),a._v(" 类的生命周期")]),a._v(" "),v("p",[a._v("Java虚拟机把描述类的数据从class文件加载到内存，并对数据进行验证、解析和初始化，最终形成可以被虚拟机直接使用的Java类型，这个过程被称作虚拟机的类加载机制。")]),a._v(" "),v("p",[a._v("与那些在编译器需要进行连接的语言不同，在Java语言里，类型的加载、连接和初始化都是在程序运行期间完成的。")]),a._v(" "),v("p",[a._v("一个类从被加载到虚拟机内存中开始，到卸载出内存为止，它的整个生命周期将会经历7个阶段。")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://p.ipic.vip/i73uih.png",alt:"image-20230319152651537"}})]),a._v(" "),v("h2",{attrs:{id:"类加载"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#类加载"}},[a._v("#")]),a._v(" 类加载")]),a._v(" "),v("p",[a._v("类加载全过程：加载、验证、准备、解析、初始化。")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("加载：主要是在内存中生成一个代表这个类的 Class 对象，作为方法区这个类的访问入口")])]),a._v(" "),v("li",[v("p",[a._v("连接")]),a._v(" "),v("ul",[v("li",[a._v("验证：确保 Class 文件的字节流满足“Java虚拟机规范”")]),a._v(" "),v("li",[a._v("准备：给类中定义的变量（static 修饰的静态变量）分配内存并设置初始值。")]),a._v(" "),v("li",[a._v("解析：将常量池中的符号引用替换为直接引用的过程。\n"),v("ul",[v("li",[a._v("符号引用是“Java虚拟机规范”所定义的 Class 文件格式。比如CONSTAN_class_info 这些变量")]),a._v(" "),v("li",[a._v("直接引用是可以直接指向目标的指针、相对偏移量或能间接定位到目标的句柄。有了直接引用，引用的对象必定在虚拟机的内存中存在。")])])])])]),a._v(" "),v("li",[v("p",[a._v("初始化：执行类构造器方法")])])]),a._v(" "),v("p",[a._v("第一阶段，加载阶段（Loading）：虚拟完成三件事")]),a._v(" "),v("ul",[v("li",[a._v("通过类的全限定名获取其定义的二进制字节流（.class）。【class loader】")]),a._v(" "),v("li",[a._v("将这个字节流所代表的静态存储结构转化为方法区的运行时数据结构。")]),a._v(" "),v("li",[a._v("在 Java 堆中生成一个代表这个类的 java.lang.Class 对象，作为对方法区中这些数据的访问入口。")])]),a._v(" "),v("p",[v("img",{attrs:{src:"https://p.ipic.vip/l3qmdj.png",alt:"image-20230319164455842"}})]),a._v(" "),v("h2",{attrs:{id:"类加载器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#类加载器"}},[a._v("#")]),a._v(" 类加载器")]),a._v(" "),v("p",[a._v("Java虚拟机设计团队有意把类加载阶段中的“通过一个类的全限定名来获取描述该类的二进制字节流”这个动作放到Java虚拟机外部去实现， 以便让应用程序自己决定如何去获取所需的类。 实现这个动作的代码被称为“类加载器”（Class Loader） 。")]),a._v(" "),v("p",[a._v("JDK 9 之前：")]),a._v(" "),v("p",[a._v("绝大多数Java程序都会使用到以下3个系统提供的类加载器来进行加载。")]),a._v(" "),v("ol",[v("li",[a._v("启动类加载器 Bootstrap Class Loader：负责加载存放在 <JAVA_HOME>\\lib目录，或被 -Xbootclasspath参数所指定的路径中存放的，并且是Java虚拟机能识别的类库加载到虚拟机的内存中。（eg：rt.jar、tools.jar）")]),a._v(" "),v("li",[a._v("扩展类加载器 Extension Class Loader：负责加载 <JAVA_HOME>\\lib\\ext目录，或被 java.ext.dirs系统变量所指定的路径中所有的类库。")]),a._v(" "),v("li",[a._v("应用程序类加载器/系统类加载器 Application Class Loader：负责加载用户类路径（ClassPath）上所有的类库。如果应用程序中没有自定义过自己的类加载器，一般情况下这个就是程序中"),v("strong",[a._v("默认的类加载器")]),a._v("。")])]),a._v(" "),v("p",[a._v("如果有需要，还可以自定义类加载器。eg：增加除了磁盘位置之外的Class文件来源， 或者通过类加载器实现类的隔离、 重载等功能。")]),a._v(" "),v("h2",{attrs:{id:"双亲委派模型-parents-delegation-model"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#双亲委派模型-parents-delegation-model"}},[a._v("#")]),a._v(" 双亲委派模型（Parents Delegation Model）")]),a._v(" "),v("p",[v("strong",[a._v("双亲委派模型的工作过程是：")]),a._v(" 如果一个类加载器收到了类加载的请求，它首先不会自己去尝试加载这个类，而是把这个请求委派给父类加载器去完成，每一个层次的类加载器都是如此，因此所有的加载请求最终都应该传送到最顶层的启动类加载器中，只有当父类加载器反馈自己无法完成这个加载请求（它的搜索范围中没有找到所需的类）时，子加载器才会尝试自己去完成加载。")]),a._v(" "),v("p",[a._v("使用双亲委派模型来组织类加载器之间的关系， 一个显而易见的好处就是Java中的类随着它的类加载器一起具备了一种带有优先级的层次关系。 例如类java.lang.Object， 它存放在rt.jar之中， 无论哪一个类加载器要加载这个类， 最终都是委派给处于模型最顶端的启动类加载器进行加载， 因此Object类在程序的各种类加载器环境中都能够保证是同一个类。")]),a._v(" "),v("p",[a._v("优点：")]),a._v(" "),v("ul",[v("li",[a._v("防止内存中出现多份同样字节码的系统类。")]),a._v(" "),v("li",[a._v("保证 Java 程序安全稳定运行。")])]),a._v(" "),v("h2",{attrs:{id:"java模块化系统-jdk-9"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#java模块化系统-jdk-9"}},[a._v("#")]),a._v(" Java模块化系统（JDK 9）")])])}),[],!1,null,null,null);v.default=_.exports}}]);