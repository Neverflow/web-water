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
    overflow-x: hidden;
}
html,
body,
#app {
    height: 100%;
}
.el-container {
    /*设置内部填充为0，几个布局元素之间没有间距*/
    padding: 0px;
    /*外部间距也是如此设置*/
    margin: 0px;
    /*统一设置高度为100%*/
    min-height: 100%;
    height: auto;
}
</style>
