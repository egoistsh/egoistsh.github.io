---
title: "浅谈IO多路复用"
date: 2022-03-29T21:00:51+08:00
categories: ["技术笔记"]
tags: ["IO"]

---

## 阻塞IO

服务端处理客户端的连接和请求主要阻塞在2个地方：

- accept()：阻塞建立连接
- read()：阻塞读数据
  - 网卡到内核缓冲区阻塞
  - 内核缓冲区到用户缓冲区阻塞

```java
// old
listenfd = socket();   // 打开一个网络通信端口
bind(listenfd);        // 绑定
listen(listenfd);      // 监听
while(1) {
  connfd = accept(listenfd);  // 阻塞建立连接
  int n = read(connfd, buf);  // 阻塞读数据
  doSomeThing(buf);  // 利用读到的数据做些什么
  close(connfd);     // 关闭连接，循环等待下一个连接
}
```

改进：采用多线程，为每个客户端创建一个线程。但此时的read()还是阻塞的。

```java
// 改进
while(1) {
  connfd = accept(listenfd);
  thread_create(dowork);
}
void dowork() {
  int n = read(connfd, buf);
  dosomething(buf);
  close(connfd);
}
```



## 非阻塞IO

要实现非阻塞IO需要操作系统提供一个非阻塞的read()：在没有数据到达时，立即返回-1（非阻塞）；当数据已到达内核缓冲区时，调用read()还是阻塞的。

改进：为每个客户端创建一个线程，服务器线程资源很快会被耗尽。可以每accept一个客户端连接后，将文件描述符放到一个数组中。然后通过一个线程不断遍历这个数组，调用每一个非阻塞的read方法。这样就成功只用一个线程处理了多个客户端连接。

```java
while(1) {
  for(fd <-- fdlist) {
    if(read(fd) != -1) {
      doSomeThing();
    }
  }
}
```

但每次遍历遇到 read 返回 -1 时仍然是一次浪费资源的系统调用。

## IO多路复用

让操作系统提供函数，将一批文件描述符通过系统调用传给内核，由内核去遍历。

通过一个进程监听多个文件描述符，一旦某个文件描述符准备就绪，就通知程序。

### select

select 是操作系统提供的系统调用函数，通过它，我们可以把一个文件描述符的数组发给操作系统， 让操作系统去遍历，确定哪个文件描述符可以读写， 然后告诉我们去处理。

```java
//一个线程不断接受客户端连接，并把 socket 文件描述符放到一个 list 里
while(1) {
  connfd = accept(listenfd);
  fcntl(connfd, F_SETFL, O_NONBLOCK);
  fdlist.add(connfd);
}

//一个线程不再自己遍历，而是调用 select，将这批文件描述符 list 交给操作系统去遍历。
while(1) {
  nready = select(list);
  // 用户层依然要遍历，只不过少了很多无效的系统调用
  for(fd <-- fdlist) {
    if(fd != -1) {
      // 只读已就绪的文件描述符
      read(fd, buf);
      // 总共只有 nready 个已就绪描述符，不用过多遍历
      if(--nready == 0) break;
    }
  }
}
```

细节（缺点）：

1. select 调用需要传入 fd 数组，需要拷贝一份到内核，高并发场景下这样的拷贝消耗的资源是惊人的。

2. select 在内核层仍然是通过遍历的方式检查文件描述符的就绪状态，是个同步过程，只不过无系统调用切换上下文的开销。

3. select 仅仅返回可读文件描述符的个数，具体哪个可读还是要用户自己遍历。

### poll

poll 基于链表存储，解决了select最大连接数（1024）的限制。

### epoll

解决select/poll的问题：

1. 内核中保存一份文件描述符集合，无需用户每次都重新传入，只需告诉内核修改的部分即可。

2. 内核不再通过轮询的方式找到就绪的文件描述符，而是通过异步 IO 事件唤醒。

3. 内核仅会将有 IO 事件的文件描述符返回给用户，用户也无需遍历整个文件描述符集合。

```java
//创建一个 epoll 句柄
int epoll_create(int size);
//向内核添加、修改或删除要监控的文件描述符。
int epoll_ctl(int epfd, int op, int fd, struct epoll_event *event);
//类似发起了 select() 调用
int epoll_wait(int epfd, struct epoll_event *events, int max events, int timeout);
```

## 参考文章

1. [你管这破玩意叫 IO 多路复用？](https://mp.weixin.qq.com/s/YdIdoZ_yusVWza1PU7lWaw?utm_source=wechat_session&utm_medium=social&utm_oi=663552570581323776)
2. [彻底理解 IO 多路复用实现机制](https://juejin.cn/post/6882984260672847879#heading-11)