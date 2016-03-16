module.exports = {
	entry: {
		"langEngine": "./src/index.js",
		"example": "./example/example.js"
	},
	output: {
		path: "dist",
		filename: "[name].js",
		libraryTarget: 'umd',
		library: "[name]"
	},
	externals: {
		"lang-engine": {
			commonjs: 'lang-engine',
			commonjs2: 'lang-engine',
			amd: 'langEngine',
			root: 'langEngine'
		}
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel",
				query: {
					presets: ['es2015']
				}
			}
		]
	}
};