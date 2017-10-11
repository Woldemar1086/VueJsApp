import Validator from 'validator';
import { isEmpty } from 'lodash';


export default (model, key) => {
	const errors = {};

	if(!Validator.isEmail(model.email)){
		errors.email.status = '1';
		errors.email.text = 'Format of your email is not valid';
		//VueNotification.error({message: 'Format of your email is not valid'})
	}
	if(isEmpty(model.password)){
		errors.password.status = '2';
		errors.password.text = 'Write your password';
		//VueNotification.error({message: 'Write your password'})
	}
	if(key === 'reg'){
		if(isEmpty(model.repassword)){
			errors.repassword.status = '3';
			errors.repassword.text = 'Repeate your password';
			//VueNotification.error({message: 'Repeate your password'})
		}
		if(	model.password !== model.repassword ){
			errors.coparePass.status = '4';
			errors.coparePass.text = 'Passwords are not equal';
			//VueNotification.error({message: 'Passwords are not equal'})
		}
	}

	return {
		errors,
		isValid:isEmpty(errors)
	}
}