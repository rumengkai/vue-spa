'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
	NODE_ENV: '"production"',
	BASE_URL: '"http://dev.kofuf.com"',
	APPID: '"wx0a542ef9d4d41cef"'
})
