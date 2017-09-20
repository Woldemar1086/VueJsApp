<template>
	<div class="authContainer">
		<div class="authFormContainer">
			<div class="authHeader">
				<h2>Welcome to new World!</h2>
				<div class="authHeaderTabs">
					<input class="signOrloginButton" type="radio" name="tab" id="signUp" checked/>
					<label for="signUp">Sign up</label>
					<input class="signOrloginButton" type="radio" name="tab" id="login"/>
					<label for="login">login</label>
				</div>
			</div>
			<div class="authForm">
				<button class="facebookBtn">Continue with Facebook</button>
				<form>
					<div class="fieldContainer">
						<label class="labelFields" for="email">E-mail</label>
						<input class="authFields" type="email" name="" id="email" required>
					</div>
					<div class="fieldContainer">
						<label class="labelFields" for="password">Password</label>
						<input class="authFields" type="password" name="" id="password" required>
					</div>
					<div class="fieldContainer">
						<label class="labelFields" for="password">Repeat your password</label>
						<input class="authFields" type="password" name="" id="password" required>
					</div>
				<!-- <button class="authSocButton"> some text here</button> -->
				</form>
				
			</div>
			<div class="authBtnContainer">
				<button class="authBtn">Login</button>
			</div>
			
		</div>
	</div>

</template>

<script>

</script>

<style lang="stylus" scoped>
@import '../style/auth'

</style>