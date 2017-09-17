<template>
	<div>	
		<header-Menu v-show="currentRoute != '/'"></header-Menu>
		<router-view></router-view>
	</div>
</template>

<script>
import headerMenu from './components/headerMenu.vue'
import { router } from './app.js'

export default {
	data(){
		return {
			currentRoute: router.currentRoute.path
		}
	}, 
	components: {
		headerMenu
	},
	watch: {
		'$route'(to, from){
			this.currentRoute = to.path
		}
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