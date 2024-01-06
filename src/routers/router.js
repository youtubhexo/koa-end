//https://www.npmjs.com/package/koa-combine-routers
const combineRouters = require('koa-combine-routers')
 
const aRouter = require('./aRouter')
const bRouter = require('./bRouter')
import demoRouter from './demoRouter'


const router = combineRouters(
  aRouter,
  bRouter,
  demoRouter
)
 
module.exports = router