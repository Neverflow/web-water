<template>
  <el-menu
    default-active="/home/nowph"
    unique-opened
    router
  >
    <div class="logo-container">
      <img
        src="@/assets/img/logo.png"
        alt="logo"
      >
    </div>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-s-platform"></i>当前数据
      </template>
      <el-menu-item-group>
        <el-menu-item index="/home/nowph">PH值</el-menu-item>
        <el-menu-item index="/home/nowtemp">温度</el-menu-item>
        <el-menu-item index="/home/nowtds">TDS</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-menu"></i>数据历史
      </template>
      <el-menu-item-group>
        <el-menu-item index="2-1">PH值</el-menu-item>
        <el-menu-item index="2-2">温度</el-menu-item>
        <el-menu-item index="2-3">TDS</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-setting"></i>导航三
      </template>
      <el-menu-item-group>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
        <el-menu-item index="3-3">选项3</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.el-menu {
  background: #34495e;
  color: #abb4be;
  border: 0;

  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    img {
      width: 40px;
      height: 40px;
    }
  }
  & /deep/ .el-submenu__title {
    color: #abb4be;
    user-select: none;
    &:hover {
      background: #21262d;
    }
  }
  .el-submenu {
    background: #34495e;
    & /deep/ .el-menu-item-group {
      background: #34495e;
      & /deep/ .el-menu-item {
        color: #abb4be;
        user-select: none;
        &:hover {
          background: #21262d;
        }
      }
      .is-active {
        background: #21262d;
        color: #0088cc;
      }
    }
  }
}
</style>
