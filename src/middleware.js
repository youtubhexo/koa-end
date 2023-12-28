// 洋葱模型  执行顺序：顺序执行   回调的顺序：反向执行   先进后出
const Koa = require('koa');
const app = new Koa();

const middleware = async function (ctx,next) { 
  console.log("this is a middleware!")
  next()
   console.log("middleware Ending")
}
const middleware1 = async function (ctx,next) { 
  console.log("this is a middleware1!")
  next()
   console.log("middleware1 Ending")
}
const middleware2 = async function () { 
  console.log("this is a middleware2!")
  console.log("middleware2 Ending")
}

app.use(middleware);
app.use(middleware1);
app.use(middleware2);
app.listen(3200);