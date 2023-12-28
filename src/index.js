const Koa = require('koa');
const Router = require('@koa/router');
const app = new Koa();
const router = new Router();

//1、request,method,respond
//2、api url  =>function,router
//3、ctx,async
router.get('/', (ctx, next) => {
  // ctx.router available
  ctx.body = 'Hello World123';
});
app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(3000, () => {
  console.log('Koa server is running on http://localhost:3000');
});
