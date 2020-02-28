<template>
	<div id="user-login">
		<el-row type="flex" class="row-bg" justify="center" align="middle" id="login_container">
			<el-col :xs="14" :sm="12" :md="10" :lg="6" :xl="6">
				<div class="grid-content bg-purple-light">
					<router-view></router-view>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	name: "mainUser",
	data() {
		return {};
	}
};
</script>

<style scoped lang="less">
#login_container {
	height: 100vh;
	background: url("../../assets/img/login-bg.jpg") no-repeat center
		center/100% 100%;
	.bg-purple-light {
		background: rgba(255, 255, 255, 0.6);
		height: 300px;
		box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
	}
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
}
</style>
