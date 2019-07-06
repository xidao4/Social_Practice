<template>
  <div style="padding: 0 40px;">
    <div class="title">
      建筑派别：{{ result }}
    </div>
    <div class="content">
      派别介绍
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    result() {
      return this.$store.state.architecture.result;
    }
  }
}
</script>

<style>
.title {
  margin: 10px 0;
  font-size: 20px;
  font-weight: bold;
  text-align: left
}
.content {
  font-size: 18px;
  text-align: left
}
</style>