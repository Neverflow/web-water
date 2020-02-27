<template>
  <div id="app">
    <Login></Login>
  </div>
</template>

<script>
import Login from "@/views/login/login";
export default {
  name: "app",
  components: {
    Login
  },
  mounted: function() {
    if (!($.cookie("userIsLogin") == "true")) {
      //如果用户并未登录 直接跳转到登录界面
      this.$router.push("/login");
    }
  }
};
</script>

<style>
</style>
