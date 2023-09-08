(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{438:function(s,a,t){"use strict";t.r(a);var n=t(7),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"jdk-9-新特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jdk-9-新特性"}},[s._v("#")]),s._v(" jdk 9 新特性")]),s._v(" "),a("h3",{attrs:{id:"模块化开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块化开发"}},[s._v("#")]),s._v(" 模块化开发")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("使用 module-info.java 来声明一个模块，名字是固定的，在顶层包的同目录下。")])]),s._v(" "),a("li",[a("p",[s._v("使用 exports 声明可以被外部引用的包，可以有多个 exports 语句。")])]),s._v(" "),a("li",[a("p",[s._v("使用 requires 声明依赖的外部模块，可以有多个 requires 语句。")])])]),s._v(" "),a("p",[s._v("优点：")]),s._v(" "),a("ul",[a("li",[s._v("更好的代码隔离性和安全性")]),s._v(" "),a("li",[s._v("更简单的依赖管理")]),s._v(" "),a("li",[s._v("更好的性能")]),s._v(" "),a("li",[s._v("更好的可重用性和可扩展性")])]),s._v(" "),a("h2",{attrs:{id:"jdk-10-新特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jdk-10-新特性"}},[s._v("#")]),s._v(" jdk 10 新特性")]),s._v(" "),a("h3",{attrs:{id:"var-局部变量推导"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#var-局部变量推导"}},[s._v("#")]),s._v(" var 局部变量推导")]),s._v(" "),a("p",[s._v("要求：")]),s._v(" "),a("ol",[a("li",[s._v("必须能推导出实际类型")]),s._v(" "),a("li",[s._v("只能用于局部变量")])]),s._v(" "),a("h2",{attrs:{id:"jdk-11-性特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jdk-11-性特性"}},[s._v("#")]),s._v(" jdk 11 性特性")]),s._v(" "),a("h3",{attrs:{id:"单文件程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单文件程序"}},[s._v("#")]),s._v(" 单文件程序")]),s._v(" "),a("p",[s._v("可以直接在命令行使用 java Test.java 运行单文件。而不用javac去编译.class再运行。")]),s._v(" "),a("h3",{attrs:{id:"支持shebang脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持shebang脚本"}},[s._v("#")]),s._v(" 支持shebang脚本")]),s._v(" "),a("p",[s._v("#!符号叫做shebang。是linux的命令。")]),s._v(" "),a("p",[s._v("#!/bin/bash 表示以此开头的文件，在执行时会调用/bin/bash程序来执行")]),s._v(" "),a("p",[s._v("#!+jdk位置")]),s._v(" "),a("h2",{attrs:{id:"jdk14新特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jdk14新特性"}},[s._v("#")]),s._v(" jdk14新特性")]),s._v(" "),a("h3",{attrs:{id:"文本块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文本块"}},[s._v("#")]),s._v(" 文本块")]),s._v(" "),a("p",[s._v("方便写多行字符串")]),s._v(" "),a("p",[s._v("用法：使用三个双引号。")]),s._v(" "),a("h3",{attrs:{id:"instanceof-增强"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instanceof-增强"}},[s._v("#")]),s._v(" instanceof 增强")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//jdk8")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//jdk14")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"jdk16-新特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jdk16-新特性"}},[s._v("#")]),s._v(" jdk16 新特性")]),s._v(" "),a("h3",{attrs:{id:"record类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#record类"}},[s._v("#")]),s._v(" record类")]),s._v(" "),a("p",[s._v("跟 class、interface同级")]),s._v(" "),a("p",[s._v("只能初始化一次，不能再修改。")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("record")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"jdk17-新特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jdk17-新特性"}},[s._v("#")]),s._v(" jdk17 新特性")]),s._v(" "),a("h3",{attrs:{id:"sealed类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sealed类"}},[s._v("#")]),s._v(" sealed类")]),s._v(" "),a("p",[s._v("sealed 是个关键字。")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sealed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Test1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("permits")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Test2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Test3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("non-sealed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Test2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Test1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Test3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sealed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("痛点：类的继承难被管理，使用 sealed显示管理")]),s._v(" "),a("p",[s._v("规则：")]),s._v(" "),a("ul",[a("li",[s._v("父类如果是sealed类，则必须至少有一个子类。")]),s._v(" "),a("li",[s._v("sealed类的子类，必须是final，sealed，non-sealed 之一。")])]),s._v(" "),a("h3",{attrs:{id:"switch-增强"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#switch-增强"}},[s._v("#")]),s._v(" switch 增强")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("switch")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"default"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);