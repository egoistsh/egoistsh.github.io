(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{394:function(t,l,n){"use strict";n.r(l);var r=n(7),s=Object(r.a)({},(function(){var t=this,l=t._self._c;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("p",[t._v("https://www.timiguo.com/archives/209/")]),t._v(" "),l("p",[t._v("用户按下Ctrl-C，这个键盘输入产生一个硬件中断。")]),t._v(" "),l("p",[t._v("如果CPU当前正在执行这个进程的代码，则该进程的用户空间代码暂停执行，CPU从用户态切换到内核态处理硬件中断。")]),t._v(" "),l("p",[t._v("终端驱动程序将Ctrl-C解释成一个SIGINT信号，记在该进程的PCB中（也可以说发送了一个SIGINT信号给该进程）。")]),t._v(" "),l("p",[t._v("当某个时刻要从内核返回到该进程的用户空间代码继续执行之前，首先处理PCB中记录的信号，发现有一个SIGINT信号待处理，而这个信号的默认处理动作是终止进程，所以直接终止进程而不再返回它的用户空间代码执行。")]),t._v(" "),l("p",[t._v("注意，Ctrl-C产生的信号只能发给前台进程。一个命令后面加个&可以放到后台运行，这样Shell不必等待进程结束就可以接受新的命令，启动新的进程。Shell可以同时运行一个前台进程和任意多个后台进程，只有前台进程才能接到像Ctrl-C这种控制键产生的信号。前台进程在运行过程中用户随时可能按下Ctrl-C而产生一个信号，也就是说该进程的用户空间代码执行到任何地方都有可能收到SIGINT信号而终止，所以信号相对于进程的控制流程来说是异步（Asynchronous）的。")]),t._v(" "),l("p",[t._v("软中断信号（signal，又简称为信号）用来通知进程发生了异步事件。在软件层次上是对中断机制的一种模拟，在原理上，一个进程收到一个信号与处理器收到一个中断请求可以说是一样的。信号是进程间通信机制中唯一的异步通信机制，一个进程不必通过任何操作来等待信号的到达，事实上，进程也不知道信号到底什么时候到达。进程之间可以互相通过系统调用kill发送软中断信号。内核也可以因为内部事件而给进程发送信号，通知进程发生了某个事件。信号机制除了基本通知功能外，还可以传递附加信息。")])])}),[],!1,null,null,null);l.default=s.exports}}]);