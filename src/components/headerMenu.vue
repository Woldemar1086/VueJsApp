<template>
	<div class="headerMenu">
		<div class="menu">
			<div class="logo">
				<img src="../assets/logo.png"/>
			</div>
			<router-link class="menuLink" tag="a" to="/"><h3>Home</h3></router-link>
			<router-link class="menuLink" tag="a" to="/cpp"><h3>C++</h3></router-link>
			<router-link class="menuLink" tag="a" to="/vuejs"><h3>VUE.js</h3></router-link>
			<router-link class="menuLink" tag="a" to="/js"><h3>JavaScript</h3></router-link>
			<router-link class="menuLink" tag="a" to="/linux"><h3>Linux</h3></router-link>
			<router-link class="login" tag="a" to="/auth"><h3>Login</h3></router-link>
		</div>
	</div>

</template>

<script>
	

</script>

<style lang="stylus" scoped>
	@import '../style/headerMenu.styl'

</style>