<template>
  <el-tabs style="padding: 0 20px"
    v-model="tab" 
    type="card"
  >
    <el-tab-pane label="实地调查日志" name="1">
      <Note/>
    </el-tab-pane>
    <el-tab-pane label="宣传视频" name="2">
      <Video/>
    </el-tab-pane>
    <el-tab-pane label="照片记录" name="3">
      <Photo/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  components: {
    Note: () => import('@/components/ActivityNote.vue'),
    Video: () => import('@/components/ActivityVideo.vue'),
    Photo: () => import('@/components/ActivityPhoto.vue'),
  },
  data() {
    return {
      tab: "1"
    }
  },
}
</script>

<style>

</style>

// 实地调查日志、视频、访谈视频（总共一个视频）、照片记录