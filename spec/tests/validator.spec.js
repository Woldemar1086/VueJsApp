import validators from '../../src/system/validators.js';


const key = 'reg';

const model = [
	{
		email:'email@email.ru',
		password:'12345',
		repassword:'12345'
	},
	{
		email:'email@email.ru',
		password:'',
		repassword:'12345'
	},
	{
		email:'',
		password:'12345',
		repassword:'12345'
	},
	{
		email:'emai@e#^$&',
		password:'12345',
		repassword:'54321'
	}
];

describe('Checking modul validators:', () => {
	it('Auth succesful',() => {
		expect(validators(model[0]).isValid).toBe(true)
		expect(validators(model[0]).errors).toBe('')
	});

	it('Missed password',() => {
		expect(validators(model[1]).isValid).toBe(false)
		expect(validators(model[1]).errors).toBe('Write your password')
	});

	it('Missed email',() => {
		expect(validators(model[2]).isValid).toBe(false)
		expect(validators(model[2]).errors).toBe('Format of your email is not valid')
	});
	it('Not valid email',() => {
		expect(validators(model[3]).isValid).toBe(false)
		expect(validators(model[3]).errors).toBe('Format of your email is not valid')
	});
})