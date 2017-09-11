var path = require('path');
var webpack = require('webpack');
var LiveReloadPlugin = require('webpack-livereload-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

var outputDir = __dirname + '/target/classes/static';

// package.json
// cp src/main/frontend/index.html dist/index.html &&

// Plugin necessario para hotdeploy caso pretenda usar somente o frontend
// new LiveReloadPlugin()

module.exports = {
	entry : './src/main/frontend/js/app.js',
	devtool : 'sourcemaps',
	cache : false,
	output : {
		path : outputDir + '/js',
		filename : 'bundle.js',
		publicPath : 'js/'
	},
	plugins : [ new webpack.HotModuleReplacementPlugin(),
			new HtmlWebpackPlugin({
				filename : outputDir + '/index.html'
			}), new ScriptExtHtmlWebpackPlugin({
				defaultAttribute : 'defer'
			}) ],
	module : {
		loaders : [ {
			test : path.join(__dirname, '.'),
			exclude : /(node_modules)/,
			loader : 'babel-loader',
			query : {
				cacheDirectory : false,
				presets : [ 'es2015', 'react' ]
			}
		} ]
	},
	devServer : {
		contentBase : './src/main/frontend',
		hot : true,
		inline : true,
	}
};