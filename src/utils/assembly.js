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
export function shareData(name = '功夫财经', href = 'https://m.kofuf.com/m/home.html', share_thumb = 'https://m.kofuf.com/static/img_h5/h5_logo.png', brief = '国民财商提升者') {
	window.shareData = {
		title: name,
		link: href,
		imgUrl: share_thumb,
		desc: brief
	}
	return
}
