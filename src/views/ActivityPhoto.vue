<template>
  <div>
    <div class="block" margin="40">
      <span class="demonstration"></span>
      <el-carousel trigger="click" height="600px">
        <el-carousel-item v-for="item in allImage" :key="item">
          <img alt="" :src="item" width=100% height=100%>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            item:'',
            allImage:[require('./assets/images/1.jpg'),require('./assets/images/2.jpg'),require('./assets/images/3.jpg'),require('./assets/images/hezhao.jpg')]
            // movie_src:require('./assets/test.mp4'),
            // img_src: 'https://www.baidu.com/img/bd_logo1.png'
        }
    }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
</style>
