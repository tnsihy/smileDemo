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
    <!-- 2.swiper 轮播图 :autoplay:1000 轮播时间1秒-->
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
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      msg: "Shopping Mail",
    // 1.定位  ../../通过两级找到assets
      locationIcon:require('../../assets/images/location.png'),
      bannerPicArray:[],
      category:[]
    }
  },
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
    background-color:rgb(72, 226, 213);
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
    background-color:rgb(72, 226, 213);
    color:#fff;
}
.search-button{
    border-radius: 0.31rem;
    background-color:fff;
    margin-left:.5rem;
}
.swiper-area{
  clear: both;/* 清除浮动 */
  max-height:13rem;/* 懒加载的bug，限制轮播点的最大高度 */
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
</style>