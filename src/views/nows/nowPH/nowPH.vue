<template>
  <el-row id="now_ph">
    <div>PH值实时数据</div>
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
  name: "nowPH",
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
#now_ph {
  overflow: hidden;
  .el-col {
    background: white;
  }
}
</style>
