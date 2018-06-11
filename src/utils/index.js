// rem布局，body:font-size初始化
(function initSize(doc) {
	var _w = doc.documentElement.clientWidth || doc.body.clientWidth
	_w = _w > 640 ? 640 : _w
	var _size = _w / 750 * 100
	_size = _size < 60 ? _size : 60
	doc.documentElement.style.fontSize = _size + 'px'
})(document)

// 移除移动端点击延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)
