<template>
  <div>
      <Layout></Layout>
  </div>
</template>

<script>
    // javascript部分
  export default {
    name: "Home",
      components: {
          Layout: () => import('@/layout/Layout.vue')
      },
      mounted() {
          this.$router.push('/activity');
      }
  }

</script>

<style>
    /*CSS部分*/
  @import url("//unpkg.com/element-ui@2.10.1/lib/theme-chalk/index.css");
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item {
    background-color: #fbffff;
  }

</style>
