<template>
  <el-container id="home_container">
    <!-- 头部 -->
    <el-header>
      <Header></Header>
    </el-header>
    <!-- 内容区域 -->
    <el-container class="content-container">
      <!-- 侧边栏 -->
      <el-aside style="width:240px;">
        <Aside></Aside>
      </el-aside>
      <div class="content">
        <!-- 标题栏 -->
        <div class="module-title">
          <span>{{routeTitle}}</span>
        </div>
        <!-- 内容 -->
        <el-main>

          <!-- <el-table :data="tableData">
					<el-table-column prop="date" label="日期" width="140"></el-table-column>
					<el-table-column prop="name" label="姓名" width="120"></el-table-column>
					<el-table-column prop="address" label="地址"></el-table-column>
				</el-table>-->
          <router-view></router-view>
        </el-main>
      </div>

    </el-container>
  </el-container>
</template>

<script>
import Header from "@/components/header/header.vue";
import Aside from "@/components/aside/aside.vue";
export default {
  name: "Home",
  data() {
    return {
      asidewidth: "240px"
    };
  },
  components: {
    Header,
    Aside
  },
  computed: {
    routeTitle() {
      return this.$route.meta.title;
    }
  }
};
</script>

<style scoped lang="less">
#home_container {
  .el-header {
    width: 100vw;
    line-height: 60px;
    text-align: center;
    margin-bottom: 1px;
    background-color: #f6f6f6;
    background-image: -webkit-linear-gradient(#f6f6f6 0%, white 45%);
    background-image: linear-gradient(#f6f6f6 0%, white 45%);
    border-bottom: 1px solid #e9e9e6;
    border-top: 3px solid #ededed;
  }
  .content-container {
    width: 100vw;
    .content {
      width: 100%;
      .module-title {
        height: 50px;
        width: 100%;
        background: #34495e;
        border-bottom: 3px solid rgb(238, 238, 238);
        span {
          display: inline-block;
          line-height: 50px;
          height: 50px;
          border-bottom: 3px solid #0088cc;
          font-size: 18px;
          color: white;
          padding: 0 20px;
        }
      }
      .el-main {
        padding: 40px;
        width: 100%;
        height: auto;
        background: rgba(243, 240, 240, 0.897);
      }
    }

    .el-aside {
      height: calc(100vh - 61px);
      background: #34495e;
    }
  }
}
</style>
