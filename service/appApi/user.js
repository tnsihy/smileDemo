//Koa-router实现用户操作模块化
const Router = require('koa-router')  //引入 koa-router
let router = new Router()  

// 在浏览器中输入，http://localhost:3000/user，出现我们设定好的页面了。
router.get('/',async(ctx)=>{
    ctx.body = '这是用户操作首页'
})

router.post('/register',async(ctx)=>{
    // 获取前端传递给后端的数据
    console.log(ctx.request.body)
    ctx.body = ctx.request.body
})

module.exports = router