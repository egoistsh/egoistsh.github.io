(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{333:function(a,t,i){"use strict";i.r(t);var r=i(7),s=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"arraylist-和-linkedlist的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arraylist-和-linkedlist的区别"}},[a._v("#")]),a._v(" ArrayList 和 LinkedList的区别")]),a._v(" "),t("p",[a._v("ArrayList：底层是基于数组实现的，查找快，增删较慢；")]),a._v(" "),t("p",[a._v("LinkedList：底层是基于链表实现的。确切的说是循环双向链表（JDK1.6 之前是双向循环链表、JDK1.7 之后取消了循环），查找慢、增删快。")]),a._v(" "),t("p",[a._v("ArrayList 的增删未必就是比 LinkedList 要慢：")]),a._v(" "),t("ol",[t("li",[a._v("如果增删都是在末尾来操作【每次调用的都是 remove() 和 add()】，此时 ArrayList 就不需要移动和复制数组来进行操作了。如果数据量有百万级的时，速度是会比 LinkedList 要快的。")]),a._v(" "),t("li",[a._v("如果删除操作的位置是在中间。由于 LinkedList 的消耗主要是在遍历上，ArrayList 的消耗主要是在移动和复制上（底层调用的是 arraycopy() 方法，是 native 方法）。LinkedList 的遍历速度是要慢于 ArrayList 的复制移动速度的如果数据量有百万级的时，还是 ArrayList 要快。")])]),a._v(" "),t("h2",{attrs:{id:"arraylist的扩容机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arraylist的扩容机制"}},[a._v("#")]),a._v(" ArrayList的扩容机制")]),a._v(" "),t("ol",[t("li",[a._v("当使用 add 方法的时候首先调用 ensureCapacityInternal 方法，传入 size+1 进去，检查是否需要扩充 elementData 数组的大小；")]),a._v(" "),t("li",[a._v("newCapacity = 扩充数组为原来的 1.5 倍(不能自定义)，如果还不够，就使用它指定要扩充的大小 minCapacity ，然后判断 minCapacity 是否大于 MAX_ARRAY_SIZE(Integer.MAX_VALUE – 8) ，如果大于，就取 Integer.MAX_VALUE；")]),a._v(" "),t("li",[a._v("扩容的主要方法：grow；")]),a._v(" "),t("li",[a._v("ArrayList 中 copy 数组的核心就是 System.arraycopy 方法，将 original 数组的所有数据复制到 copy 数组中，这是一个本地方法。")])]),a._v(" "),t("h2",{attrs:{id:"arraylist的构造方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arraylist的构造方法"}},[a._v("#")]),a._v(" ArrayList的构造方法")]),a._v(" "),t("ul",[t("li",[a._v("无参构造（延迟初始化）\n"),t("ul",[t("li",[a._v("构造方法中将elementData初始化为空数组DEFAULTCAPACITY_EMPTY_ELEMENTDATA")]),a._v(" "),t("li",[a._v("当调用add方法添加第一个元素的时候，会进行扩容")]),a._v(" "),t("li",[a._v("扩容至大小为DEFAULT_CAPACITY=10")])])]),a._v(" "),t("li",[a._v("有参构造 "),t("code",[a._v("public ArrayList(int initialCapacity)")]),a._v(" "),t("ul",[t("li",[a._v("参数大于0，elementData初始化为initialCapacity大小的数组")]),a._v(" "),t("li",[a._v("参数等于0，elementData初始化为空数组")]),a._v(" "),t("li",[a._v("参数小于0，抛出异常")])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);