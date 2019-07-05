<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  components: {
    Layout: () => import('@/layout/Layout.vue')
  },
  mounted() {
    this.$router.push('/home');
  }
  // methods: {
  //   use() {
  //     let data;
  //     this.$message('this button use elementUI and message');
      
  //     axios.post('http://127.0.0.1:8999/user/account', {
  //       "name":"test3",
  //       "email":"12345",
  //       "password":"123"
  //     }).then(response => {
  //       console.log(response);
  //     }).catch(err => {
  //       console.log('connect fail.');
  //     })
  //   }
  // }
}
</script>

<style>
html, body {
  margin: 0;
  width: 100%;
  height: 100%;
  /* background: gray; */
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* height: 1000px; */
  height: 100%;
}
</style>
