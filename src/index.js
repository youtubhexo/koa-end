const Koa = require('koa');
const Router = require('@koa/router');
const { koaBody } = require('koa-body');
const json = require('koa-json');

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

app
  .use(koaBody())
  .use(json())
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(3000, () => {
  console.log('Koa server is running on http://localhost:3000');
});
