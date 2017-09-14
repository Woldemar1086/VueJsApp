import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import historyApi from 'connect-history-api-fallback'

import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpacHotkMiddleware from 'webpack-hot-middleware'
import devConfig from '../webpack.dev.config'



const port = process.env.PORT || 3000
const app = express();


app.use(historyApi());
app.use(bodyParser.json());
app.use('/dist', express.static('dist'));

if(process.env.NODE_ENV === 'development'){
		const compiler = webpack(devConfig);
		app.use(webpackMiddleware(compiler,{
			hot: true,
			publicPath: devConfig.output.publicPath,
			noInfo: true
		}));
		app.use(webpacHotkMiddleware(compiler));
}

app.get('/*', (req,res)=> {
	res.sendFile(path.join(__dirname, '../index.html'))
})

app.listen(port, () => console.log('Server listen on port=', port,'ENV=',process.env.NODE_ENV));


