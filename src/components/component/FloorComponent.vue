<template>
  <div>
    <div class="floor">
      <div class="floor-title">{{floorTitle}}</div>
      <!-- anomaly不规则的 -->
      <div class="floor-anomaly">
        <div class="floor-one">
          <img :src="floorData0.image" width="100%">
        </div>
        <div>
          <div class="floor-two">
            <img :src="floorData1.image" width="100%">
          </div>
          <div>
            <img :src="floorData2.image" width="100%">
          </div>
        </div>
      </div>
      <!-- 规则的 -->
      <div class="floor-rule">
        <div v-for="(item,index) in floorData.slice(3)" :key="index">
          <img :src="item.image" width="100%">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 楼层组件封装
export default {
  // 父组件通过props向下传递给子组件，这是子组件接收floorData
    props:['floorData','floorTitle'],
    data() {
        return {
            floorData0:{},
            floorData1:{},
            floorData2:{},
        }
    },
    created(){
      // 这里赋值的话得不到数据，因为数据是延迟返回的
      // this.floorData0 = this.floorData[0];
      // this.floorData1 = this.floorData[1];
      // this.floorData2 = this.floorData[2];
    },
    watch:{
      //watch()监听某个值的变化，从而达到change事件监听的效果
      floorData:function(val){
        this.floorData0 = this.floorData[0];
        this.floorData1 = this.floorData[1];
        this.floorData2 = this.floorData[2];
      }
      
    }
};
</script>

<style scoped>
.floor-anomaly {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #ddd;
}
.floor-anomaly div {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.floor-one {
  border-right: 1px solid #eee;
}
.floor-two {
  border-bottom: 1px solid #ddd;
}
.floor-rule {
  display: flex;
  flex-direction: row;
  /* 可以换行 */
  flex-wrap: wrap;
}
.floor-rule div {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 10rem;
  border-bottom: 1px solid #eee;
}
.floor-rule div:nth-child(odd) {
  /* odd奇数 */
  border-right: 1px solid #eee;
}
.floor-title{
  text-align: center;
  font-size:14px;
  height:1.5rem;
  line-height: 1.5rem;
  background-color: #f0f0f0;
}
</style>