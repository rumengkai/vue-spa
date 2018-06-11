import Vue from 'vue'

export function toPay(data, success) {
		console.log('发起微信支付')
		if (typeof window.WeixinJSBridge === 'undefined') {
				if (document.addEventListener) {
						document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false)
				} else if (document.attachEvent) {
						document.attachEvent('WeixinJSBridgeReady', onBridgeReady)
						document.attachEvent('onWeixinJSBridgeReady', onBridgeReady)
				}
				Vue.$vux.alert.show({
								title: '提示',
								content: '请稍后再试',
								dialogTransition: '',
								maskTransition: '',
								onShow() {},
								onHide() {}
						})
		} else {
				onBridgeReady(data, success)
		}
}
function onBridgeReady(data, success) {
		//  alert(JSON.stringify(data))
		window.WeixinJSBridge.invoke('getBrandWCPayRequest', {
						'appId': data.app_id, // 公众号名称，由商户传入
						'timeStamp': data.timestamp, // 时间戳，自1970年以来的秒数
						'nonceStr': data.nonce_str, // 随机串
						'package': 'prepay_id=' + data.prepay_id,
						'signType': 'MD5', // 微信签名方式：
						'paySign': data.sign // 微信签名
				}, function(res) {
						if (res.err_msg === 'get_brand_wcpay_request:ok') {
								setTimeout(() => {
										success(data)
								}, 1000)
						} else if (res.err_msg === 'get_brand_wcpay_request:fail') {
								Vue.$vux.alert.show({ title: '', content: '由于跨号支付，请关注“功夫财经”公众号，下载APP购买', dialogTransition: '', maskTransition: '' })
						} else {
								Vue.$vux.alert.show({ title: '', content: '支付取消', dialogTransition: '', maskTransition: '' })
						}
				})
}
