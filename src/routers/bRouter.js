const b = require('../api/b')
const Router = require('@koa/router');
const router = new Router();

router.get('/b', b)

module.exports= router
