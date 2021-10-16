const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, '/dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
				use: 'url-loader?limit=100000' 
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html' }),
	],
	resolve: {  
		modules: [
			path.resolve(__dirname, './src'), 'node_modules'],  
		extensions: ['.js', '.jsx', '.json'],  
		alias: { 
			src: path.resolve(__dirname, './src')  
		}
	},
};