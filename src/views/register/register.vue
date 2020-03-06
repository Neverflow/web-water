<template>
	<el-row type="flex" justify="center" align="middle">
		<el-col :span="16">
			<el-form :model="ruleForm">
				<h3>注册账号</h3>
				<el-form-item prop="username">
					<el-input v-model="ruleForm.username" placeholder="请输入账号"></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
				</el-form-item>
				<el-form-item prop="suerpassword">
					<el-input type="password" v-model="ruleForm.surepassword" placeholder="请确认密码"></el-input>
				</el-form-item>
				<el-button @click="handleRegister">注册</el-button>
			</el-form>
		</el-col>
	</el-row>
</template>

<script>
import { showLoading, hideLoading } from "@/common/loading/loading";
export default {
	name: "register",
	data() {
		return {
			ruleForm: {
				username: "",
				password: "",
				surepassword: ""
			}
		};
	},
	methods: {
		handleRegister() {
			new Promise((resolve, reject) => {
				showLoading()
				/* @todo */
				setTimeout(() => {
					resolve("注册成功");
				}, 1000);
			}).then(res => {
				hideLoading()
				this.$alert(res, "注册", {
					confirmButtonText: "返回登录界面",
					type: "success",
					callback: () => {
						this.$router.push("/mainuser/login");
					}
				});
			});
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
