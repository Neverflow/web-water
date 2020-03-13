<template>
  <el-row id="now_temp">
    <div>温度实时数据</div>
    <el-row class="block">
      <el-col
        :md="10"
        class="md-offset1"
      >
        <el-slider
          v-model="value"
          :max="50"
          :marks="marks"
          :format-tooltip="formatTooltip"
        >
        </el-slider>
      </el-col>

    </el-row>
    <div class="charts">
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
    </div>

  </el-row>
</template>

<script>
export default {
  name: "nowTemp",
  data() {
    return {
      /**@todo 获取当前温度后应该加10后显示 */
      value: 25,
      marks: {
        0: "-10°C",
        10: "-0°C",
        20: "10°C",
        30: {
          style: {
            color: "#1989FA"
          },
          label: this.$createElement("strong", "30°C")
        },
        40: {
          style: {
            color: "#A52A2A"
          },
          label: this.$createElement("strong", "40°C")
        }
      }
    };
  },
  methods: {
    formatTooltip(val) {
      return val - 10;
    }
  },
  computed: {}
};
</script>

<style scoped lang="less">
#now_temp {
  overflow: hidden;
  .block {
    height: 60px;
    margin: 30px 0;

    .md-offset1 {
      @media only screen and (min-width: 992px) {
        margin-left: 4.16667%;
      }
    }
    .el-slider {
      border-radius: 30px;
      border: 1px solid white;
      box-sizing: border-box;
      padding: 0 10px;
      background: rgba(255, 255, 255, 0.6);
    }
  }
  .charts {
    .el-col {
      height: 380px;
      .chart-container {
        background: white;
        height: 370px;
      }
    }
  }
}
</style>
