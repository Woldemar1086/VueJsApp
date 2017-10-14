import dBase from './base.server';
import knex from 'knex';
import herokuDev from './heroku.dev'

const knexConfig = {
	client:'pg',
	connection: {
		user: herokuDev.user,
		password: herokuDev.password,
		host: herokuDev.host,
		port: herokuDev.port,
		database: herokuDev.database,
		ssl: true,
		max: 100
	},
	pool: {
		min: 2,
		max: 10
	}
}

export default knex(knexConfig);