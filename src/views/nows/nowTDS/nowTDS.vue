<template>
  <el-row id="now_tds">
    <div>TDS实时数据</div>
    <el-row :gutter="40">
      <el-col :md="12">
        Echarts1
      </el-col>
      <el-col :md="12">
        Echarts1
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
export default {
  name: "nowTDS",
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
#now_tds {
  overflow: hidden;
  .el-col {
    background: white;
  }
}
</style>
