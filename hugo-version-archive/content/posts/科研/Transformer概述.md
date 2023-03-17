---
title: "Transformer概述"
date: 2021-10-10T10:20:04+08:00
categories: ["科研"]
tags: ["Transfomer"]
---

# Seq2seq

编码器—解码器（encoder-decoder）或者seq2seq模型，这两个模型本质上都用到了两个循环神经网络，分别叫做编码器和解码器。编码器用来分析输入序列，解码器用来生成输出序列。

编码器的作用是把一个不定长的输入序列变换成一个定长的背景变量**c**，并在该背景变量中编码输入序列信息。常用的编码器是循环神经网络。

编码器-解码器（seq2seq）可以输入并输出不定长的序列。

编码器—解码器可使用两个循环神经网络，但后来使用注意力机制效果更好。



seq2seq model的应用:

- 语音识别
- 机器翻译
- 语音翻译
- 语音合成 Text-to-Speech（TTS）Synthesis
- 聊天机器人 chatbot
- QA。许多NLP的问题，往往可以看成是QA的问题，如sentiment analysis，而QA的问题，可以用seq2seq model来解。
- 句法解析 Syntactic Parsing 
- multi-label classification
- Seq2seq for Object Detection



<img src="https://tva1.sinaimg.cn/large/008i3skNly1gvg8mmu149j60p20e40td02.jpg" alt="image-20211015195029311" style="zoom: 50%;" />

# Transformer

transformer就是一个seq2seq model。现在讲到seq2seq's model的时候,第一个想到的，可能都是transformer。

<img src="https://tva1.sinaimg.cn/large/008i3skNly1gvg8pgsqtoj60kc0om3zx02.jpg" alt="image-20211015195314997" style="zoom:67%;" />

## Encoder

seq2seq model Encoder 要做的事情,就是**给一排向量，输出另外一排向量**

![image-20211015202542420](https://tva1.sinaimg.cn/large/008i3skNgy1gvg9n9469fj60yy0kojta02.jpg)

给一排向量、输出一排向量这件事情,很多模型都可以做到,可能第一个想到的是,我们刚刚讲完的self-attention,其实不只self-attention,RNN CNN 其实也都能够做到,input一排向量,output另外一个同样长度的向量

在transformer裡面,transformer的Encoder,用的就是self-attention。

现在的Encoder裡面,会分成很多很多的block。

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvg9o2r7aej60ka0mcabb02.jpg" alt="image-20211015202630447" style="zoom:50%;" />

每一个block都是输入一排向量,输出一排向量,你输入一排向量 第一个block,第一个block输出另外一排向量,再输给另外一个block,到最后一个block,会输出最终的vector sequence,每一个block 其实,并不是neural network的一层

每一个block裡面做的事情,是好几个layer在做的事情,在transformer的Encoder裡面,每一个block做的事情,大概是这样子的

![image-20210429210257652](https://gitee.com/unclestrong/deep-learning21_note/raw/master/imgbed/image-20210429210257652.png)

- 先做一个self-attention,input一排vector以后,做self-attention,考虑整个sequence的资讯，Output另外一排vector.
- 接下来这一排vector,会再丢到fully connected的feed forward network裡面,再output另外一排vector,这一排vector就是block的输出



### residual connection

在之前self-attention的时候,我们输入一排vector,就输出一排vector,这边的每一个vector,它是考虑了所有的input以后,所得到的结果。

在transformer裡面,它加入了一个设计,不只是输出这个vector,我们还要把这个vector加上它的input,得到output。这样的架构叫residual connection

<img src="https://gitee.com/unclestrong/deep-learning21_note/raw/master/imgbed/image-20210429210831750.png" alt="image-20210429210831750" style="zoom:67%;" />

### layer normalization

得到residual的结果以后,再做normalization,这边用的不是batch normalization,这边用的叫做layer normalization。

<img src="https://gitee.com/unclestrong/deep-learning21_note/raw/master/imgbed/image-20210429211313025.png" alt="image-20210429211313025" style="zoom:67%;" />

layer normalization做的事情,比bacth normalization更简单一点

输入一个向量 输出另外一个向量,不需要考虑batch,它会**把输入的这个向量,计算它的mean跟standard deviation**

但是要注意一下,**batch normalization是对不同example,不同feature的同一个dimension,去计算mean跟standard deviation**

但**layer normalization,它是对同一个feature,同一个example裡面,不同的dimension,去计算mean跟standard deviation**

计算出mean,跟standard deviation以后,就可以做一个normalize,我们把input 这个vector裡面每一个,dimension减掉mean,再除以standard deviation以后得到x',就是layer normalization的输出

$$
x'_i=\frac{x_i-m}{\sigma}
$$





得到layer normalization的输出以后,它的这个输出 才是FC network的输入

<img src="https://gitee.com/unclestrong/deep-learning21_note/raw/master/imgbed/image-20210429211858981.png" alt="image-20210429211858981" style="zoom: 67%;" />

而**FC network这边,也有residual的架构**,所以 我们会把FC network的input,跟它的output加起来 做一下residual,得到新的输出

这个FC network做完residual以后,还不是结束 你要把residual的结果,**再做一次layer normalization**,得到的输出,才是residual network裡面,一个block的输出。



![image-20211016185834610](https://tva1.sinaimg.cn/large/008i3skNly1gvhcqx0ssdj60zq0p6dip02.jpg)

步骤：

- 首先 做self-attention,其实在input的地方,还有加上positional encoding,加上positional的information。
- Multi-Head Attention,这个就是self-attention的block。
- Add&norm,就是residual加layer normalization,我们刚才有说self-attention,有加上residual的connection,加下来还要过layer normalization,图上的Add&norm,就是residual加layer norm的意思
- 接下来,要过feed forward network
- fc的feed forward network以后再做一次Add&norm,再做一次residual加layer norm,才是一个block的输出,
- 然后这个block会重复n次。

## Decoder

Decoder其实有两种：

- Autoregressive（AT）
- Non-autoregressive (NAT) 

### Autoregressive

AT的Decoder会将上一个时间点自己的输出当做接下来的输入。

<img src="https://tva1.sinaimg.cn/large/008i3skNly1gvhcszyppfj60ww0ki40o02.jpg" alt="image-20211016190036658" style="zoom:50%;" />

对比encoder和decoder，decoder中使用的self-attention，是masked self-attention。他的不同之处在于，masked的只考虑它左边的东西，不考虑它右边的东西。这才符合decoder的运作。

<img src="https://tva1.sinaimg.cn/large/008i3skNly1gvhcxiz1cmj60t60o4abk02.jpg" alt="image-20211016190457844" style="zoom:50%;" />

![image-20211016191134383](https://tva1.sinaimg.cn/large/008i3skNly1gvhd4erizdj61ns0j2grj02.jpg)

为了让Decoder决定输出的sequence的长度，还需要准备一个特殊的符号，用来表示终止。当他产生出来的向量是这个符号时，这个decoder产生sequence的过程就结束了。

### Non-Autoregressive

NAT和AT的不同点在于，NAT的Decoder吃一整排BEGIN的Token，然后产生一排的Token就结束了。

至于输出的长度为多少，没有办法很直接的知道,以下有几个做法：

- 另外learn一个 Classifier,这个 Classifier ,它吃 Encoder 的 Input,然后输出是一个数字,这个数字代表 Decoder 应该要输出的长度。
- 另一种可能做法就是,**给它一堆 BEGIN 的 Token**,假设输出的句子的长度,绝对不会超过 300 个字,给它 300 个 BEGIN,然后就会输出 300 个字，再看**什麼地方输出 END**,输出 END 右边的,就当做它没有输出。

<img src="https://tva1.sinaimg.cn/large/008i3skNly1gvhd8a85fxj613a0e2abx02.jpg" alt="image-20211016191517946" style="zoom:50%;" />

### NAT VS AT

NAT的好处：

- 并行化。使用AT，是一个个产生的，假设要输出100个字的句子，就要做100次的decode。
- 能控制输出的长度。

NAT的劣势：

- 性能往往不如AT

## Encoder-Decoder

encoder和decoder之间是如何传递的？

Cross-Attention：

1. decoder 对输入做masked self-attention，产生一个q。
2. 将q与encoder这边产生的k1、k2、k3计算attention的分数
3. 再把得到的结果的weighted sum相加得到v
4. v当做接下来decoder的fully connected network的input

<img src="https://tva1.sinaimg.cn/large/008i3skNly1gvhdogq3tlj60wq0msdhz02.jpg" alt="image-20211016193051005" style="zoom:50%;" />

# 参考

1. Vaswani, Ashish, et al. "Attention is all you need." Advances in neural information processing systems 30 (2017).

2. HUNG-YI LEE (李宏毅) "MACHINE LEARNING 2021 SPRING"
