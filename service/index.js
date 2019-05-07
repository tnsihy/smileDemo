//导入koa2，导入的是一个class，故用大写Koa表示
const Koa = require('koa')
//创建一个Koa对象表示web app本身
const app = new Koa()
const {connect,initSchemas} = require('./database/init.js')
const mongoose = require('mongoose')
//5.打通前后端通讯koa-bodyparser
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())
//6.跨域问题koa2-cors
const cors = require('koa2-cors')
app.use(cors())
//1.引入 koa-router
const Router = require('koa-router')


//2.引入我们的user.js模块   
let user = require('./appApi/user.js') 
//3.装载所有子路由
let router = new Router()
router.use('/user',user.routes())
//4.加载路由中间件
app.use(router.routes())
app.use(router.allowedMethods())

/*
//立即执行函数，执行连接数据库的函数和载入Schema的函数
;(async ()=>{
    await connect()
    //Schema载入
    initSchemas()
    //User 是发布模型里面使用的表
    const User = mongoose.model('User')
    // 插入数据
    let oneUser = new User({userName:'tnsihy0',password:'123456'})
    oneUser.save().then(()=>{
        console.log('插入成功')
    })
    //打印插入的数据
    let user = await User.findOne({}).exec()
    console.log('---------------------')
    console.log(user)
    console.log('---------------------')
})()
*/

// 对于任何请求，app将调用该异步函数处理请求
//参数ctx是由koa传入的封装了request和response的变量，我们可以通过它访问request和response
app.use(async(ctx)=>{
    // ctx.set('Access-Control-Allow-Origin',"*")
    ctx.body = '<h1>Hello,Koa2</h1>'
})

// 在端口3000监听
app.listen(3000,()=>{
    console.log('[Server] starting at port 3000')
})