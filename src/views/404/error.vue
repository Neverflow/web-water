<template>
	<div class="error-container">
		<img src="@/assets/img/very_sorry.png"
			 alt="error" />
		<br />
		<el-button type="primary"
				   @click="goBack()">返回上一个页面</el-button>
	</div>
</template>

<script>
import { Button } from "element-ui";
export default {
	name: "404",
	data () {
		return {};
	},
	components: {
		Button
	},
	methods: {
		goBack () {
			this.$router.go(-1);
		}
	}
};
</script>

<style scoped lang="less">
.error-container {
	width: 1000px;
	margin: 0 auto;
	text-align: center;
}
</style>
