const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()

// 全局配置
// const router = new Router({
//   prefix: '/test'
// })

// router.get('/', function(ctx, next) {
//   ctx.body = "/"
// })

// router.get('/todo', function(ctx, next) {
//   ctx.body = "Todo page"
// })


let home = new Router()
home.get('/home', async(ctx) => {
  ctx.body = "home /home"
}).get('/todo', async(ctx) => {
  ctx.body = "home /todo"
})

let page = new Router()
page.get('/home', async(ctx) => {
  ctx.body = "page /home"
}).get('/todo', async(ctx)=> {
  ctx.body = "page /todo"
})

// 装载所有子路由
let router = new Router()
router.use('/home', home.routes(), home.allowedMethods)
router.use('/page', page.routes(), page.allowedMethods)

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods());

app.use(router.routes())
.use(router.allowedMethods())
app.listen(3000)