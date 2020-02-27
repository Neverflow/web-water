<template>
  <div id="login_form">
    <el-row type="flex" class="row-bg" justify="center" align="middle">
      <el-col :span="16">
        <el-form :model="ruleForm">
          <slot name="form-title">
            <h3>标题</h3>
          </slot>
          <el-form-item prop="username">
            <el-input v-model="ruleForm.username" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-button type="primary" @click="onSubmit()">登陆</el-button>
          <el-button>注册</el-button>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "login-form",
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!!");
    }
  }
};
</script>

<style scoped>
#login_form {
  height: 100%;
  text-align: center;
}
.row-bg {
  height: 100%;
}
</style>
