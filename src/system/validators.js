import Validator from 'validator';
import { isEmpty } from 'lodash';
import VueNotifications from 'vue-notifications'


export default (model, key) => {
	const errors = {};

	if(!Validator.isEmail(model.email)){
		errors.email = true;
		VueNotifications.error({message: 'Format of your email is not valid'})
	}
	if(isEmpty(model.password)){
		errors.password = true;
		VueNotifications.error({message: 'Write your password'})
	}
	if(key === 'reg'){
		if(isEmpty(model.repassword)){
			errors.repassword = true;
			VueNotifications.error({message: 'Repeate your password'})
		}
		if(	model.password !== model.repassword ){
			errors.coparePass = true;
			VueNotifications.error({message: 'Passwords are not equal'})
		}
	}

	return {
		errors,
		isValid:isEmpty(errors)
	}
}