'use strict'

var Path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Webpack = require('webpack');

var commonLoaders = [
	{ test: /\.(js|jsx)$/, loader: 'babel-loader', include: Path.join(__dirname, "..", "src") },
	{ test: /\.png$/, loader: 'url-loader' },
	{ test: /\.jpg$/, loader: 'file-loader' },
	{ test: /\.json$/, loader: 'json-loader' }
];
var publicPath = '/server';

module.exports = {
	entry: Path.join(__dirname, '..', 'src/main.js'),
	devtool: 'eval-source-map',
	output: {
		path: Path.join(__dirname, '..', 'dist/server/'),
		filename: 'bundle.js',
		publicPath: publicPath
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: Path.join(__dirname, '..', 'server/templates/index.tpl.html'),
			inject: 'body',
			filename: 'index.html'
		}),
		new Webpack.optimize.OccurenceOrderPlugin(),
		new Webpack.NoErrorsPlugin()
	],
	module: {
		loaders: commonLoaders.concat([
			{ test: /\.css$/, loader: "style-loader!css-loader" },
		])
	},
	resolve: {
		extension: ['', '.js']
	}
};
