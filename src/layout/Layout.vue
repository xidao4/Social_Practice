<template>
  <el-container direction="vertical">
    <el-header style="height: 200px">

      <el-row class="banner">
        <el-col :span="3" style="margin-top: 15px" >
          <el-link icon="el-icon-d-arrow-left" :underline="false" @click="goBack" style="font-size: 20px">返回首页</el-link>
        </el-col>
        <el-col :span="8" :offset="10">
          <el-menu router :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="/activity">实践足迹</el-menu-item>
            <el-menu-item index="/map" @click="open1">电子地图</el-menu-item>
            <el-menu-item index="/architecture">建筑风貌</el-menu-item>
            <el-menu-item index="/description">文图介绍</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span='24' class="picture">
          <el-image :src="logo" @click="goBack"></el-image>
        </el-col>
      </el-row>
    </el-header>

    <el-main>
      <router-view></router-view>
    </el-main>

  </el-container>
</template>

<script>
export default {
  data(){
    return{
      activeIndex: '/activity',
      logo:require("./assets/logo4.gif")
    }
  },
  methods:{
    goBack(){
      this.$router.push('/homepage')
    },
    // open1(){
    //   this.$notify.info({
    //     title: '提示',
    //     message: '点击蓝色泡泡可以看到介绍哦~ 按住鼠标可以拖动地图～ 地图还可以放大缩小，快试一下吧～',
    //     offset:80,
    //     duration:5500
    //   })
    // },
  }

}
import anime from "animejs"
anime({
  targets: 'div',
  translateX: [
    { value: 100, duration: 1200 },
    { value: 0, duration: 800 }
  ],
  rotate: '1turn',
  backgroundColor: '#FFF',
  duration: 2000,
  loop: false
});
</script>

<style>
.el-header {
  /*background: black;*/
   padding: 0;
 }
.el-container{
  /*background: gray;*/
  height: 100%;
  vertical-align: middle;
}
  .banner{
    margin-top: 5px;
  }
  .el-menu-demo{
  }
  .picture{
    background: black;
    /*background: url("assets/logo.gif") no-repeat left;*/
    /*background-image: url("assets/static_logo.png");*/
    /*background-repeat: no-repeat;*/
    /*background-size: cover;*/
  }
</style>
