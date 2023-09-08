(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{431:function(t,s,_){"use strict";_.r(s);var v=_(7),l=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"查看端口占用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看端口占用"}},[t._v("#")]),t._v(" 查看端口占用")]),t._v(" "),s("p",[t._v("lsof(list open files)，在linux中，一切皆文件。")]),t._v(" "),s("p",[t._v("lsof -i tcp:8080")]),t._v(" "),s("p",[t._v("lsof -i :8080")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("lsof -i:端口号")])]),t._v(" "),s("li",[s("p",[t._v("netstat -tunpl | grep 端口号")])]),t._v(" "),s("li",[s("ul",[s("li",[t._v("-t tcp")]),t._v(" "),s("li",[t._v("-u udp")]),t._v(" "),s("li",[t._v("-n 拒绝显示别名，能显示成数字的全转化成数字")]),t._v(" "),s("li",[t._v("-l listen状态的")]),t._v(" "),s("li",[t._v("-p 显示建立相关链接的程序名")])])]),t._v(" "),s("li",[s("p",[t._v("然后就是kill -9 PID")])])]),t._v(" "),s("p",[t._v("https://www.runoob.com/w3cnote/linux-check-port-usage.html")]),t._v(" "),s("h2",{attrs:{id:"杀死进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#杀死进程"}},[t._v("#")]),t._v(" 杀死进程")]),t._v(" "),s("p",[t._v("kill -9 pid")]),t._v(" "),s("h2",{attrs:{id:"后台运行脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后台运行脚本"}},[t._v("#")]),t._v(" 后台运行脚本")]),t._v(" "),s("ul",[s("li",[t._v("./xxx.sh & (终端退出时，就停了)")]),t._v(" "),s("li",[t._v("nohup ./xxx.sh & (不中断在后台运行。打印信息会输出到当前目录下的nohup.out中)")]),t._v(" "),s("li",[t._v("jobs查看当前shell环境中启动的任务情况。退出当前终端，再重新打开时，jobs看不到正在运行的脚本，ps -ef可以看到。")]),t._v(" "),s("li",[t._v("ps -ef | grep xxx.sh 查看正在运行脚本进程")]),t._v(" "),s("li",[t._v("ctrl + c是中断脚本。ctrl + z是切换到后台并暂停。")]),t._v(" "),s("li",[t._v("bg number 使其在后台执行，fg number 切换到前台执行。（number是使用jobs命令查询到的数字，不是pid）。")])]),t._v(" "),s("h2",{attrs:{id:"ps-ef"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ps-ef"}},[t._v("#")]),t._v(" ps -ef")]),t._v(" "),s("p",[t._v("ps: process status")]),t._v(" "),s("p",[t._v("-e: all the processes with in the system, not just the ones from the current terminal")]),t._v(" "),s("p",[t._v("-f: see a more detailed output")]),t._v(" "),s("p",[t._v("https://www.baeldung.com/linux/ps-command#1-listing-all-processes")]),t._v(" "),s("p",[s("strong",[t._v("ps aux 和ps -ef")]),t._v("两者的输出结果差别不大，但展示风格不同。aux是BSD风格，-ef是System V风格。这是次要的区别，一个影响使用的区别是"),s("strong",[t._v("aux会截断command列")]),t._v("，而-ef不会。当结合grep时这种区别会影响到结果。")]),t._v(" "),s("p",[t._v("推荐使用ps -ef。")]),t._v(" "),s("h2",{attrs:{id:"ll-proc-pid-查看进程所在的目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ll-proc-pid-查看进程所在的目录"}},[t._v("#")]),t._v(" ll /proc/pid 查看进程所在的目录")]),t._v(" "),s("h2",{attrs:{id:"常用记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用记录"}},[t._v("#")]),t._v(" 常用记录")]),t._v(" "),s("ul",[s("li",[t._v("ps -ef | grep xxx")]),t._v(" "),s("li",[t._v("source ~／.bash_pro")]),t._v(" "),s("li",[t._v("tail -f xxx文件")]),t._v(" "),s("li",[t._v("telnet host port")]),t._v(" "),s("li",[t._v("lsof -i tcp :8080 查看端口")]),t._v(" "),s("li",[t._v("netstat -tunlp | grep 8080 查看端口占用")]),t._v(" "),s("li",[t._v("curl -X POST -H 'Content-Type:application/json' -H 'charset=UTF-8' -d '{\"xxx\":\"xxx\"}' http://xxxxx 在服务器里通过curl请求接口，这在生产的服务器中很有用。")])])])}),[],!1,null,null,null);s.default=l.exports}}]);