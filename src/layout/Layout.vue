<template>
  <el-container>
    <el-header :style="{ height: 'none' }">
      <el-row>
        <el-col :span='24' :style="{ height: '25px' }">
          banner
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='24' :style="{ height: '200px' }">
          <span style="display: block; margin: 100px">picture</span>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          router
          default-active="map"
        >
          <el-menu-item index="map">
            <i class="el-icon-location"></i>
            <span slot="title">电子地图</span>
          </el-menu-item>
          <el-menu-item index="architecture">
            <i class="el-icon-picture"></i>
            <span slot="title">建筑风貌</span>
          </el-menu-item>
          <el-menu-item index="description">
            <i class="el-icon-s-order"></i>
            <span slot="title">文图介绍</span>
          </el-menu-item>
          <el-menu-item index="activity">
            <i class="el-icon-s-flag"></i>
            <span slot="title">实践足迹</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
  <!-- <router-view></router-view> -->
</template>

<script>
export default {

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
  background: #B3C0D1;
  padding: 0;
}
.el-aside, .el-container{
  /*background: gray;*/
  height: 100%;
  vertical-align: middle;
}
</style>
