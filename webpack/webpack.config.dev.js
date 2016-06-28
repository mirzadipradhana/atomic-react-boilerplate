'use strict'

var Path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var commonLoaders = [
	{ test: /\.(js|jsx)$/, loader: 'babel-loader', include: Path.join(__dirname, "..", "src") },
	{ test: /\.png$/, loader: 'url-loader' },
	{ test: /\.jpg$/, loader: 'file-loader' },
	{ test: /\.json$/, loader: 'json-loader' },
	{ test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader"), include: Path.join(__dirname, "..", "src/assets") }
];
var extractCSSAsset = new ExtractTextPlugin("stylesheet/global.css");
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
		new Webpack.NoErrorsPlugin(),
		extractCSSAsset
	],
	module: {
		loaders: commonLoaders
	},
	resolve: {
		extension: ['', '.js']
	}
};
