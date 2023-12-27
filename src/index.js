const Koa = require('koa');
const app = new Koa();

// 中间件，对于每个进入的请求，Koa 都会调用这个异步函数。
app.use(async ctx => {
  // ctx 是一个由 Koa 提供的 Context 对象，它封装了请求和响应对象。
  ctx.body = 'Hello, Koa!';
});

// 应用会监听在3000端口的HTTP请求。
app.listen(3000, () => {
  console.log('Koa server is running on http://localhost:3000');
});