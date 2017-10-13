import validators from '../../src/system/validators.js';


const key = 'reg';

const model = [
// 0
	{
		email:'email@email.ru',
		password:'12345678',
		repassword:'12345678'
	},
	// 1
	{
		email:'email@email.ru',
		password:'',
		repassword:'12345678'
	},
	// 2
	{
		email:'email@email.ru',
		password:'',
		repassword:''
	},
	// 3
	{
		email:'email@email.ru',
		password:'12345678',
		repassword:''
	},
	// 4
	{
		email:'',
		password:'12345678',
		repassword:'12345678'
	},
	// 5
	{
		email:'emai===!!!@e#^$&.ru',
		password:'12345678',
		repassword:'12345678'
	},
	// 6
	{
		email:'email@email.ru',
		password:'12345678',
		repassword:'87654321'
	},
	// 7
	{
		email:'email@email.ru',
		password:'12345',
		repassword:'12345'
	}
];

describe('Checking modul validators:', () => {

// For login

	it('Auth succesful',() => {
		expect(validators(model[0]).isValid).toBe(true)
		expect(validators(model[0]).errors).toBe('')
	});

	it('Missed password',() => {
		expect(validators(model[1]).isValid).toBe(false)
		expect(validators(model[1]).errors).toBe('Write your password')
	});

	it('Missed password and repassword',() => {
		expect(validators(model[2]).isValid).toBe(false)
		expect(validators(model[2]).errors).toBe('Write your password')
	});

	it('Not valid email',() => {
		expect(validators(model[5]).isValid).toBe(false)
		expect(validators(model[5]).errors).toBe('Format of your email is not valid')
	});

// For registration

	it('Not valid email',() => {
		expect(validators(model[5], key).isValid).toBe(false)
		expect(validators(model[5], key).errors).toBe('Format of your email is not valid')
	});

	it('Missed repassword',() => {
		expect(validators(model[3], key).isValid).toBe(false)
		expect(validators(model[3], key).errors).toBe('Passwords are not equal')
	});

	it('Passwords are not equal',() => {
		expect(validators(model[6], key).isValid).toBe(false)
		expect(validators(model[6], key).errors).toBe('Passwords are not equal')
	});

	it('Password too short',() => {
		expect(validators(model[7], key).isValid).toBe(false)
		expect(validators(model[7], key).errors).toBe('Your password is too short. It should be longer than 8 symbols.')
	});
})