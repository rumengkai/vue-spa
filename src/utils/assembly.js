import Vue from 'vue'

export function message(content, title = '提示', callback) {
	Vue.$vux.alert.show({
		title: title,
		content: content,
		dialogTransition: '',
		maskTransition: '',
		onHide() {
			typeof callback === 'function' && callback()
		}
	})
}

export function toast(content, time = 5000, position = 'bottom') {
	Vue.$vux.toast.show({
		text: content,
		time: time,
		width: 'auto',
		type: 'text',
		position: position
	})
}

export function stringBr(str) {
	return str.replace(/\n/g, '<br/>').replace(/\t/g, '&nbsp;')
}

export function isAndroid() {
	var u = navigator.userAgent
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // android终端
	if (isAndroid) {
		return true
	} else {
		return false
	}
}

export function isiOS() {
	var u = navigator.userAgent
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
	if (isiOS) {
		return true
	} else {
		return false
	}
}

export function isMobile() {
	var u = navigator.userAgent
	var mobile = !!u.match(/AppleWebKit.*Mobile.*/) // ios终端
	if (mobile) {
		return true
	} else {
		return false
	}
}

export function isWeiXin() {
	var ua = window.navigator.userAgent.toLowerCase()
	if (ua.match(/MicroMessenger/i)[0] === 'micromessenger') {
		return true
	} else {
		return false
	}
}

export function setLocalStorage(key, value) {
	var curTime = new Date().getTime()
	localStorage.setItem(key, JSON.stringify({ 'data': value, 'time': curTime }))
}

export function getLocalStorage(key, exp) {
	var data = localStorage.getItem(key)
	var dataObj = JSON.parse(data)
	if (dataObj) {
			if (!!exp && (new Date().getTime()) - dataObj.time * 1 > exp) {
					return false	// 信息过期
			} else {
					return dataObj
			}
	} else {
			return false	// 不存在
	}
}
