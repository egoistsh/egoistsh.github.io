(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{343:function(t,a,v){"use strict";v.r(a);var _=v(7),s=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#场景"}},[t._v("#")]),t._v(" 场景")]),t._v(" "),a("p",[t._v("系统特别卡顿，很多页面都打不开了，作为后端开发如何快速定位问题？")]),t._v(" "),a("h2",{attrs:{id:"可能原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可能原因"}},[t._v("#")]),t._v(" 可能原因")]),t._v(" "),a("p",[t._v("对于造成这种问题的可能原因，迅速的在头脑中闪过四种情况：")]),t._v(" "),a("p",[t._v("1、某个接口响应时间超长，并且可能被频繁调用")]),t._v(" "),a("p",[t._v("2、产生了过大的对象，造成频繁FGC")]),t._v(" "),a("p",[t._v("3、代码出现死循环")]),t._v(" "),a("p",[t._v("4、线程出现死锁")]),t._v(" "),a("p",[t._v("登录到对应的服务器上执行了top命令，发现cpu飙升到100%，这种问题需要应该快速的定位到问题，否则会影响线上系统的正常作业。")]),t._v(" "),a("p",[t._v("定位问题步骤：")]),t._v(" "),a("ol",[a("li",[t._v("top 查看到哪个进程")]),t._v(" "),a("li",[t._v("top -Hp pid 查看某个进程下的线程情况")]),t._v(" "),a("li",[t._v('printf "%x" threadid 将线程id转换为16进制，假设这里得到了3c41。因为堆栈里，线程id是用16进制表示的。')]),t._v(" "),a("li",[t._v('jstack pid | grep 0x3c41 -C50 --color 打印给定Java进程的Java堆栈信息，并通过管道符将其输出到 grep 命令中，在 grep 命令中查找包含字符串 "0x3c41" 的行，并显示其前后各 50 行（总计 101 行）的内容，同时将匹配到的字符串高亮显示。')]),t._v(" "),a("li",[t._v("也可以执行命令 jstack -l 23002 >/data1/23002.statck 将对应的进程号的栈信息输入到指定目录")])]),t._v(" "),a("p",[t._v("如果有大对象产生，应该会有多个进程CPU占用都会超过80%，其中有多个进程在在进行GC，从而造成CPU飙升。如果只有一个线程CPU资源飙升，可以排除产生大对象问题。")]),t._v(" "),a("p",[t._v("执行jstack的时候，执行用户需要和进程启动用户一直，否则会提示下面错误："),a("code",[t._v("Unable to open socket file: target process not responding or HotSpot VM not loaded The -F option can be used when the target process is not responding")])]),t._v(" "),a("p",[t._v("jstat -gcutil 23002 2000 5 输出该进程在jvm中的占用情况  每2000毫秒执行一次 一共执行5次")]),t._v(" "),a("h2",{attrs:{id:"linux和macos中top命令的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux和macos中top命令的区别"}},[t._v("#")]),t._v(" linux和macos中top命令的区别")]),t._v(" "),a("p",[t._v("Linux 和 macOS 中的 top 命令虽然在功能上类似，但是在实现上有些许差异。\nLinux 和 macOS 中的 top 命令支持的参数略有不同。例如，Linux 中的 top 命令可以使用 -H 参数来显示进程的线程信息，也可以在交互界面使用H切换，而 macOS 中则不支持。")]),t._v(" "),a("p",[t._v("虽然两个系统的 top 命令都能够显示进程的 CPU 占用率、内存使用情况等信息，但在显示方式上有所不同。例如，Linux 中的 top 命令默认情况下可以显示进程的 VIRT（虚拟内存）和 RES（实际使用内存）信息，而 macOS 中的 top 命令则默认不显示这些信息。")]),t._v(" "),a("h2",{attrs:{id:"jstack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jstack"}},[t._v("#")]),t._v(" jstack")]),t._v(" "),a("p",[t._v("jstack 是一个 Java 虚拟机提供的命令行工具，用于生成当前 Java 应用程序的线程转储信息，可以帮助开发人员和运维人员诊断 Java 应用程序的"),a("strong",[t._v("性能问题和死锁问题")]),t._v("。")]),t._v(" "),a("p",[t._v("jstack 命令可以通过命令行或者图形界面工具来运行，生成的线程转储信息包含了当前所有线程的调用栈信息，以及每个线程所持有的锁和等待的锁的信息等。这些信息可以帮助开发人员或者运维人员快速定位出应用程序中的性能问题、死锁问题等。")]),t._v(" "),a("p",[t._v("下面是 jstack 命令的一些常用用法："),a("code",[t._v("jstack [options] <pid>")]),t._v("\n其中，options 是一些可选的命令参数，pid 表示 Java 应用程序的进程 ID。")]),t._v(" "),a("p",[t._v("常用参数：\n-F：当 jstack 命令无法正常输出线程转储信息时，可以使用该参数进行强制输出。该参数可能会影响系统的性能。\n-l：输出线程的锁信息。\n-m：输出所有线程的 Native 堆栈信息。\n-h：显示帮助信息。")]),t._v(" "),a("p",[t._v("输出信息：jstack 命令输出的线程转储信息包括以下内容：")]),t._v(" "),a("ul",[a("li",[t._v("线程 ID：每个线程的唯一标识符。")]),t._v(" "),a("li",[t._v("线程状态：每个线程的状态，如 WAITING、BLOCKED、TIMED_WAITING 等。")]),t._v(" "),a("li",[t._v("线程调用栈：每个线程的调用栈信息，包括方法名、方法签名、代码行数等。")]),t._v(" "),a("li",[t._v("锁信息：每个线程所持有的锁和等待的锁的信息。")])]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("p",[t._v("https://developer.aliyun.com/article/1093780")])])}),[],!1,null,null,null);a.default=s.exports}}]);