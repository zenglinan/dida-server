import routerA from './public';
import combine from 'koa-combine-routers';

const combinedRouter = combine(routerA);

export default combinedRouter;
