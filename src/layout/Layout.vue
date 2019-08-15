<template>
  <el-container direction="vertical">
    <el-header style="height: 200px">

      <el-row class="banner">
        <el-col :span='8'>
          <el-menu router :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="map">电子地图</el-menu-item>
            <el-menu-item index="architecture">建筑风貌</el-menu-item>
            <el-menu-item index="description">文图介绍</el-menu-item>
            <el-menu-item index="activity">实践足迹</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span='24' class="picture">
          <el-image :src="logo" :fit="contain" ></el-image>
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
      logo:require("./assets/logo4.gif"),
    }
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
  background: black;
   padding: 0;
 }
.el-container{
  /*background: gray;*/
  height: 100%;
  vertical-align: middle;
}
  .banner{
    margin-top: 5px;
    background: black;
  }
  .el-menu-demo{
    background: black;
  }
  .el-menu-demo:hover{

  }
  .el-menu-item:hover{
    background-color: #8c939d !important;
  }
  .picture{
    background: black;
    /*background: url("assets/logo.gif") no-repeat left;*/
    /*background-image: url("assets/static_logo.png");*/
    /*background-repeat: no-repeat;*/
    /*background-size: cover;*/
  }
</style>
