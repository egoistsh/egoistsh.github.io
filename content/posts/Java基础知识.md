---
title: "Java基础知识"
date: 2021-03-02T21:57:05+08:00
categories: ["技术分享"]
tags: ["Java基础"]
---





## 请你谈谈Java中是如何支持正则表达式操作的？

Java中的String类提供了支持正则表达式操作的方法，包括：matches()、replaceAll()、replaceFirst()、split()。此外，Java中可以用Pattern类表示正则表达式对象，它提供了丰富的API进行各种正则表达式操作，如：

```java
import java.util.regex.Matcher;
import java.util.regex.Pattern;
class RegExpTest {
    public static void main(String[] args) {
        String str = "成都市(成华区)(武侯区)(高新区)";
        Pattern p = Pattern.compile(".*?(?=\\()");
        Matcher m = p.matcher(str);
        if(m.find()) {
            System.out.println(m.group());
        }
    }
}
```

## 请你讲讲&和&&的区别？

&运算符有两种用法：**(1)按位与；(2)逻辑与。&&运算符是短路与运算**。逻辑与跟短路与的差别是非常巨大的，虽然二者都要求运算符左右两端的布尔值都是true整个表达式的值才是true。&&之所以称为短路运算是因为，如果&&左边的表达式的值是false，右边的表达式会被直接短路掉，不会进行运算。很多时候我们可能都需要用&&而不是&，例如在验证用户登录时判定用户名不是null而且不是空字符串，应当写为：username != null &&!username.equals("")，二者的顺序不能交换，更不能用&运算符，因为第一个条件如果不成立，根本不能进行字符串的equals比较，否则会产生NullPointerException异常。



## int和Integer有什么区别？

Java是一个近乎纯洁的面向对象编程语言，但是为了编程的方便还是引入了基本数据类型，但是为了能够将这些基本数据类型当成对象操作，Java为每一个基本数据类型都引入了对应的包装类型（wrapper class），int的包装类就是Integer，从Java 5开始引入了自动装箱/拆箱机制，使得二者可以相互转换。
Java 为每个原始类型提供了包装类型：
\- 原始类型: boolean，char，byte，short，int，long，float，double
\- 包装类型：Boolean，Character，Byte，Short，Integer，Long，Float，Double

## 请你说明String 和StringBuffer的区别

JAVA 平台提供了两个类：String和StringBuffer，它们可以储存和操作字符串，即包含多个字符的字符数据。这个String类提供了数值**不可改变的字符串**。而这个StringBuffer类提供的字符串进行修改。当你知道字符数据要改变的时候你就可以使用StringBuffer。典型地，你可以使用StringBuffers来动态构造字符数据。

StringBuilder不是线程安全，StringBuffer是线程安全的

## 请你讲讲数组(Array)和列表(ArrayList)的区别？什么时候应该使用Array而不是ArrayList？

Array和ArrayList的不同点：

Array可以包含基本类型和对象类型，ArrayList只能包含对象类型。
Array大小是固定的，ArrayList的大小是动态变化的。
ArrayList提供了更多的方法和特性，比如：addAll()，removeAll()，iterator()等等。
对于基本类型数据，集合使用自动装箱来减少编码工作量。但是，当处理固定大小的基本数据类型的时候，这种方式相对比较慢。

## 请你解释什么是值传递和引用传递？

值传递是对基本型变量而言的,传递的是该变量的一个副本,改变副本不影响原变量.
引用传递一般是对于对象型变量而言的,传递的是该对象地址的一个副本, 并不是原对象本身 。 所以对引用对象进行操作会同时改变原对象.
一般认为,java内的传递都是值传递.



理解：https://blog.csdn.net/w372426096/article/details/82216742

你有一把钥匙，当你的朋友想要去你家的时候，如果你直接把你的钥匙给他了，这就是引用传递。这种情况下，如果他对这把钥匙做了什么事情，比如他在钥匙上刻下了自己名字，那么这把钥匙还给你的时候，你自己的钥匙上也会多出他刻的名字。

你有一把钥匙，当你的朋友想要去你家的时候，你复刻了一把新钥匙给他，自己的还在自己手里，这就是值传递。这种情况下，他对这把钥匙做什么都不会影响你手里的这把钥匙。

但是，不管上面哪种情况，你的朋友拿着你给他的钥匙，进到你的家里，把你家的电视砸了。那你说你会不会受到影响？而我们在pass方法中，改变user对象的name属性的值的时候，不就是在“砸电视”么。你改变的不是那把钥匙，而是钥匙打开的房子。

## 请你讲讲Java支持的数据类型有哪些？什么是自动拆装箱？

Java语言支持的8种基本数据类型是：
byte
short
int
long
float
double
boolean
char
自动装箱是Java编译器在基本数据类型和对应的对象包装类型之间做的一个转化。比如：把int转化成Integer，double转化成Double，等等。反之就是自动拆箱。



[1] Java基本数据类型总结：https://www.cnblogs.com/doit8791/archive/2012/05/25/2517448.html

## 请你解释为什么会出现4.0-3.6=0.40000001这种现象？

原因简单来说是这样：2进制的小数无法精确的表达10进制小数，计算机在计算10进制小数的过程中要先转换为2进制进行计算，这个过程中出现了误差。

## 请你讲讲一个十进制的数在内存中是怎么存的？

补码的形式。

## 请你说说Lamda表达式的优缺点。

优点：1. 简洁。2. 非常容易并行计算。3. 可能代表未来的编程趋势。

缺点：1. 若不用并行计算，很多时候计算速度没有比传统的 for 循环快。（并行计算有时需要预热才显示出效率优势）2. 不容易调试。3. 若其他程序员没有学过 lambda 表达式，代码不容易让其他语言的程序员看懂。

JAVA8-lambda表达式-并行流，提升效率的利器？https://blog.csdn.net/weigeshikebi/article/details/80030312

## 你知道java8的新特性吗，请简单介绍一下

**Lambda 表达式** − Lambda允许把函数作为一个方法的参数（函数作为参数传递进方法中。

**方法引用**− 方法引用提供了非常有用的语法，可以直接引用已有Java类或对象（实例）的方法或构造器。与lambda联合使用，方法引用可以使语言的构造更紧凑简洁，减少冗余代码。

**默认方法**− 默认方法就是一个在接口里面有了一个实现的方法。

**Stream API** −新添加的Stream API（java.util.stream） 把真正的函数式编程风格引入到Java中。

**Date Time API** − 加强对日期与时间的处理。

**Optional 类** − Optional 类已经成为 Java 8 类库的一部分，**用来解决空指针异常**。

新工具− 新的编译工具，如：Nashorn引擎 jjs、 类依赖分析器jdeps。

Nashorn, JavaScript 引擎 − Java 8提供了一个新的Nashorn javascript引擎，它允许我们在JVM上运行特定的javascript应用。

## 简单记录

JIT：just time 即时编译编译器

深入浅出 JIT 编译器：https://developer.ibm.com/zh/articles/j-lo-just-in-time/



HHVM：HipHop Virtual Machine 是Facebook 开发的高性能PHP 虚拟机，宣称比官方的快9倍

