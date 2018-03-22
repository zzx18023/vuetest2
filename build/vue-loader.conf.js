'use strict'
const utils = require('./utils')
const config = require('../config')
const isBuild = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test';
const sourceMapEnabled = (function(NODE_ENV) {
	switch(NODE_ENV) {
		case 'production':
			return config.build_prod.productionSourceMap;
		case 'test':
			return config.build_test.productionSourceMap;
		default:
			return config.dev.cssSourceMap;
	};
})(process.env.NODE_ENV);

module.exports = {
	loaders: utils.cssLoaders({
		sourceMap: sourceMapEnabled,
		extract: false, // isBuild
//		usePostCSS: true,
	}),
	cssSourceMap: sourceMapEnabled,
	cacheBusting: config.dev.cacheBusting,
	transformToRequire: {
		video: ['src', 'poster'],
		source: 'src',
		img: 'src',
		image: 'xlink:href'
	},
	cssModules: {
		localIdentName: '[local]_[hash:base64:7]',
		camelCase: true
	},
}
