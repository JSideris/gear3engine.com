const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
	entry: './src/index.ts',
	mode: 'production',
	devtool: 'inline-source-map',
	output: {
		path: `${__dirname}/dist`,
		filename: '[name].[contenthash].js',
		// sourceMapFilename: '[name].[hash:8].map',
  		chunkFilename: '[id].[chunkhash].js'
	},
	module: {
		rules: [
			{ 
				test: /\.tsx?$/, loader: "ts-loader" 
			},
			{
				test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/'
						}
					}
				]
			},
			{
				test: /\.(svg|avif|png|jpg)$/,
				use: [
					{
						loader: 'file-loader',
						// options: {
						// 	name: '[name].[ext]',
						// 	outputPath: 'images/'
						// }
					}
				]
			}
		]
	},
	resolve: {
		extensions: [".js", ".ts"],
		alias: {
			dothtml: path.resolve("./node_modules/dothtml")
			// gear3engine: path.resolve(__dirname, "./src/scripts/gear3engine.client.2d"),
			// gear3engine: path.resolve(__dirname, "./src/scripts/gear3engine"),
			// gear3engine: path.resolve(__dirname, "../../../build/gear3engine"),
		},
		fallback: {
			http: false
		}
	},
	plugins: [new HtmlWebpackPlugin({
		title: "Gear3Engine",
		//favicon
	})],
	optimization:{
		splitChunks: {
			chunks: 'all',
			minSize: 0,
			maxSize: 20000,
			// minRemainingSize: 0,
			minChunks: 1,
			// maxAsyncRequests: 30,
			maxInitialRequests: Infinity,
			enforceSizeThreshold: 20000,
			// cacheGroups: {
			// 	defaultVendors: {
			// 		test: /[\\/]node_modules[\\/]/,
			// 		// priority: -10,
			// 		// reuseExistingChunk: true,
			// 		name(module) {
			// 			return `npm.${packageName.replace('@', '')}`;
			// 		}
			// 	},
			// 	default: {
			// 		// minChunks: 2,
			// 		// priority: -20,
			// 		// reuseExistingChunk: true,
			// 	},
			// },
		},
	},
	performance: {
		hints: false,
		maxEntrypointSize: 51200000,
		maxAssetSize: 51200000
	}
	// optimization: {
	//  minimize: true,
	// 	minimizer: [new TerserPlugin()]
	// }

	// resolve:{
		
	// }
};




// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//	 entry: './src/index.ts',
//	 mode: 'development',
//	 output: {
//		 path: `${__dirname}/dist`,
//		 filename: 'main.js',
//	 },
//	 module: {
//		 rules: [
//			 {
//				 use: "ts-loader"
//			 }
//		 ]
//	 },
//	 resolve: {
//		 extensions: [".ts", ".js"]
//	 },
//	 plugins: [new HtmlWebpackPlugin()],
// };