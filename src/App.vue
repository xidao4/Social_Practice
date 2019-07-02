<template>
  <div id="app">
    <div id="nav">
      <el-button round @click='use'>element button</el-button> |
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  methods: {
    use() {
      let data;
      this.$message('this button use elementUI and message');
      
      axios.post('http://127.0.0.1:8999/user/account', {
        "name":"test3",
        "email":"12345",
        "password":"123"
      }).then(response => {
        console.log(response);
      }).catch(err => {
        console.log('connect fail.');
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
