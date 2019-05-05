<template>
  <div>
    <div class="search-bar">
      <van-row>
        <van-col span="3">
            <img :src="locationIcon" class="location-icon">
        </van-col>
        <van-col span="16">
            <input type="text" class="seach-input">
        </van-col>
        <van-col span="5">
            <van-button size="mini" class="search-button">查找</van-button>
        </van-col>
      </van-row>
    </div>
    <!-- 2.swiper 轮播图 :autoplay:2000 轮播时间2秒-->
    <div class="swiper-area">
      <van-swipe :autoplay="2000">
        <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
          <!-- 3.<img :src="banner.imageUrl" width="100%"> 改为懒加载v-lazy-->
          <img v-lazy="banner.image" width="100%">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!--6.type bar -->
    <div class="type-bar">
      <div v-for="(cate,index) in category" :key="index">
        <img v-lazy="cate.image" width="90%">
        <span>{{cate.mallCategoryName}}</span>
      </div>
    </div>
    <!-- 7.Recommend goods area -->
    <div class="recommend-area">
      <div class="recommend-title">商品推荐</div>
      <div class="recommend-body">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in recommendGoods" :key="index">
            <div class="recommend-item">
              <img :src="item.image" width="80%">
              <div>{{item.goodsName}}</div>
              <div>￥{{item.price}}(￥{{item.mallPrice}})</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <swiper-default></swiper-default>
    <swiper-default2></swiper-default2>
    <swiper-default3></swiper-default3>
    <swiper-text></swiper-text>
  </div>
</template>

<script>
import axios from 'axios'
// 8.局部引入vue-awesome-swiper组件
import 'swiper/dist/css/swiper.css'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import SwiperDefault from '../swiper/SwiperDefault'
import SwiperDefault2 from '../swiper/SwiperDefault2'
import SwiperDefault3 from '../swiper/SwiperDefault3'
import SwiperText from '../swiper/SwiperText'
export default {
  data() {
    return {
      msg: "Shopping Mail",
    // 1.定位  ../../通过两级找到assets
      locationIcon:require('../../assets/images/location.png'),
      bannerPicArray:[],
      category:[],
      recommendGoods:[],
      swiperOption:{
        slidesPerView:3  //9.每个页面显示3个
      }
    }
  },
  components:{swiper,swiperSlide,SwiperDefault,SwiperDefault2,SwiperDefault3,SwiperText},
  created(){
    axios({
      url:'https://www.easy-mock.com/mock/5cc6f48758e3d93eff3d80a7/SmileDemo/index',
      method:'get'
    })
    .then(response=>{
      console.log(response) //4.可以打印观察测试数据
      if(response.status === 200){
        //5.如果请求成功
        this.category = response.data.data.category;
        this.bannerPicArray = response.data.data.slides;
        this.recommendGoods = response.data.data.recommend;
      }
    })
    .catch(error=>{

    })
  }
};
</script>

<style scoped>
.search-bar{
    height:2.2rem;
    line-height: 2.2rem;
    background-color:rgb(77, 157, 223);
    overflow: hidden;
}
.location-icon{
    width:80%;
    padding-left:.2rem;
}
.seach-input{
    width:100%;
    height: 1.3rem;
    border:none;
    border-bottom:1px solid #fff !important;
    background-color:rgb(77, 157, 223);
    color:#fff;
}
.search-button{
    border-radius: 0.31rem;
    background-color:fff;
    margin-left:.5rem;
}
.swiper-area{
  clear: both;/* 清除浮动 */
  max-height:9rem;/* 懒加载的bug，限制轮播点的最大高度 */
  overflow: hidden;
}
.type-bar{
  background: #fff;
  margin:0 .3rem .3rem .3rem;
  border-radius: .3rem;
  font-size: 14px;
  display: flex;
  flex-direction: row;/* (默认)横向排列 */
  flex-wrap: nowrap;/* (默认)不换行 */
}
.type-bar div{
  padding:.3rem;
  font-size:12px;
  text-align: center;
  max-width: 60px; /* 图片大小可能不同，调整图片大小 */
}
.recommend-area{
  margin-top:.3rem;
}
.recommend-title{
  border-bottom:1px solid #eee;
  font-size:14px;
  padding:.2rem;
  color:rgb(77, 157, 223);
}
.recommend-body{
  border-bottom:1px solid #eee;
}
.recommend-item{
  font-size:12px;
  text-align: center;
  border-right:1px solid #eee;
}
</style>