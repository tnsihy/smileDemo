<template>
  <div>
      <swiper class="swiper" :options="swiperOption">
          <swiper-slide class="text">
              <div>
                   人生的黄金时期在青年。如果把人生比作自然的四季，青春就是最明媚的盛夏时节。我们这一代青年人，该如何书写青春？

回溯习近平的青春成长岁月，15岁时来到梁家河插队面临各种挑战，最后当上了大队支部书记；20岁挑起了梁家河大队支部书记重担，带领村民建起陕西第一口沼气池；30岁主政一方，当上正定县委书记时依然骑着自行车下乡走访。

通过习近平的成长点滴，能感受到跨越时空、直击人心的成长力量。青年习近平的成长典范，正可为当代青年的价值坐标锚定方向。

小时候就立下“精忠报国”志向  直言“工作很累但很愉快”

“功崇惟志，业广惟勤。”五六岁的时候，习近平跟母亲去买岳飞的小人书，“精忠报国”四个字他一直记着，成为一生追求的目标。1969年初，不满16岁的习近平主动申请到陕北农村插队，来到了延川县文安驿公社梁家河大队。

习近平在《我是黄土地的儿子》文章中回忆说，15岁来到黄土地时，我迷惘、彷徨；22岁离开黄土地时，我已经有着坚定的人生目标，充满自信。习近平在《我是黄土地的儿子》文章中提到，艰难困苦能够磨练一个人的意志。七年上山下乡的艰苦生活对我的锻炼很大，后来遇到什么困难，就想起那个时候在那样的困难条件下还可以干事，现在干嘛不干？你再难都没有难到那个程度。这个对人的作用很大。一个人要有一股气，遇到任何事情都有挑战的勇气，什么事都不信邪，就能处变不惊、知难而进。

在梁家河窑洞里，习近平读了车尔尼雪夫斯基的《怎么办》，当时在习近平心中引起了很大震动。书的主人公拉赫美托夫，过着苦行僧式的生活，为了磨炼意志，甚至睡在钉板床上，扎得浑身是血。那时候，习近平觉得锻炼毅力就得这么炼，干脆也把褥子撤了，就睡在光板炕上。一到下雨下雪天，就出去摸爬滚打，下雨的时候去淋雨，下雪的时候去搓雪，在井台边洗冷水澡。

在《我是黄土地的儿子》文中，习近平回忆了自己在梁家河时的情况。起初，他干活老想偷懒，工分比妇女还少；后来，他过了跳蚤关、饮食关、劳动关和思想关等考验，成了种地的好把式、“吃苦耐劳的好后生”；4年后，还当上了大队支部书记。

              </div>
          </swiper-slide>
      </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
    components:{swiper,swiperSlide},
    data() {
        return {
            swiperOption: {
                // 惯性滚动效果
                direction:'vertical',
                slidesPerView:'auto',
                /*默认为false
                普通模式：slide滑动时只滑动一格，并自动贴合wrapper，
                设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。*/
                freeMode:true,
                //鼠标滚动
                mousewheel:true
            }
        }
    },
};
</script>

<style scoped>
.swiper{
    height:300px;
    overflow: hidden;
}
.text{
    font-size:18px;
    text-align: left;
    padding:10px;
    height: auto;
    /* 盒模型，解决了文章字体在页面外边的bug */
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
</style>