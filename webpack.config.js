const path = require('path');

module.exports = {
	mode: 'production',
    //* variation 1
	// entry: "./src/index.js",
	// output: {
	//     path: path.resolve(__dirname, "dist"),
	//     filename: "index.js"
	// },
    //* variation 2
	entry: {
		index: './src/index.js',
		RadioButtons: './src/RadioButtons/RadioButtons.js',
		Checkboxes: './src/Checkboxes/Checkboxes.js',
	},
	output: {
		filename: 'main.js',
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
    //* variation 3
	// entry: {
	// 	index: {
	// 		import: './src/index.js',
	// 		dependOn: 'shared',
	// 	},
	// 	RadioButtons: {
	// 		import: './src/RadioButtons/RadioButtons.js',
	// 		dependOn: 'shared',
	// 	},
	// 	Checkboxes: {
	// 		import: './src/Checkboxes/Checkboxes.js',
	// 		dependOn: 'shared',
	// 	},
	// 	shared: 'lodash',
	// },

	// output: {
	// 	filename: '[name].bundle.js',
	// 	path: path.resolve(__dirname, 'dist'),
	// },
	// shared: 'lodash',

	module: {
		rules: [
			{
				test: /\.svg$/,
				use: 'svg-inline-loader',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(js)$/,
				use: 'babel-loader',
			},
		],
	},
};
