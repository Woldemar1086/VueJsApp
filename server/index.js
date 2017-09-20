import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import webpackmodule from '../controllers/devOptions'
import debug from 'debug'


const debugServer = debug('server:app')
const port = process.env.PORT || 3000
const app = express();


app.use(bodyParser.json());
app.use('/dist', express.static('dist'));

webpackmodule(app);

app.get('/*', (req,res)=> {
	res.sendFile(path.join(__dirname, '../index.html'))
})

app.listen(port, () => debugServer('Server listen on port=', port,'ENV=',process.env.NODE_ENV));


