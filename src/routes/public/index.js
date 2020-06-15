const Router = require('koa-router');
const publicController = require('./controller');

const router = new Router();

router.prefix('/public');

router.get('/captcha', publicController.getCaptcha);

export default router;
