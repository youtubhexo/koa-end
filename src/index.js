//const Koa = require('koa');
import Koa from 'koa'
const Router = require('@koa/router');
const { koaBody } = require('koa-body');
const json = require('koa-json');
const combineRouter = require('./routers/router')
const serve = require('koa-static');
const path = require('path');
import compose from 'koa-compose'
// koa-helmet 实际上是一系列安全相关中间件的集合，每个中间件都负责设置一个特定的 HTTP 头部。例如，它可以设置如下的HTTP头部：
// 
// Content-Security-Policy (CSP)：限制资源（例如脚本、图片等）的来源，帮助防止跨站点脚本攻击 (XSS)。
// X-DNS-Prefetch-Control：控制浏览器的 DNS 预取功能，可以阻止用户隐私泄露。
// Expect-CT：允许站点选择性地强制执行证书透明度要求。
// X-Frame-Options：防止点击劫持攻击，指定你的页面不能被嵌入到 iframe 或 frame 中。
// Strict-Transport-Security (HSTS)：强制客户端（如浏览器）通过 HTTPS 与服务器建立连接。
// X-Download-Options：防止在 IE8 及以上版本中，通过下载执行文件。
// X-Content-Type-Options：阻止浏览器从 MIME 类型中嗅探响应内容，这有助于防止基于 MIME 的攻击。
// Referrer-Policy：控制 HTTP Referer 头部的信息量。
// X-Permitted-Cross-Domain-Policies：指定加载到 Adobe Flash Player 或 Adobe Acrobat 中的数据的策略。
// X-XSS-Protection：启用某些浏览器的跨站脚本过滤器。
const helmet=require('koa-helmet')
const app = new Koa();
const router = new Router();

router.prefix('/api')
//1、request,method,respond
//2、api url  =>function,router
//3、ctx,async
router.get('/', (ctx, next) => {
  // ctx.router available
  ctx.body = {"msg":"hello world"};
});

router.get("/async", async (ctx) => {
   ctx.body=await  new Promise((resolve) => {
     setTimeout(() => {
       resolve("async")
     }, 5000)
   })
})

router.post('/api/data', (ctx) => {
  // 请求体会被解析并添加到ctx.request.body
  const data = ctx.request.body;
  ctx.body = {
    message: '数据已接收',
    receivedData: data
  };
});

// 组合给定的中间件并返回中间件。 koa-compose
const middleware = compose([
  helmet(),
  koaBody(),
  json(),
  serve(path.join(__dirname, '../public')),
  combineRouter(),
  router.routes(),
  router.allowedMethods()
])
app.listen(3000, () => {
  console.log('Koa server is running on http://localhost:3000');
});
