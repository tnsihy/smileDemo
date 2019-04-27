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
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Shopping Mail",
    //   ../../通过两级找到assets
      locationIcon:require('../../assets/images/location.png')
    };
  }
};
</script>

<style scoped>
.search-bar{
    height:2.2rem;
    line-height: 2.2rem;
    background-color:rgb(72, 226, 213);
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
    background-color: rgb(72, 226, 213);
    color:#fff;
}
.search-button{
    border-radius: 0.31rem;
    margin-left:.2rem;
}
</style>