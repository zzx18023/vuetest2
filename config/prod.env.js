'use strict'
const config = require('./index')
module.exports = {
	NODE_ENV: '"production"',
	hostUrl: '"http://120.79.172.136:90"',
	staticUrl: '"http://120.79.172.136:10201"',
	wxConfigsApi: '"http://agent.yuanzhen198.com/Admin/JsSdk/index"',
	assetsPublicPath: JSON.stringify(config.build_prod.assetsPublicPath),
	assetsSubDirectory: JSON.stringify(config.build_prod.assetsSubDirectory),
}
