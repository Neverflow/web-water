<template>
	<el-menu default-active="/home/nowph" unique-opened router>
		<el-submenu index="1">
			<template slot="title">
				<i class="el-icon-message"></i>当前数据
			</template>
			<el-menu-item-group>
				<el-menu-item index="/home/nowph">PH值</el-menu-item>
				<el-menu-item index="/home/nowtemp">温度</el-menu-item>
				<el-menu-item index="/home/nowadt">ADT</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
		<el-submenu index="2">
			<template slot="title">
				<i class="el-icon-menu"></i>数据历史
			</template>
			<el-menu-item-group>
				<el-menu-item index="2-1">PH值</el-menu-item>
				<el-menu-item index="2-2">温度</el-menu-item>
				<el-menu-item index="2-3">ADT</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
		<el-submenu index="3">
			<template slot="title">
				<i class="el-icon-setting"></i>导航三
			</template>
			<el-menu-item-group>
				<el-menu-item index="3-1">选项1</el-menu-item>
				<el-menu-item index="3-2">选项2</el-menu-item>
				<el-menu-item index="3-3">选项3</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
	</el-menu>
</template>

<script>
export default {
	name: "",
	data() {
		return {};
	}
};
</script>

<style scoped lang="less">
.el-menu {
	border: 0;
	.el-submenu {
		background-color: rgba(255, 255, 255, 0.4);
		color: white;
	}
}
</style>
