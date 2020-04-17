<template>
    <el-row id="now_tds">
        <div class="title-container">
            <div>TDS值实时数据</div>
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
                <el-table-column prop="tds" label="TDS值"></el-table-column>
                <el-table-column prop="date" label="数据采集时间"></el-table-column>
            </el-table>
        </el-row>
        <el-row :gutter="40">
            <el-col :md="12">
                <el-card class="chart-container" id="nowtds">Echarts</el-card>
            </el-col>
            <el-col :md="12">
                <el-card class="box-card chart-container">
                    <div slot="header" class="clearfix">
                        <span>水质检测 —— TDS值</span>
                    </div>
                    <div class="desc">
                        <p>氢离子浓度指数（hydrogen ion concentration）是指溶液中氢离子的总数和总物质的量的比。一般称为“pH”。</p>
                        <p>我们在日常生活中所要饮用的水的PH值应在6.5—8.5之间,ph之的标准是以氢离子的标准定位的,小于7的是显酸性的,大于7的是显碱性的。</p>
                        <p>水质PH值过高将会导致溶解性盐类析出，使水的感官性状变坏，并且PH值对混凝沉淀的效果、净水剂投量、加氯消毒效果以及除氯处理等都有关系，会降低氯制剂的消毒效果；相反如果PH值过低，也就是酸性过强时，就会增加水对金属，特别是对铁、铅和二氧化碳的溶解能力，这种水容易腐蚀管道。因此在水处理过程中PH值是一项重要指标。</p>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </el-row>
</template>

<script>
import { reqWater } from "@/api";
export default {
    name: "nowTDS",
    data() {
        return {
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
            return datearr;
        },
        tdsArr() {
            let tdsarr = [];
            this.tableData.forEach((item, index) => {
                tdsarr.push(item.tds);
            });
            return tdsarr;
        }
    },
    methods: {
        async initValue() {
            if (!this.loading) {
                this.loading = true;
            }

            const res = await reqWater({ nowtds: true });
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
            let myChart = this.$echarts.init(document.getElementById("nowtds"));
            // 指定图表的配置项和数据
            let option = {
                title: {
                    text: "当前TDS测量值",
                    x: "center",
                    top: "10",
                    textStyle: {
                        fontFamily: "苹方"
                    }
                },
                tooltip: {},
                legend: {
                    data: ["TDS值"],
                    right: "10%",
                    top: "10"
                },
                xAxis: {
                    data: this.dateArr,
                    boundaryGap: false
                },
                yAxis: {
                    min: 4,
                    max: 9
                },
                series: [
                    {
                        name: "TDS值",
                        type: "line",
                        data: this.tdsArr,
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
#now_tds {
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
    .desc {
        color: #888;
        text-indent: 2em;
        p {
            line-height: 1.5;
        }
    }
}
</style>
