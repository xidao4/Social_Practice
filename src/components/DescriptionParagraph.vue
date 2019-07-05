<template>
  <div style="text-align: left;">
    <div class="title">{{ title }}</div>
    <div class="content">{{ content }}</div>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'content'
  ]
}
</script>

<style>
.title {
  font-size: 20px;
  font-weight: bold;
}
.content {
  font-size: 18px;
}
</style>