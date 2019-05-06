//导入koa2，导入的是一个class，故用大写Koa表示
const Koa = require('koa')
//创建一个Koa对象表示web app本身
const app = new Koa()

// 对于任何请求，app将调用该异步函数处理请求
//参数ctx是由koa传入的封装了request和response的变量，我们可以通过它访问request和response
app.use(async(ctx)=>{
    ctx.body = '<h1>Hello,Koa2</h1>'
})

// 在端口3000监听
app.listen(3000,()=>{
    console.log('[Server] starting at port 3000')
})