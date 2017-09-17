<template>
	<div>	
		<header-Menu></header-Menu>
		<router-view></router-view>
	</div>
</template>

<script>
import headerMenu from './components/headerMenu.vue'

export default {
	components: {
		headerMenu
	}
}
</script>

<style>
html, body{
	height: 100%;
	width: 100%;
	padding: 0;
	margin: 0;
}
</style>
<!-- <router-view></router-view> -->