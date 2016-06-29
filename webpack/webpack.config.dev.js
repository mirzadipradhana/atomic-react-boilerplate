'use strict'

import {PATH} from '../.configs';
import Webpack from 'webpack';

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';

const commonLoaders = [
	{ test: /\.(js|jsx)$/, loader: 'babel-loader', include: PATH.CLIENT_SRC },
	{ test: /\.png$/, loader: 'url-loader' },
	{ test: /\.jpg$/, loader: 'file-loader' },
	{ test: /\.json$/, loader: 'json-loader' },
	{ test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader"), include: PATH.ASSETS },
	{ test: /\.css$/, loader: "style-loader!css-loader?modules&localIdentName=[local]--[hash:base64:4]", exclude: PATH.ASSETS }
];
const extractCSSAsset = new ExtractTextPlugin("stylesheet/global.css");
var publicPath = '/server';

module.exports = {
	entry: PATH.CLIENT_SRC + '/main.js',
	devtool: 'eval-source-map',
	output: {
		path: PATH.WEBPACK_OUTPUT,
		filename: 'bundle.js',
		publicPath: publicPath
	},
	plugins: [
		new ProgressBarPlugin(),
		new HtmlWebpackPlugin({
			template: PATH.TEMPLATES + '/index.tpl.html',
			inject: 'body',
			filename: 'index.html'
		}),
		new Webpack.ProvidePlugin({
			'React': 'react',
			'ReactDOM': 'react-dom',
		}),
		new Webpack.optimize.OccurenceOrderPlugin(),
		new Webpack.NoErrorsPlugin(),
		extractCSSAsset
	],
	module: {
		loaders: commonLoaders
	},
	resolve: {
		extension: ['', '.js', '.jsx']
	}
};
