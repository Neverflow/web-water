<template>
  <div id="user-login">
    <el-row type="flex" class="row-bg" justify="center" align="middle">
      <el-col :xs="14" :sm="12" :md="10" :lg="6" :xl="6">
        <div class="grid-content bg-purple-light">
          <LoginForm>
            <h3 slot="form-title">登陆</h3>
          </LoginForm>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LoginForm from "./form";
export default {
  name: "login",
  data() {
    return {};
  },
  components: {
    LoginForm
  }
};
</script>

<style scoped>
.el-row {
  height: 100vh;
  background: url("../../assets/img/timg.jpg");
}
.bg-purple-light {
  background: rgba(255, 255, 255, 0.6);
  height: 300px;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
h3 {
  margin-top: 0px;
}
</style>
