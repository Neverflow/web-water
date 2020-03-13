<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
@font-face {
  font-family: "苹方";
  src: url("./assets/apple.ttf");
}
#app {
  font-family: "苹方";
  font-weight: 300;
}
</style>
