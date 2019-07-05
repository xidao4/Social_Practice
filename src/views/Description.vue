<template>
  <el-collapse 
    v-model="opened"
    accordion
  >
    <el-collapse-item title="乡土文化遗产" name="1">
      <Paragraph
        :title='"小标题"'
        :content='"内容"'
      />
      <Paragraph
        :title='"小标题"'
        :content='"内容"'
      />
    </el-collapse-item>
    <el-collapse-item title="建筑风貌" name="2">
      <Paragraph
        :title='"小标题"'
        :content='"内容"'
      />
    </el-collapse-item>
    <el-collapse-item title="美食" name="3">
      <Paragraph
        :title='"小标题"'
        :content='"内容"'
      />
    </el-collapse-item>
    <el-collapse-item title="历史传说" name="4">
      <Paragraph
        :title='"小标题"'
        :content='"内容"'
      />
    </el-collapse-item>
    <el-collapse-item title="商业开发" name="5">
      <Paragraph
        :title='"小标题"'
        :content='"内容"'
      />
    </el-collapse-item>
    <el-collapse-item title="传统习俗" name="6">
      <Paragraph
        :title='"小标题"'
        :content='"内容"'
      />
    </el-collapse-item>
    <el-collapse-item title="经济发展" name="7">
      <Paragraph
        :title='"小标题"'
        :content='"内容"'
      />
    </el-collapse-item>
  </el-collapse>
</template>

<script>
export default {
  components: {
    Paragraph: () => import('@/components/DescriptionParagraph.vue')
  },
  data() {
    return {
      opened: ['1']
    }
  },
}
</script>

<style>
.el-collapse-item__header {
  /* font-size: 30px; */
  /* height: 60px; */
  /* line-height: 60px; */
}
</style>

// 乡土文化遗产、非遗、建筑风貌、美食、历史传说、商业开发、传统习俗、经济发展
