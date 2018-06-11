'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
	NODE_ENV: '"development"',
	BASE_URL: '"http://dev.kofuf.com"',
	APPID: '"wx0a542ef9d4d41cef"'
})
