<template>
  <div>
      <!-- 最基本swiper+分页器 -->
      <swiper :options="swiperOption">
          <swiper-slide class="swiper-slide" v-for="(item,index) in slide" :key="index">
              Slide {{item}}
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
  data() {
    return {
      slide: [1,2,3,4,5,6],
      swiperOption:{
        //pagination分页
        pagination:{
          el:'.swiper-pagination',
          //点击分页圆点有效果
          clickable:true
        },
        // 无限滚动
        loop:true
      }
    }
  },
  components:{swiper,swiperSlide}
};
</script>

<style scoped>
.swiper-slide{
    height: 5rem;
    line-height: 5rem;
    text-align: center;
    border-bottom:1px solid #ccc;
}
</style>