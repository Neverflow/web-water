<template>
	<el-row type="flex" justify="center" align="middle">
		<el-col :span="16">
			<el-form :model="ruleForm">
				<h3>登录系统</h3>
				<el-form-item prop="username">
					<el-input v-model="ruleForm.username" placeholder="请输入账号"></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
				</el-form-item>
				<el-button type="primary" @click="onSubmit()">登陆</el-button>
				<el-button @click="toRegister">注册</el-button>
			</el-form>
		</el-col>
	</el-row>
</template>

<script>
import { showLoading, hideLoading } from "@/common/loading";
export default {
	name: "login",
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
			console.log("submit");

			/**
			 *@todo 获取登录是否成功
			 */
			return new Promise((resolve, reject) => {
				// 此处异步操作需进行修改
				showLoading();
				setTimeout(() => {
					resolve("login success");
				}, 1000);
			}).then(res => {
				console.log(res);
				hideLoading();
				let loginstatus = true;
				this.$store.commit("setRouting", loginstatus);
				this.$router.push("/home");
			});
		},
		toRegister() {
			this.$router.push("/mainuser/register");
		}
	}
};
</script>

<style scoped lang="less">
.el-row {
	width: 100%;
	height: 100%;
	.el-form {
		height: 100%;
		text-align: center;
		h3 {
			margin-top: 0;
		}
	}
}
</style>
