'use strict'
const merge = require('webpack-merge')
const Env = require('./test.env');
//const Env = require('./prod.env');
const config = require('./index')

module.exports = merge(Env, {
  NODE_ENV: '"development"',
  assetsPublicPath: JSON.stringify(config.dev.assetsPublicPath),
	assetsSubDirectory: JSON.stringify(config.dev.assetsSubDirectory),
})
