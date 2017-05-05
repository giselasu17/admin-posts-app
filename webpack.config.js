var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/src/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: "index_bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: path.join(__dirname, '/src'),
				exclude: /node_modules/, 
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
			 	loader: "style-loader!css-loader"
			}
		]
	},
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    },
	plugins: [HtmlWebpackPluginConfig]
}