<template>
    <el-row type="flex" justify="center" align="middle">
        <el-col :span="16">
            <el-form :model="ruleForm">
                <h3>水质检测Web登录系统</h3>
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="请输入账号"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        v-model="ruleForm.password"
                        placeholder="请输入密码"
                        :show-password="true"
                        @keyup.enter.native="onSubmit"
                    ></el-input>
                </el-form-item>
                <el-button
                    type="primary"
                    size="medium"
                    icon="el-icon-position"
                    :loading="loadingState"
                    @click="onSubmit()"
                >登陆</el-button>
            </el-form>
        </el-col>
    </el-row>
</template>

<script>
import { showLoading, hideLoading } from "@/common/loading/loading";
import { reqLogin } from "@/api";
export default {
    name: "login",
    data() {
        return {
            ruleForm: {
                username: "",
                password: ""
            },
            loadingState: false
        };
    },
    methods: {
        async onSubmit() {
            if (!this.loadingState) {
                this.loadingState = true;
            }
            showLoading();
            // 处理登陆
            try {
                const res = await reqLogin({
                    name: this.ruleForm.username,
                    password: this.ruleForm.password
                });
                console.log(res);
                if (res.data.code == 0) {
                    let loginstatus = true;
                    this.$store.commit("setRouting", loginstatus);
                    this.$store.commit("setUser", res.data.data);
                    this.$router.push("/home");
                    this.$message({
                        message: "登陆成功，欢迎进入水质检测系统",
                        type: "success"
                    });
                } else {
                    this.$alert("您的账号或者密码错误", "登陆失败", {
                        confirmButtonText: "确定",
                        callback: () => {
                            this.ruleForm.username = "";
                            this.ruleForm.password = "";
                        }
                    });
                }
            } catch (error) {
                console.log(error);
                this.$alert("连接服务器异常", "登陆失败", {
                    confirmButtonText: "确定"
                });
            }

            this.loadingState = false;
            hideLoading();
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
            margin-bottom: 2em;
        }
        .el-button {
            width: 40%;
        }
    }
}
</style>
