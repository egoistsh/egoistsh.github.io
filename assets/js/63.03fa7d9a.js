(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{387:function(t,s,n){"use strict";n.r(s);var a=n(7),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"csrf攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf攻击"}},[t._v("#")]),t._v(" CSRF攻击")]),t._v(" "),s("p",[t._v("Cross-Site Request Forgery CSRF：跨站请求伪造（就是用户在第三方网站上向A发送请求，然后携带上了cookie）")]),t._v(" "),s("p",[t._v("CSRF 攻击通常是通过在攻击者控制的网站中嵌入恶意代码，来利用用户在其他受信任网站上的身份认证，从而在用户不知情的情况下完成攻击。攻击者通过这种方式伪造用户的请求，从而达到盗取用户敏感信息、修改用户数据、执行非法操作等目的。")]),t._v(" "),s("p",[t._v("CSRF 攻击的原理是利用浏览器的自动提交机制，当用户在已登录的受信任网站中进行某些操作时，攻击者通过恶意代码提交一些伪造的请求，从而冒充用户在其他网站上执行一些非法操作。由于这些请求的来源是用户受信任的网站，因此服务器往往会认为这些请求是合法的，从而执行这些请求所要求的操作。")]),t._v(" "),s("p",[t._v("为了防止 CSRF 攻击，可以采取以下措施：")]),t._v(" "),s("ol",[s("li",[t._v("在表单中添加 CSRF Token，以防止恶意请求被执行。")]),t._v(" "),s("li",[t._v("检测 Referer 头，以防止非法请求被执行。")]),t._v(" "),s("li",[t._v("对于敏感操作，采用双因素认证等安全措施，加强身份验证。")]),t._v(" "),s("li",[t._v("及时更新软件和组件，以避免已知的安全漏洞被攻击者利用。")])]),t._v(" "),s("p",[t._v("总之，CSRF 攻击是一种常见的网络安全漏洞，需要采取相应的安全措施来防范。")]),t._v(" "),s("h3",{attrs:{id:"简单的-csrf-攻击代码示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简单的-csrf-攻击代码示例"}},[t._v("#")]),t._v(" 简单的 CSRF 攻击代码示例：")]),t._v(" "),s("ol",[s("li",[t._v("攻击者准备一个钓鱼网站，伪装成银行网站。")]),t._v(" "),s("li",[t._v("受害者登录银行网站并保持登录状态。")]),t._v(" "),s("li",[t._v("受害者访问攻击者的钓鱼网站，触发钓鱼网站的转账表单提交请求。")]),t._v(" "),s("li",[t._v("攻击者钓鱼网站上的表单会被自动提交到银行网站的转账接口，因为浏览器会自动带上受害者在银行网站上的登录凭证（比如 Cookie），所以银行网站会认为是受害者在进行转账操作。")]),t._v(" "),s("li",[t._v("受害者的账户被攻击者转走了 100 元。")])]),t._v(" "),s("h3",{attrs:{id:"采用csrf-token的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#采用csrf-token的方法"}},[t._v("#")]),t._v(" 采用CSRF-token的方法")]),t._v(" "),s("p",[t._v("CSRF token（跨站请求伪造令牌）是一种防止 CSRF 攻击的常用方法。")]),t._v(" "),s("p",[t._v("其实现原理是在页面中生成一个随机的 token，然后将其"),s("strong",[t._v("加入到表单中的隐藏字段中")]),t._v("，并将其同时保存到服务器端。在表单提交时，除了将表单数据提交到服务器外，还需要将 token 一同提交到服务器端。服务器接收到表单请求时，首先会校验 token 的值是否正确，只有 token 的值正确，才会继续处理表单请求。")]),t._v(" "),s("p",[t._v("这样做的原理是，攻击者虽然可以伪造请求，但是攻击者无法伪造合法的 token，因为 token 是随机生成的，并且只有服务器端知道正确的 token 值。因此，攻击者无法在伪造的请求中携带正确的 token 值，从而实现了防止 CSRF 攻击的目的。")]),t._v(" "),s("p",[t._v("在服务端，可以将生成的 CSRF token 保存到会话（session）或者cookie中，并在表单提交时验证 token 的值是否和会话或者cookie中的值相同。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" express "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'express'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cookieParser "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cookie-parser'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" csrf "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'csurf'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("express")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" csrfProtection "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("csrf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("cookie")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用 cookie-parser 中间件来解析 cookie")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cookieParser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加 CSRF token 的中间件")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("csrfProtection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生成 CSRF token 并将其保存到 cookie 中")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" token "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("csrfToken")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cookie")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'XSRF-TOKEN'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\n    <html>\n      <head>\n        <title>CSRF Demo</title>\n      </head>\n      <body>\n        <form method="POST" action="/transfer">\n          <input type="hidden" name="_csrf" value="')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('">\n          <input type="text" name="to" placeholder="To">\n          <input type="number" name="amount" placeholder="Amount">\n          <button type="submit">Transfer</button>\n        </form>\n      </body>\n    </html>\n  ')]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理转账请求")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/transfer'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 验证 CSRF token 的值是否正确")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" token "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookies"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'XSRF-TOKEN'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_csrf "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_csrf "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("status")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("403")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Invalid CSRF token'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行转账操作")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Server started on port 3000'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"xss攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xss攻击"}},[t._v("#")]),t._v(" XSS攻击")]),t._v(" "),s("p",[t._v("Cross-site scripting， XSS 跨站脚本攻击。")]),t._v(" "),s("p",[t._v("XSS简单来说就是在Web页面中插入恶意的Script代码")]),t._v(" "),s("p",[t._v("script标签可以插入代码，img中的onerror也可以")]),t._v(" "),s("p",[t._v("eval（）会将编码之后的语句解码并执行")]),t._v(" "),s("p",[t._v("防御手段：对script、img、a标签进行过滤")]),t._v(" "),s("p",[t._v("较长的输入进行截断")]),t._v(" "),s("h2",{attrs:{id:"csrf和xss的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf和xss的区别"}},[t._v("#")]),t._v(" CSRF和XSS的区别")]),t._v(" "),s("p",[t._v("CSRF攻击是一种利用用户在已经登录的情况下，在用户不知情的情况下伪造用户请求，从而实现攻击的一种方式。攻击者通过各种方式欺骗用户点击恶意链接或访问恶意网站，在用户登录的情况下，攻击者伪造一个恶意请求，这个请求看起来像是合法的请求，实际上却是攻击者精心构造的，一旦用户点击这个请求，攻击者就可以对用户的账户进行恶意操作。")]),t._v(" "),s("p",[t._v("XSS攻击则是指攻击者在Web应用程序中注入恶意脚本或HTML代码，使之在用户浏览网页时被执行，从而达到攻击的目的。攻击者通过各种手段将恶意脚本或HTML代码注入到Web页面中，当用户访问这个页面时，恶意脚本或HTML代码会被执行，从而实现攻击。XSS攻击可以分为存储型XSS和反射型XSS两种，分别是攻击者将恶意脚本存储在Web应用程序中，或者将恶意脚本作为参数发送给Web应用程序，再通过Web应用程序返回给用户。")]),t._v(" "),s("p",[t._v("综上所述，CSRF和XSS虽然都是Web安全问题，但它们的攻击方式和实现方式不同。CSRF攻击利用用户在已经登录的情况下对用户进行伪造请求，而XSS攻击则是通过注入恶意代码来对用户的浏览器进行攻击。")]),t._v(" "),s("h2",{attrs:{id:"ddos攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ddos攻击"}},[t._v("#")]),t._v(" DDoS攻击")]),t._v(" "),s("p",[t._v("拒绝服务（DoS）攻击是一种网络攻击，恶意行为者通过中断设备的正常功能，使其目标用户无法使用计算机或其他设备。DoS 攻击通常通过请求压垮或淹没目标计算机，直到其无法处理正常流量，从而对其他用户造成拒绝服务。DoS 攻击的特征是使用一台计算机来发起攻击。")]),t._v(" "),s("p",[t._v("DoS 攻击通常分为两类：")]),t._v(" "),s("ul",[s("li",[t._v("缓冲区溢出攻击：在这一种攻击类型中，内存缓冲区溢出可能导致计算机耗尽所有可用的硬盘空间、内存或 CPU 时间。这种利用形式通常会导致行为缓慢、系统崩溃或其他有害的服务器行为，从而造成拒绝服务。")]),t._v(" "),s("li",[t._v("洪水攻击：通过使目标服务器充满大量数据包，恶意行为者便能够使服务器容量过饱和，从而导致拒绝服务。大多数 DoS 洪水攻击若要得逞，恶意行为者必须具有比目标更多的可用带宽。")])]),t._v(" "),s("p",[t._v("DDoS 和 DoS 之间的显著区别是攻击中使用的连接数。DoS 攻击利用单个连接，而 DDoS 攻击则利用许多攻击流量来源，通常采用僵尸网络的形式。")])])}),[],!1,null,null,null);s.default=e.exports}}]);