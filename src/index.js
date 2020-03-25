import Koa from 'koa'
import router from './routes/routes'
import helmet from 'koa-helmet'
import statics from 'koa-static'
import koaBody from 'koa-body'
import json from 'koa-json'
import cors from '@koa/cors'
import compose from 'koa-compose'

const app = new Koa()
const middleware = compose([
  koaBody(),
  cors(),
  statics('./public'),
  helmet(),
  json({ pretty: false, param: 'pretty' })
])

app.use(middleware)
app.use(router())

app.listen(3000)