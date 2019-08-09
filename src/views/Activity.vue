<template>
<!--  <el-tabs style="padding: 0 20px"-->
<!--    v-model="tab"-->
<!--    type="card"-->
<!--  >-->
<!--    <el-tab-pane label="实地调查日志" name="1">-->
<!--      <Note/>-->
<!--    </el-tab-pane>-->
<!--    <el-tab-pane label="宣传视频" name="2">-->
<!--      <Video/>-->
<!--    </el-tab-pane>-->
<!--    <el-tab-pane label="照片记录" name="3">-->
<!--      <Photo/>-->
<!--    </el-tab-pane>-->
<!--  </el-tabs>-->
  <el-row class="tac">
    <el-col :span="12">
      <router-view></router-view>
    </el-col>
    <el-col :span="6">
      <el-menu
              router
              default-active="activityPhoto"
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              >
        <el-menu-item index="activityPhoto">
          <i class="el-icon-menu"></i>
          <span slot="title">照片记录</span>
        </el-menu-item>
        <el-menu-item index="activityVideo">
          <i class="el-icon-menu"></i>
          <span slot="title">宣传视频</span>
        </el-menu-item>
        <el-menu-item index="activityNote" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">实践日志</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  // components: {
  //   activityNote: () => import('./ActivityNote.vue'),
  //   activityVideo: () => import('./ActivityVideo.vue'),
  //   activityPhoto: () => import('./ActivityPhoto.vue'),
  // },
  data() {
    return {
      tab: "1"
    }
  }
}
</script>

<style>

</style>

// 实地调查日志、视频、访谈视频（总共一个视频）、照片记录
