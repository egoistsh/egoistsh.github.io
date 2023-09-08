(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{398:function(v,_,t){"use strict";t.r(_);var s=t(7),r=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"为什么要有虚拟内存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么要有虚拟内存"}},[v._v("#")]),v._v(" 为什么要有虚拟内存")]),v._v(" "),_("p",[v._v("为了在多进程环境下，使得进程之间的内存地址不受影响，相互隔离，于是操作系统就为每个进程独立分配一套"),_("strong",[v._v("虚拟地址空间")]),v._v("，每个程序只关心自己的虚拟地址就可以，实际上大家的虚拟地址都是一样的，但分布到物理地址内存是不一样的。作为程序，也不用关心物理地址的事情。")]),v._v(" "),_("p",[v._v("每个进程都有自己的虚拟空间，而物理内存只有一个，所以当启用了大量的进程，物理内存必然会很紧张，于是操作系统会通过"),_("strong",[v._v("内存交换")]),v._v("技术，把不常使用的内存暂时存放到硬盘（换出），在需要的时候再装载回物理内存（换入）。")]),v._v(" "),_("p",[v._v("虚拟内存的作用：")]),v._v(" "),_("ul",[_("li",[v._v("第一，虚拟内存可以使得进程对运行内存超过物理内存大小，因为程序运行符合局部性原理，CPU 访问内存会有很明显的重复访问的倾向性，对于那些没有被经常使用到的内存，我们可以把它换出到物理内存之外，比如硬盘上的 swap 区域。")]),v._v(" "),_("li",[v._v("第二，由于每个进程都有自己的页表，所以每个进程的虚拟内存空间就是相互独立的。进程也没有办法访问其他进程的页表，所以这些页表是私有的，这就解决了多进程之间地址冲突的问题。")]),v._v(" "),_("li",[v._v("第三，页表里的页表项中除了物理地址之外，还有一些标记属性的比特，比如控制一个页的读写权限，标记该页是否存在等。在内存访问方面，操作系统提供了更好的安全性。")])]),v._v(" "),_("h2",{attrs:{id:"内存分页和分段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内存分页和分段"}},[v._v("#")]),v._v(" 内存分页和分段")]),v._v(" "),_("p",[v._v("那既然有了虚拟地址空间，那必然要把虚拟地址「映射」到物理地址，这个事情通常由操作系统来维护。")]),v._v(" "),_("p",[v._v("那么对于虚拟地址与物理地址的映射关系，可以有"),_("strong",[v._v("分段")]),v._v("和"),_("strong",[v._v("分页")]),v._v("的方式，同时两者结合都是可以的。")]),v._v(" "),_("p",[v._v("内存分段是根据程序的逻辑角度，分成了栈段、堆段、数据段、代码段等，这样可以分离出不同属性的段，同时是一块连续的空间。分段的好处就是能产生连续的内存空间。但是每个段的大小都不是统一的，这就会导致外部内存碎片和内存交换效率低的问题。")]),v._v(" "),_("blockquote",[_("p",[v._v("分段为什么会导致内存交换效率低的问题？")]),v._v(" "),_("p",[v._v("对于多进程的系统来说，用分段的方式，外部内存碎片是很容易产生的，产生了外部内存碎片，那不得不重新 "),_("code",[v._v("Swap")]),v._v(" 内存区域，这个过程会产生性能瓶颈。")]),v._v(" "),_("p",[v._v("因为硬盘的访问速度要比内存慢太多了，每一次内存交换，我们都需要把一大段连续的内存数据写到硬盘上。")])]),v._v(" "),_("p",[v._v("于是，就出现了内存分页，把虚拟空间和物理空间分成大小固定的页，如在 Linux 系统中，每一页的大小为 "),_("code",[v._v("4KB")]),v._v("。由于分了页后，就不会产生细小的内存碎片，解决了内存分段的外部内存碎片问题。同时在内存交换的时候，写入硬盘也就一个页或几个页，这就大大提高了内存交换的效率。")]),v._v(" "),_("p",[v._v("分页的方式使得我们在加载程序的时候，不再需要一次性都把程序加载到物理内存中。我们完全可以在进行虚拟内存和物理内存的页之间的映射之后，并不真的把页加载到物理内存里，而是只有在程序运行中，需要用到对应虚拟内存页里面的指令和数据时，再加载到物理内存里面去。")]),v._v(" "),_("p",[v._v("再来，为了解决简单分页产生的页表过大的问题，就有了"),_("strong",[v._v("多级页表")]),v._v("，它解决了空间上的问题，但这就会导致 CPU 在寻址的过程中，需要有很多层表参与，加大了时间上的开销。于是根据程序的"),_("strong",[v._v("局部性原理")]),v._v("，在 CPU 芯片中加入了 "),_("strong",[v._v("TLB")]),v._v("，负责缓存最近常被访问的页表项，大大提高了地址的转换速度。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://p.ipic.vip/kfcm0v.png",alt:"img"}})]),v._v(" "),_("p",[_("img",{attrs:{src:"https://p.ipic.vip/ffgzf6.png",alt:"img"}})]),v._v(" "),_("p",[_("img",{attrs:{src:"https://p.ipic.vip/zucas1.png",alt:"img"}})]),v._v(" "),_("h2",{attrs:{id:"linux-的内存管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#linux-的内存管理"}},[v._v("#")]),v._v(" linux 的内存管理")]),v._v(" "),_("p",[_("strong",[v._v("Linux 系统主要采用了分页管理，但是由于 Intel 处理器的发展史，Linux 系统无法避免分段管理")]),v._v("。于是 Linux 就把所有段的基地址设为 "),_("code",[v._v("0")]),v._v("，也就意味着所有程序的地址空间都是线性地址空间（虚拟地址），相当于屏蔽了 CPU 逻辑地址的概念，所以段只被用于访问控制和内存保护。")]),v._v(" "),_("p",[v._v("另外，Linux 系统中虚拟空间分布可分为"),_("strong",[v._v("用户态")]),v._v("和"),_("strong",[v._v("内核态")]),v._v("两部分，其中用户态的分布：代码段、全局变量、BSS、函数栈、堆内存、映射区。")]),v._v(" "),_("h2",{attrs:{id:"段页式内存管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#段页式内存管理"}},[v._v("#")]),v._v(" 段页式内存管理")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://p.ipic.vip/w511b7.png",alt:"img"}})]),v._v(" "),_("h2",{attrs:{id:"内存分配的过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内存分配的过程"}},[v._v("#")]),v._v(" 内存分配的过程")]),v._v(" "),_("p",[v._v("应用程序通过 malloc 函数申请内存的时候，实际上申请的是虚拟内存，此时并不会分配物理内存。")]),v._v(" "),_("p",[v._v("当应用程序读写了这块虚拟内存，CPU 就会去访问这个虚拟内存， 这时会发现这个虚拟内存没有映射到物理内存， CPU 就会产生"),_("strong",[v._v("缺页中断")]),v._v("，进程会从用户态切换到内核态，并将缺页中断交给内核的 Page Fault Handler （缺页中断函数）处理。")]),v._v(" "),_("p",[v._v("缺页中断处理函数会看是否有空闲的物理内存，如果有，就直接分配物理内存，并建立虚拟内存与物理内存之间的映射关系。")]),v._v(" "),_("p",[v._v("如果没有空闲的物理内存，那么内核就会开始进行"),_("strong",[v._v("回收内存")]),v._v("的工作，回收的方式主要是两种：直接内存回收和后台内存回收。")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("后台内存回收")]),v._v("（kswapd）：在物理内存紧张的时候，会唤醒 kswapd 内核线程来回收内存，这个回收内存的过程"),_("strong",[v._v("异步")]),v._v("的，不会阻塞进程的执行。")]),v._v(" "),_("li",[_("strong",[v._v("直接内存回收")]),v._v("（direct reclaim）：如果后台异步回收跟不上进程内存申请的速度，就会开始直接回收，这个回收内存的过程是"),_("strong",[v._v("同步")]),v._v("的，会阻塞进程的执行。")])]),v._v(" "),_("p",[v._v("如果直接内存回收后，空闲的物理内存仍然无法满足此次物理内存的申请，那么内核就会放最后的大招了 ——"),_("strong",[v._v("触发 OOM （Out of Memory）机制")]),v._v("。")]),v._v(" "),_("p",[v._v("OOM Killer 机制会根据算法选择一个占用物理内存较高的进程，然后将其杀死，以便释放内存资源，如果物理内存依然不足，OOM Killer 会继续杀死占用物理内存较高的进程，直到释放足够的内存位置。")]),v._v(" "),_("p",[v._v("OOM killer 会根据每个进程的内存占用情况和 oom_score_adj 的值进行打分，得分最高的进程就会被首先杀掉。")]),v._v(" "),_("p",[v._v("我们可以通过调整进程的 /proc/[pid]/oom_score_adj 值，来降低被 OOM killer 杀掉的概率。")]),v._v(" "),_("h2",{attrs:{id:"在-4gb-物理内存的机器上-申请-8g-内存会怎么样"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#在-4gb-物理内存的机器上-申请-8g-内存会怎么样"}},[v._v("#")]),v._v(" 在 4GB 物理内存的机器上，申请 8G 内存会怎么样？")]),v._v(" "),_("p",[v._v("swap 机制，也就是内存交换技术。当系统的物理内存不够用的时候，就需要将物理内存中的一部分空间释放出来，以供当前运行的程序使用。那些被释放的空间可能来自一些很长时间没有什么操作的程序，这些被释放的空间会被临时保存到磁盘，等到那些程序要运行时，再从磁盘中恢复保存的数据到内存中。")]),v._v(" "),_("p",[v._v("另外，当内存使用存在压力的时候，会开始触发内存回收行为，会把这些不常访问的内存先写到磁盘中，然后释放这些内存，给其他更需要的进程使用。再次访问这些内存时，重新从磁盘读入内存就可以了。")]),v._v(" "),_("p",[v._v("这种，将内存数据换出磁盘，又从磁盘中恢复数据到内存的过程，就是 Swap 机制负责的。")]),v._v(" "),_("p",[v._v("Swap 就是把一块磁盘空间或者本地文件，当成内存来使用，它包含换出和换入两个过程：")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("换出（Swap Out）")]),v._v(" ，是把进程暂时不用的内存数据存储到磁盘中，并释放这些数据占用的内存；")]),v._v(" "),_("li",[_("strong",[v._v("换入（Swap In）")]),v._v("，是在进程再次访问这些内存的时候，把它们从磁盘读到内存中来；")])]),v._v(" "),_("p",[v._v("在 32 位操作系统，因为进程理论上最大能申请 3 GB 大小的虚拟内存，所以直接申请 8G 内存，会申请失败。")]),v._v(" "),_("p",[v._v("在 64位 位操作系统，因为进程理论上最大能申请 128 TB 大小的虚拟内存，即使物理内存只有 4GB，申请 8G 内存也是没问题，因为申请的内存是虚拟内存。如果这块虚拟内存被访问了，要看系统有没有 Swap 分区：")]),v._v(" "),_("ul",[_("li",[v._v("如果没有 Swap 分区，因为物理空间不够，进程会被操作系统杀掉，原因是 OOM（内存溢出）；")]),v._v(" "),_("li",[v._v("如果有 Swap 分区，即使物理内存只有 4GB，程序也能正常使用 8GB 的内存，进程可以正常运行；")])])])}),[],!1,null,null,null);_.default=r.exports}}]);