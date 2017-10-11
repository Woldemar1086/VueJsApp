import Validator from 'validator';
import { isEmpty } from 'lodash';


export default (model, key) => {
	let errors = '';

	if(!Validator.isEmail(model.email)){
		errors = 'Format of your email is not valid';
		//VueNotification.error({message: 'Format of your email is not valid'})
	}
	if(isEmpty(model.password)){
		errors = 'Write your password';
		//VueNotification.error({message: 'Write your password'})
	}
	if(key === 'reg'){
		if(isEmpty(model.repassword)){
			errors = 'Repeate your password';
			//VueNotification.error({message: 'Repeate your password'})
		}
		if(	model.password !== model.repassword ){
			errors = 'Passwords are not equal';
			//VueNotification.error({message: 'Passwords are not equal'})
		}
	}
	console.log(errors)

	return {
		errors,
		isValid:isEmpty(errors)
	}
}