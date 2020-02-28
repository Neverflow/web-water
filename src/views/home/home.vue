<template>
	<el-container id="home_container">
		<!-- 头部 -->
		<el-header>
			<Header></Header>
		</el-header>
		<!-- 内容区域 -->
		<el-container class="content-container">
			<!-- 侧边栏 -->
			<el-aside style="width:240px;">
				<Aside></Aside>
			</el-aside>

			<!-- 内容 -->
			<el-main>
				<!-- <el-table :data="tableData">
					<el-table-column prop="date" label="日期" width="140"></el-table-column>
					<el-table-column prop="name" label="姓名" width="120"></el-table-column>
					<el-table-column prop="address" label="地址"></el-table-column>
				</el-table>-->
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
import Header from "@/components/header/header.vue";
import Aside from "@/components/aside/aside.vue";
export default {
	name: "Home",
	data() {
		return {
			asidewidth: "240px"
		};
	},
	components: {
		Header,
		Aside
	}
};
</script>

<style scoped lang="less">
#home_container {
	// background: linear-gradient(
	// 		rgba(255, 255, 255, 0.5),
	// 		rgba(255, 255, 255, 0.5)
	// 	),
	// 	url("../../assets/img/home-bg.jpg") no-repeat center center/100% 100%;
	.el-header {
		width: 100vw;
		box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.1);
		line-height: 60px;
		text-align: center;
		margin-bottom: 1px;
	}
	.content-container {
		width: 100vw;
		.el-aside {
			box-shadow: 1px 0px 3px 1px rgba(0, 0, 0, 0.1);
			height: calc(100vh - 61px);
		}
	}
}
</style>
