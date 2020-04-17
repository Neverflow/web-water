<template>
    <header id="nav_container">
        <div class="block">
            <el-avatar size="small" :src="circleUrl"></el-avatar>
            <span>{{ $store.state.waterUser.name }}</span>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            circleUrl:
                "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        };
    }
};
</script>

<style scoped lang="less">
#nav_container {
    height: 100%;
    .block {
        height: 100%;
        display: flex;
        align-items: center;
        span {
            margin-left: 1em;
        }
    }
}
</style>
