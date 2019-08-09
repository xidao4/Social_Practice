<template>
  <div>
    <video v-bind:src="movie_src" controls="controls" id="video">
      您的浏览器不支持 video 标签。
    </video>
  </div>
</template>

<script>
export default {
    data(){
        return{

            // movie_src:require('./assets/test2.mp4')
            movie_src:''
        }
    }
}
</script>

<style>
  #video{
    width:100%;
    height:100%;
  }
</style>
