<template>
	<div class="index">
		<img src="">
		<router-link tag="a" to="vuejs"><h3>Welcome on my website</h3></router-link>
	</div>
</template>
<script>

</script>

<style>

html, body{
	height: 100%;
	width: 100%;
	padding: 0;
	margin: 0;
}

.index{
	background-image: url('../assets/darkrift-orig_full-min.jpg');
	background-size: cover;
	background-position: center, center;
	width: 100%;
	height: 100%;
}
.index a {
	text-align: center;
	font-size: 2em;
	color: white;
	text-decoration: none !important;
}
</style>