<template>
    <el-row id="all_tds">
        <div class="title-container">
            <div>TDS历史数据</div>
            <el-button type="primary" icon="el-icon-search" @click="initValue">获取最新数据</el-button>
        </div>
        <el-row class="t-b-margin">
            <el-table
                :data="currentData"
                border
                style="width: 100%"
                v-loading="loading"
                element-loading-text="玩儿命加载中"
            >
                <el-table-column prop="tds" label="TDS值"></el-table-column>
                <el-table-column prop="date" label="数据采集时间"></el-table-column>
            </el-table>
            <el-pagination
                background
                layout="prev, pager, next"
                :total="totalItem"
                :page-size="pageSize"
                :current-page="currentPage"
                @current-change="pageChangeHandler"
            ></el-pagination>
        </el-row>
    </el-row>
</template>

<script>
import { reqAllWater } from "@/api";
export default {
    name: "allTDS",
    props: {},
    data() {
        return {
            tableData: [],
            currentPage: 1,
            loading: false,
            pageSize: 10
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
        currentData() {
            return this.tableData.slice(
                (this.currentPage - 1) * this.pageSize,
                this.currentPage * this.pageSize
            );
        },
        totalItem() {
            return this.tableData.length <= 200 ? this.tableData.length : 200;
        }
    },
    created() {},
    mounted() {
        this.initValue();
    },
    methods: {
        // 可以做分页查询
        async initValue() {
            if (!this.loading) {
                this.loading = true;
            }

            const res = await reqAllWater({ alltds: true });
            // 时间过滤器处理ISO格式
            for (let i = 0; i < res.data.length; i++) {
                res.data[i].date = this.$root.$options.filters.dateFmt(
                    res.data[i].date
                );
            }

            this.tableData = res.data;
            this.loading = false;
            this.$message({
                message: "TDS数据获取成功",
                showClose: true,
                duration: 1500,
                type: "success"
            });
        },
        pageChangeHandler(currentPage) {
            this.currentPage = currentPage;
        }
    },
    components: {}
};
</script>

<style scoped lang="less">
#all_tds {
    overflow: hidden;
    .title-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .t-b-margin {
        margin-top: 1em;
        margin-bottom: 1em;
    }
    .el-pagination {
        margin-top: 2em;
    }
}
</style>
