import Cookies from 'js-cookie'
import Vue from 'vue'
import { isAndroid, isiOS, isWeiXin } from '@/utils/assembly'

const Name = 'Admin-Name'

export function setName(name) {
	return Cookies.set(Name, name)
}

export function removeName() {
	return Cookies.remove(Name)
}

export function getName() {
	return Cookies.get(Name)
}

export function getToken() {
	return localStorage.getItem('token')
}

export function setToken(token) {
	return localStorage.setItem('token', token)
}

export function getGid() {
	return localStorage.getItem('gid') * 1 ? localStorage.getItem('gid') : ''
}

export function setGid(gid) {
	return localStorage.setItem('gid', gid)
}

export function getFrom() {
	return localStorage.getItem('from')
}

export function setFrom(from) {
	return localStorage.setItem('from', from)
}

export function removeToken() {
	Cookies.set('token', 0, {
		domain: '.kofuf.com',
		path: '/',
		expires: -1
	})
	return localStorage.setItem('token', '')
}

export function fetchDatePhone(cb, p) {
	getBaseInfo('', '', cb, p)
}

export function getBaseInfo(type = '', id = '', cb = '', p = {}) {
	if (Cookies.get('token')) {
		localStorage.setItem('from', '3')
		localStorage.setItem('gid', Cookies.get('gid'))
		localStorage.setItem('token', Cookies.get('token'))
	}
	if (!cb && localStorage.getItem('token') && localStorage.getItem('token') !== 'undefined') {
		return
	}
	/* 注册函数供app调用 */
	window.getInfo = function(g = '', t = '', f = '', v = '') {
		if (g) {
			localStorage.setItem('gid', g)
			localStorage.setItem('token', t)
			localStorage.setItem('from', f)
			localStorage.setItem('ios_version', v)
		}
		// alert('获取授权成功')
		cb ? cb() : ''
		if (v < '2.6.0') {
			Vue.$vux.toast.text('请升级APP至最新版')
			return false
		}
		if (!g) {
			Vue.$vux.toast.text('请登陆')
			return false
		}
	}
	/* 在800毫秒内没有授权成功，则直接请求数据 */
	window.getFeach = function() {
		setTimeout(() => {
			if (!localStorage.getItem('gid') || localStorage.getItem('gid') === 'undefined') {
				cb ? cb() : ''
			}
		}, 800)
	}
	if (isWeiXin()) {
		var params
		id ? params = type + '_' + id : params = type
		params = params.replace(/\#/g, '%23')
		window.location.href = 'http://open.weixin.qq.com/connect/oauth2/authorize?appid=' + process.env.APPID + '&redirect_uri=' + process.env.BASE_URL + '%2Fapi%2Fsession%2Fauth_weixin&response_type=code&scope=snsapi_userinfo&state=' + params + '#wechat_redirect'
	} else if (isAndroid()) {
		window.getFeach()
		var app = window.app
		if (app) {
			// alert('调android的getUserInfo授权')
			if (app.getUserInfo) {
				app.getUserInfo()
			}
		}
	} else if (isiOS()) {
		window.getFeach()
		if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.getUserInfo) {
			window.webkit.messageHandlers.getUserInfo.postMessage(null)
		}
	} else {
		Vue.$vux.toast.text('请在微信中打开')
	}
}
