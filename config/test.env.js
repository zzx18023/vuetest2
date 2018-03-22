'use strict'
const config = require('./index')

module.exports = {
	NODE_ENV: '"test"',
	hostUrl: '"http://120.76.192.13:290"',
	staticUrl: '"http://120.76.192.13:10201"',
	wxConfigsApi: '"http://agent.yuanzhen198.com/Admin/JsSdk/index"',
  	assetsPublicPath: JSON.stringify(config.build_test.assetsPublicPath),
	assetsSubDirectory: JSON.stringify(config.build_test.assetsSubDirectory),
}