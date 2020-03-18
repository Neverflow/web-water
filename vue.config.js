module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'assets': '@/assets',
				'common': '@/common',
				'components': '@/components',
				'network': '@/network',
			}
		}
	},

	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'less',
			patterns: []
		}
	},
	devServer: {
		open: true,
		proxy: {
			//配置跨域
			'/api': {
				target: "http://localhost:4000",
				ws: true,
				changOrigin: true,
				pathRewrite: {
					'^/api': '/'
				}
			}
		}

	}
}