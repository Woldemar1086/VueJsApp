import express from 'express';
import debug from 'debug';

const auth = express.Router();
const debugServer = debug('server:auth');

auth.post('/',(req,res)=>{
	const { email, password } = req.body;
	debugServer(email, password);
});

export default auth;