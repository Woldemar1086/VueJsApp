const path =require('path');
const webpack = require('webpack');
const compressionPlugin = require('compression-webpack-plugin');

module.exports = {
	entry:[
		path.join(__dirname, '/src/app.js'),
		'webpack-hot-moddleware/client'
	],
	output:{
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'build.js'
	},
	module:{
		rules:[
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options:{
					loaders:{

					}
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.jdon$/,
				loader: 'json-loader',
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options:{
					limit: 10000,
					name:'[name].[ext]?[hash]',
				}
			}
		]
	},
	resolve:{
		alias:{
			'vue$':'vue/dist/vue.esm.js'
		}
	},
	performance:{
		hints: false
	},
	devtool: '#eval-source-map',
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			beautify: false,
			comments: false,
			compress: {
				sequenses: true,
				booleans: true,
				loops: true,
				unused: true,
				warnings:false,
				drop_console:true,
				unsafe:true,
			}
		}),
		new compressionPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.(js|css|html|svg|png)$/,
			threshold: 10240,
			minRatio:0.8,
		})
	]
}