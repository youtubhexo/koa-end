const a = require('../api/a');
const Router = require('@koa/router');
const router = new Router();

router.get('/a', a)

module.exports= router
