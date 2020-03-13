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
        <div class="module-title"></div>
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
      }
      .el-main {
        padding: 40px;
        width: 100%;
        height: auto;
        background: rgba(241, 240, 240, 0.973);
      }
    }

    .el-aside {
      height: calc(100vh - 61px);
      background: #34495e;
    }
  }
}
</style>
