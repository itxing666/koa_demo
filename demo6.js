const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/', function(ctx, next) {
  ctx.body = "/"
})

router.get('/todo', function(ctx, next) {
  ctx.body = "Todo page"
})

app.use(router.routes())
.use(router.allowedMethods())
app.listen(3000)