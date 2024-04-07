
[逆向过程在这里](https://blog.zhx47.top/posts/25.html)

代码中获取邮箱验证码是使用了 [mail.tm](https://mail.tm/en/)

程序入口在 `main.js`。需要更改 `pikpak.js` 中的 `getVerificationCode()`，更改为自己的服务地址或者重写与自己垃圾邮件配套的程序。

哦，对了，代码中没有对限流做处理，大批量的注册刷取邀请还需要自己处理。

还有还有，`main.js` 中的邮箱主域名需要改成大家自己的。

使用就是 npm i 下载依赖
node main.js 运行脚本