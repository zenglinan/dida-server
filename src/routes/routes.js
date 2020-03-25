const routerA = require('./aRouter')
const routerB = require('./bRouter')
const combine = require('koa-combine-routers')

module.exports = combine(
  routerA,
  routerB
)