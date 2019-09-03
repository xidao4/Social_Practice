<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  mounted() {
    this.$router.push('/homepage');
  }
  // methods: {
  //   use() {
  //     let data;
  //     this.$message('this button use elementUI and message');

  //     axios.post('http://127.0.0.1:8999/user/account', {
  //       "name":"test3",
  //       "email":"12345",
  //       "password":"123"，
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
  padding:0px;
  margin:0px;
}
</style>
