//init初始化
const mongoose = require('mongoose') //引入mongoose插件
const db = "mongodb://localhost/smile-db" //建立链接的地址，如果数据库里面没有这个数据表则自动建立

/**
 * glob:node的glob模块允许你使用*等符号，来写一个glob规则，
 *      像在shell里一样，获取匹配对应的规则文件
 * resolve：将一些列路径或路径段解析为绝对路径
 * 2.安装glob
 * 3.载入Schema
 */
const glob = require('glob')
const {resolve} = require('path')
exports.initSchemas = ()=>{
  glob.sync(resolve(__dirname,'./schema','**/*.js')).forEach(require)
}

exports.connect = () => {
  //连接数据库
  mongoose.connect(db)
  //最大连接次数
  let maxConnectTimes = 0

  return new Promise((resolve, reject) => {
    
    // 增加数据库监听事件
    mongoose.connection.on('disconnected', () => {
      console.log('***数据库断开***')
      if(maxConnectTimes <= 3){
        maxConnectTimes++;
        mongoose.connect(db) //重新连接
      }else{
          reject()
          throw new Error('***数据库出现问题，程序无法修复，请人为处理***')
      }
    })

    mongoose.connection.on('error', (err) => {
      console.log('***数据库错误***')
      if(maxConnectTimes <= 3){
        maxConnectTimes++;
        mongoose.connect(db) //重新连接
      }else{
          reject(err)
          throw new Error('***数据库出现问题，程序无法修复，请人为处理***')
      }
    })

    mongoose.connection.once('open', () => {
      console.log('***MongoDB数据库连接成功***')
      resolve()
    })
  })
}
