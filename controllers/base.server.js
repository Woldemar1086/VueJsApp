import url from 'url'

const dBase = {};

if(process.env.NODE_ENV === 'production'){
	const params = url.parse(process.env.DATABASE_URL);
	const auth = params.auth.split(':');
	dBase.user = auth[0];
	dBase.password = auth[1];
	dBase.host = params.hostname;
	dBase.port = params.port;
	dBase.database = params.pathname.split('/')[1];
}

if (process.env.NODE_ENV === 'production') {
	const dBaseDev = require('./heroku.dev.js');
	dBase.user =  dBaseDev.user;
	dBase.password = dBaseDev.password;
	dBase.host = dBaseDev.host;
	dBase.port = dBaseDev.port;
	dBase.database =  dBaseDev.database;
}

export default dBase;