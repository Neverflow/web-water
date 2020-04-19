<template>
    <el-row id="now_temp">
        <div class="title-container">
            <div>温度实时数据</div>
            <el-button type="primary" icon="el-icon-search" @click="initValue">获取最新数据</el-button>
        </div>
        <el-row class="t-b-margin">
            <el-table
                :data="tableData"
                border
                style="width: 100%"
                v-loading="loading"
                element-loading-text="玩儿命加载中"
                empty-text="今日暂无数据"
            >
                <el-table-column prop="temp" label="温度"></el-table-column>
                <el-table-column prop="date" label="数据采集时间"></el-table-column>
            </el-table>
        </el-row>
        <div class="charts">
            <el-row :gutter="40">
                <el-col :md="12">
                    <div class="block">
                        <div>
                            <p>当前温度值</p>
                        </div>
                        <el-slider
                            v-model="value"
                            :max="50"
                            :marks="marks"
                            :format-tooltip="formatTooltip"
                        ></el-slider>
                    </div>
                </el-col>
                <el-col :md="12">
                    <el-card class="chart-container" id="nowtemp">Echarts</el-card>
                </el-col>
            </el-row>
        </div>
    </el-row>
</template>

<script>
import { reqWater } from "@/api";
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
            },
            tableData: [],
            loading: false
        };
    },
    computed: {
        dateArr() {
            let datearr = [];
            this.tableData.forEach((item, index) => {
                datearr.push(this.$root.$options.filters.dateArrFmt(item.date));
            });
            return datearr.reverse();
        },
        tempArr() {
            let temparr = [];
            this.tableData.forEach((item, index) => {
                temparr.push(item.temp);
            });
            return temparr.reverse();
        }
    },
    methods: {
        formatTooltip(val) {
            return val - 10;
        },
        async initValue() {
            if (!this.loading) {
                this.loading = true;
            }

            const res = await reqWater({ nowtemp: true });
            // 时间过滤器处理ISO格式
            for (let i = 0; i < res.data.length; i++) {
                res.data[i].date = this.$root.$options.filters.dateFmt(
                    res.data[i].date
                );
            }

            this.tableData = res.data;
            this.drawChart();
            this.loading = false;
        },
        drawChart() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(
                document.getElementById("nowtemp")
            );
            // 指定图表的配置项和数据
            let option = {
                title: {
                    text: "当前温度测量值",
                    x: "center",
                    top: "10",
                    textStyle: {
                        fontFamily: "苹方"
                    }
                },
                tooltip: {},
                legend: {
                    data: ["温度"],
                    right: "10%",
                    top: "10"
                },
                xAxis: {
                    data: this.dateArr,
                    boundaryGap: false
                },
                yAxis: {},
                series: [
                    {
                        name: "温度",
                        type: "line",
                        data: this.tempArr,
                        areaStyle: {
                            color: "rgb(139,200,231)"
                        },
                        lineStyle: {
                            color: "rgb(0,136,204)"
                        },
                        itemStyle: {
                            color: "rgb(0,136,204)",
                            borderWidth: 2
                        },
                        normal: { label: { show: true } }
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }
    },
    mounted() {
        this.initValue();
    }
};
</script>

<style scoped lang="less">
#now_temp {
    overflow: hidden;
    .title-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .el-col {
        height: 380px;
        .chart-container {
            background: white;
            height: 380px;
        }
    }
    .t-b-margin {
        margin-top: 1em;
        margin-bottom: 1em;
    }
    .block {
        height: 100%;
        overflow: hidden;
        .el-slider {
            margin: 1em;
            margin-top: 6em;
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
