import demoController from '../api/DemoController';
import Router from '@koa/router';
const router = new Router();

router.get('/demo', demoController.demo)

export default router
