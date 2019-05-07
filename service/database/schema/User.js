/**
 * mongoose的Schema建模介绍
 * schema用来定义表的末班，实现和MongoDB数据库的映射
 * model具备表操作能力的一个集合，是mongoose的核心能力
 * entity类似记录，由Model创建的实体
 */
const mongoose = require('mongoose') //声明mongoose
const Schema = mongoose.Schema //引入Schema
let ObjectId = Schema.Types.ObjectId  //声明Object类型
const bcrypt = require('bcrypt') //引入bcrypt
const SALT_WORK_FACTOR = 10  //加盐+10，强度

//数据库连接成功后，使用Schema进行数据建模
//创建Schema
const userSchema = new Schema({
    UserId : ObjectId, //注册时间
    userName : {unique:true,type:String}, //最后登录时间
    //或者这么写password : String
    password : {type:String},
    createAt : {type:Date,default:Date.now()},
    lastLoginAt : {type:Date,default:Date.now()}
})

//每一次新增都需要加盐加密处理
userSchema.pre('save',function(next){
    bcrypt.genSalt(SALT_WORK_FACTOR,(err,salt)=>{
        if(err) return next(err)
        
        //把密码传给hash进行加密。成功以后赋值给password属性
        bcrypt.hash(this.password,salt,(err,hash)=>{
            if(err) return next(err)
            this.password = hash
            next()
        })
    })
})

//发布模型，User为写入数据表的名称，userSchema为发布模型的标准
mongoose.model('User',userSchema)

//安装bcrypt
//如果npm install bcrypt --save报错
//则可以npm install bcrypt --save --registry=https://registry.npm.taobao.org