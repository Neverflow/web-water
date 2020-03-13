<template>
  <el-row id="now_ph">
    <div>PH值实时数据</div>
    <el-row :gutter="40">
      <el-col :md="12">
        <div class="chart-container">
          Echarts1
        </div>
      </el-col>
      <el-col :md="12">
        <div class="chart-container">
          Echarts1
        </div>
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
    height: 380px;
    .chart-container {
      background: white;
      height: 370px;
    }
  }
}
</style>
