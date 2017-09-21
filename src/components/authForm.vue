<template>
	<div class="authContainer">
		<div class="authFormContainer">
			<div class="authHeader">
				<h2>Welcome to new World!</h2>
				<div class="authHeaderTabs">
					<input class="signOrloginButton" type="radio" name="tab" id="signUp" checked/>
					<label for="signUp" @click="showTab(1)">Sign up</label>
					<input class="signOrloginButton" type="radio" name="tab" id="login"/>
					<label for="login" @click="showTab(2)">Login</label>
				</div>
			</div>
			<transition :duration="{ enter: 200, leave: 100 }" name="component-fade">
				<div class="authForm" v-show="showSignForm">
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
							<input class="authFields" type="password" name="" id="passwordRepeat" required>
						</div>
						<div class="authBtnContainer">
							<button class="authBtn">Sign up</button>
						</div>
					<!-- <button class="authSocButton"> some text here</button> -->
					</form>
					
				</div>
			</transition>
			<transition :duration="{ enter: 200, leave: 100 }" name="component-fade">
				<div class="authForm" v-show="showLogForm">
					<form>
						<div class="fieldContainer">
							<label class="labelFields" for="email">E-mail</label>
							<input class="authFields" type="email" name="" id="emaillog" required>
						</div>
						<div class="fieldContainer">
							<label class="labelFields" for="password">Password</label>
							<input class="authFields" type="password" name="" id="passwordlog" required>
						</div>
						<div class="authBtnContainer">
							<button class="authBtn">Login</button>
						</div>
					<!-- <button class="authSocButton"> some text here</button> -->
					</form>
					
				</div>
			</transition>
		</div>
	</div>

</template>

<script>
export default {
	data(){
		return {
			showSignForm: true,
			showLogForm: false
		}
	},
	methods:{
		showTab(num){
			switch(num){
				case 1:
				this.showSignForm = true
				this.showLogForm = false
				break;
				case 2:
				this.showSignForm = false
				this.showLogForm = true
				break;
				default:
				break;
			}
		}
	}
}

</script>

<style lang="stylus" scoped>
@import '../style/auth'

</style>