---
title: "Self-Attention概述"
date: 2021-10-12T15:20:04+08:00
categories: ["科研"]
tags: ["attention"]

---

# Self-Attention

## 什么是self-attention？

self-attention会考虑所有的input，去输出output，考虑了全局的资讯。输入几个input就输出几个output。

fully-connected network，专注于处理某一个位置的咨询。

往往交替使用self-attention和fully-connected

<img src="https://tva1.sinaimg.cn/large/008i3skNly1gvpck9jd7vj60he0fet9s02.jpg" alt="image-20211023165641983" style="zoom:50%;" />

## self-attention的运作

<img src="https://tva1.sinaimg.cn/large/008i3skNly1gvpco8w57oj60oa0dyabr02.jpg" alt="image-20211023170033342" style="zoom:50%;" />

宏观上其每一个b都是考虑了所有的a以后产生的。

关键在于如何考虑a的所有咨询。self-attention通过一个数值α来表示每一个向量跟当前input的关联程度。

<img src="https://tva1.sinaimg.cn/large/008i3skNly1gvpcsxv25bj60m60cyjsl02.jpg" alt="image-20211023170504288" style="zoom:50%;" />

attention模组就是拿两个向量作为输入，然后输出α。计算α一般有两种做法：

- dot product（常用）：输入的两个向量分别乘上两个不同的矩阵，左边这个向量乘上$W^q$这个矩阵得到矩阵$q$,右边这个向量乘上$W^k$这个矩阵得到矩阵$k$。再把q和k做dot product得到α。
- additive：同样这两个向量通过$W^q$ $W^k$,得到$q$跟$k$,然后把它这个串起来,然后丢到一个Activation Function，然后再通过一个转换得到α。

<img src="https://tva1.sinaimg.cn/large/008i3skNly1gvpd1pu8ufj60m00emgm602.jpg" alt="image-20211023171330711" style="zoom: 67%;" />

<img src="https://tva1.sinaimg.cn/large/008i3skNly1gvpd3zqcb7j60wa0nwq4m02.jpg" alt="image-20211023171540830" style="zoom:50%;" />

这里的activation function可以用别的，ReLU、softmax都可以尝试。



接着从$α'$中抽取出整个输入里重要的咨询。

- 首先把$a^1$到$a^4$这边每一个向量,乘上$W^v $得到新的向量,这边分别就是用$v^1 v^2 v^3 v^4$来表示

- 接下来把这边的$v^1$到$v^4$,每一个向量都去乘上Attention的分数,都去乘上$α'$

- 然后再把它加起来,得到$b^1$

$$
b^1=\sum_i\alpha'_{1,i}v^i
$$

如果某一个向量它得到的分数越高,比如说如果$a^1$跟$a^2$的关联性很强,这个$α'$得到的值很大,那在做Weighted Sum以后,得到的$b^1$的值,就可能会比较接近$v^2$。

所以谁的Attention的分数最大,谁的$v$就会显现出你抽出来的结果。





<img src="https://tva1.sinaimg.cn/large/008i3skNly1gvpddjv40hj60w20lw76f02.jpg" alt="image-20211023172453303" style="zoom:50%;" />



 vector 得到 $b^1$,跟从这一排 vector 得到 $b^2$,它的操作是一模一样的。 $b^1$ 到 $b^4$,它们并**不需要依序產生**,它们是一次同时被计算出来的，可以并行化计算。

## 从矩阵的角度看

<img src="https://tva1.sinaimg.cn/large/008i3skNly1gvpdmhl5ubj60w00ngjsz02.jpg" alt="image-20211023173328123" style="zoom:50%;" />

- I 是 Self-attention 的 input,Self-attention 的 input 是一排的vector,这排 vector 拼起来当作矩阵的 column,就是 I
- 这个 input 分别乘上三个矩阵,$W^q$ $W^k$ 跟$ W^v$,得到 Q K V 
- 这三个矩阵,接下来 Q 乘上 K 的 transpose,得到 A 这个矩阵,A 的矩阵你可能会做一些处理,得到 $A'$,那有时候我们会把这个 $A'$,叫做 ==Attention Matrix==，**生成Q矩阵就是为了得到Attention的score**
- 然后接下来你把 $A'$ 再乘上 V,就得到 O,O 就是 Self-attention 这个 layer 的输出,**生成V是为了计算最后的b，也就是矩阵O**



 $W^k$ 跟$ W^v$ 而已,只有$W^q$ $W^k$ 跟$ W^v$是未知的**,是需要通过的训练资料训练出来的。从 I 到 O 就是做了 Self-attention。

Attention机制的本质思想：通过Query和Keys计算对应的value的权重，再对value进行加权求和，得到最终的Attention数值。

## Multi-head Self-attention

Self-attention 有一个进阶的版本,叫Multi-head Self-attention,今天应用得非常地广泛。

需要用多少head，又是一个hyperparameter。



什么是head？为什么我们要用到多头呢？

在做 Self-attention 的时候,我们就是用 q 去找相关的 k,但是**相关这件事情有很多种不同的形式**,有很多种不同的定义,所以也许我们不能只有一个 q,我们应该要有多个 q,**不同的 q 负责不同种类的相关性**。

![image-20211023174423279](https://tva1.sinaimg.cn/large/008i3skNly1gvpdxvsxhfj60w40cydgx02.jpg)

- 先把 a 乘上一个矩阵得到 q
- 再把 q 乘上另外两个矩阵,分别得到 $q^1$ 跟 $q^2$,用两个上标,i 代表的是位置,然后这个 1 跟 2 代表是,这个位置的第几个 q,所以这边有 $q^{i,1}$ 跟 $q^{i,2}$,代表说我们有两个 head



这个问题,裡面有两种不同的相关性,是我们需要产生两种不同的 head,来找两种不同的相关性。

既然 q 有两个,那 k 也就要有两个,那 v 也就要有两个,从 q 得到 $q^1 q^2$,从 k 得到 $k^1 k^2$,从 v 得到 $v^1 v^2$,那其实就是把 q 把 k 把 v,分别乘上两个矩阵,得到这个不同的 head。

然后分别计算$b^{i,1}$、$b^{i,2}$，步骤是一样的。

<img src="https://tva1.sinaimg.cn/large/008i3skNly1gvpe0hi8htj60zc0nmgnd02.jpg" alt="image-20211023174655496" style="zoom: 50%;" />

<img src="https://tva1.sinaimg.cn/large/008i3skNly1gvpe25uqi9j60v60m0gnb02.jpg" alt="image-20211023174831916" style="zoom:50%;" />

最后把 $b^{i,1}$ 跟 $b^{i,2}$,把它接起来,然后再通过一个 transform，也就是再乘上一个矩阵,然后得到 bi,然后再送到下一层去,那这个就是 Multi-head attention。

<img src="https://tva1.sinaimg.cn/large/008i3skNly1gvpe3179s1j60jy094dfz02.jpg" alt="image-20211023174922229" style="zoom:33%;" />

## Positional Encoding

对self-attention来说，位置 1 跟位置 2 跟位置 3 跟位置 4,完全没有任何差别,这四个位置的操作其实是一模一样,对它来说 q1 到跟 q4 的距离,并没有特别远,1 跟 4 的距离并没有特别远,2 跟 3 的距离也没有特别近。self-attention没有记录位置的资讯。而有时候位置的资源很重要。

positional encoding技术就是将位置的资讯加上。

<img src="https://tva1.sinaimg.cn/large/008i3skNly1gvph604146j60ds0b2mx902.jpg" alt="image-20211023193601229" style="zoom: 50%;" />

关于这个vector是如何产生的，仍是个尚待研究的问题，有以下思路：

- 通过一个sin function产生，当做网络的参数的一部分，也是学习出来的。（最早的positionnal encoding）
- 用RNN产生出来。

## 应用

- 语音。Truncated Self-attention，只看一小个范围。
- 图像。直接把图片当成一个vector set。

## Self-attention vs CNN

用 Self-attention 来处理一张图片,代表说,假设这个是你要考虑的 pixel,那它產生 query,其他 pixel 產生 key。做 inner product 的时候,你考虑的不是一个小的receptive field的信息,而是整张影像的资讯。

做 CNN 的时候,,会画出一个 receptive field,每一个 filter,每一个 neural,只考虑 receptive field 范围裡面的资讯。

- 所以如果我们比较 CNN 跟 Self-attention 的话,**CNN 可以看作是一种简化版的 Self-attention**，因為在做CNN的时候,我们只考虑 receptive field 裡面的资讯,而在做 Self-attention 的时候,我们是考虑整张图片的资讯,所以 CNN,是简化版的 Self-attention

- 或者是你可以反过来说,**Self-attention 是一个复杂化的 CNN**

在 CNN 裡面,我们要划定 receptive field,每一个 neural,只考虑 receptive field 裡面的资讯,而 **receptive field 的范围跟大小,是人决定的。**

而对 Self-attention 而言,我们用 attention,去找出相关的 pixel,就好像是 **receptive field 是自动被学出的**,network 自己决定说,receptive field 的形状长什麼样子,network 自己决定说,以这个 pixel 為中心,哪些 pixel 是我们真正需要考虑的,那些 pixel 是相关的。所以 receptive field 的范围,不再是人工划定,而是让机器自己学出来。

## Self-attention vs RNN

RNN的角色,很大一部分都可以用 Self-attention 来取代。很多的应用都往往把 RNN 的架构,逐渐改成 Self-attention 的架构

RNN跟 Self-attention 做的事情其实也非常像,它们的 **input 都是一个 vector sequence**。

Self-attention的每一个 vector,它都考虑了整个 input 的 sequence,而 RNN 每一个 vector,只考虑了左边已经输入的 vector,它没有考虑右边的 vector。

但是 **RNN 其实也可以是双向的**,所以如果你 RNN 用双向的 RNN 的话,其实这边的每一个 hidden 的 output,每一个 memory 的 output,其实也可以看作是考虑了整个 input 的 sequence。

<img src="https://tva1.sinaimg.cn/large/008i3skNly1gvphv4vlibj610i0nmwhf02.jpg" alt="image-20211023200009652" style="zoom:50%;" />

## self-attention与一般的attention有哪些不同呢？

从seq2seq所常用的attention来说：

从组织形式上考虑的话，attention可以分为两种：vanilla attention以及self attention。attention的概念最开始是由google进行形式化的提出，以Q、K、V作为重要组件，通过对三种分量的加权求和得到attention向量。
而vanilla attention和self attention的区别在于：query来自于解码层，key和value来自于编码层时叫**vanilla attention**，即最基本的attention。query，key和value都来自编码层的叫**self attention**。（[nlp中的Attention注意力机制+Transformer详解-人工智能](http://link.zhihu.com/?target=http%3A//www.uml.org.cn/ai/202009301.asp)）



广义上说的transformer就是指self-attention。self-attention变形一般都叫xxxformer了。

Self-attention 它最大的问题就是,**它的运算量非常地大**,所以怎么减少 Self-attention 的运算量,是一个未来的重点。

各种xxformer往往速度比Transformer快，但performance会变差。

