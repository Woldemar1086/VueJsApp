import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import webpackmodule from '../controllers/devOptions';
import debug from 'debug';
import auth from './routes/auth'
import morgan from 'morgan'
import session from 'express-session';
import connectSessionKnex from 'connect-session-knex';
import db from '../controllers/knexDev';


const sessionStore = connectSessionKnex(session);
const store = new sessionStore({
	knex: db,
	tableName: 'sessions',
});

const debugServer = debug('server:app');
const port = process.env.PORT || 4000;
const app = express();


app.use(bodyParser.json());
app.use(morgan('dev'))
app.use('/dist', express.static('dist'));
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true,
	store: store,
}))

webpackmodule(app);

app.use('/api/auth', auth)

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(port, () => debugServer('Server listen on port=', port, 'ENV=', process.env.NODE_ENV));