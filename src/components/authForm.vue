<template>
	<div>
		<notifications 	group="auth-notification"
						position="bottom right"
						:speed="600"
						animation-type="velocity">
		</notifications>
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
						<form @submit.prevent="submit('reg')">
							<div class="fieldContainer">
								<label class="labelFields" for="email">E-mail</label>
								<input class="authFields" type="email" name="" id="email" v-model.lazy="model.email">
							</div>
							<div class="fieldContainer">
								<label class="labelFields" for="password">Password</label>
								<input class="authFields" type="password" name="" id="password" v-model.lazy="model.password">
							</div>
							<div class="fieldContainer">
								<label class="labelFields" for="password">Repeat your password</label>
								<input class="authFields" type="password" name="" id="passwordRepeat" v-model.lazy="model.repassword">
							</div>
							<div class="authBtnContainer">
								<button class="authBtn" type="submit">Sign up</button>
							</div>
						<!-- <button class="authSocButton"> some text here</button> -->
						</form>
						
					</div>
				</transition>
				<transition :duration="{ enter: 200, leave: 100 }" name="component-fade">
					<div class="authForm" v-show="showLogForm">
						<form @submit.prevent="submit()">
							<div class="fieldContainer">
								<label class="labelFields" for="email">E-mail</label>
								<input class="authFields" type="email" name="" id="emaillog" v-model.lazy="model.email">
							</div>
							<div class="fieldContainer">
								<label class="labelFields" for="password">Password</label>
								<input class="authFields" type="password" name="" id="passwordlog" v-model.lazy="model.password">
							</div>
							<div class="authBtnContainer">
								<button class="authBtn" type="submit">Login</button>
							</div>
						<!-- <button class="authSocButton"> some text here</button> -->
						</form>
						
					</div>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import valid from '../system/validators'

export default {
	data(){
		return {
			showSignForm: true,
			showLogForm: false,
			model:{
				email:'',
				password: '',
				repassword: '',
			}
		}
	},
	methods:{
		...mapActions(['auth']),
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
		},
		submit(key){
			let validObj = valid(this.model, key);
			if(validObj.isValid){
				this.auth(this.model)
				console.log(validObj.isValid)
			} else {
				let group = 'auth-notification'
				let errors = validObj.errors;
				// let animation = {
				// 	enter (element) {
				// 		 /*
				// 		  *  "element" - is a notification element
				// 		  *    (before animation, meaning that you can take it's initial height, width, color, etc)
				// 		  */
				// 		let height = element.clientHeight
				// 		return {
				// 			   // Animates from 0px to "height"
				// 			height: [height, 0],
				// 			   // Animates from 0 to random opacity (in range between 0.5 and 1)
				// 			opacity: [Math.random() * 0.5 + 0.5, 0]
				// 			}
				// 		},
				// 	leave: {
				// 		height: 0,
				// 		opacity: 0
				// 	}
				// }
				if(validObj.errors != null){
					for(let err in errors){
						this.$notify({group,
							type: 'error',
							title: 'Important message',
							text: errors[err],
						});
					}
				}
			}
		}
	}
}

</script>

<style lang="stylus" scoped>
@import '../style/auth'

</style>