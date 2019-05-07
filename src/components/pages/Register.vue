<template>
  <div class="register-container">
    <!-- NavBar导航栏 -->
    <van-nav-bar 
        title="用户注册" 
        left-text="返回"
        @click-left="goBack"
    />
    <div class="register-panel">
      <van-field 
        v-model="username" 
        label="用户名" 
        placeholder="请输入用户名" 
        required
        icon="clear"
        @click-icon="username = ''"
    />

    <van-field 
        v-model="password" 
        type="password"
        label="密码" 
        placeholder="请输入密码" 
        required
    />
    <div class="register-button">
        <van-button type="primary" size="large" @click="axiosRegisterUser">马上注册</van-button>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
//引入接口配置文件
import url from '@/serviceAPI.config.js'
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    goBack: function() {
      // 返回前一页
      this.$router.go(-1);
    },
    axiosRegisterUser:function(){
      axios({
        url : url.registerUser,
        method:'post',
        data:{
          username:this.username,
          password:this.password
        }
      })
      .then(response =>{
        console.log(response)
      })
      .catch(error =>{
        console.log(error)
      })
    }
  }
};
</script>

<style scoped>
.register-container{
    background-color:#f0f0f0;
}
.register-panel{
    width:96%;
    margin:20px auto;
    padding-bottom:60px;
}
.register-button{
    padding-top:10px;
}
.van-button{
    border-radius: 5px;
}
</style>