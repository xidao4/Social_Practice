<template>
  <div id="architecture">
    <el-row>
      <el-col>
        <el-card>
          <Import/>
          <el-divider></el-divider>
          <Result/>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {
    Import: () => import('@/components/ArchitectureImport.vue'),
    Result: () => import('@/components/ArchitectureResult.vue'),
  }
  
}
</script>

<style>
#architecture {
  /* text-align: left; */
}
</style>