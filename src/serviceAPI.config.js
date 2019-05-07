//13.服务接口API配置文件制作,方便维护

//基本路径
const BASEURL = "https://www.easy-mock.com/mock/5cc6f48758e3d93eff3d80a7/SmileDemo/"
const LOCALURL = "http://localhost:3000/"
const URL = {
    getShoppingMallInfo : BASEURL + 'index',
    getGoodsInfo : BASEURL + 'getGoodsInfo',
    registerUser : LOCALURL + 'user/register',  //用户注册接口
}
module.exports = URL