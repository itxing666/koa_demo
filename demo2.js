// 获取Post请求的步骤：

// 1.解析上下文ctx中的原生nodex.js对象req。
// 2.将POST表单数据解析成query string-字符串.(例如:user=jspang&age=18)
// 3.将字符串转换成JSON格式。

const Koa = require('koa')
const app = new Koa()
app.use(async (ctx) => {
  if(ctx.url === '/' && ctx.method === 'GET') {
    let html = `
    <h1>Koa2 request post demo</h1>
    <form method="POST" action="/">
      <p>userName</p>
      <input name="userName" /><br/>
      <p>age</p>
      <input name="age" /><br/>
      <p>webSite</p>
      <input name='webSite'/><br/>
      <button type="submit">submit</button>
    </form>
    `
    ctx.body = html
  } else if (ctx.url === '/' && ctx.method === 'POST') {
    ctx.body = '接收到请求'
  } else {
    // 其它请求显示404页面
    ctx.body = '<h1>404!</h1>'
  }
})

app.listen(3000, () => {
  console.log('[demo] server is starting at port 3000')
})
