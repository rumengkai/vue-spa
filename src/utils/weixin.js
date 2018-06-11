import fetch from '@/utils/fetch'
import {
  isiOS
} from '@/utils/assembly'

var wx = window.wx

// 设置分享数据
export function shareData(name = '功夫财经', href = 'https://m.kofuf.com/m/home.html', share_thumb = 'https://m.kofuf.com/static/img_h5/h5_logo.png', brief = '国民财商提升者') {
		window.shareData = {
				title: name,
				link: href,
				imgUrl: share_thumb,
				desc: brief,
				type: {
					value: 'link',
					link: ''
				}
		}
		return
}

export function weixinShare(shareData) {
		weixinConfig()
		wx.ready(function(shareData) {
				// 分享到到朋友圈 if (data) shareData=data
				var title = shareData.title
				var link = shareData.link
				var imgUrl = shareData.imgUrl
				var desc = shareData.desc
				wx.onMenuShareTimeline({
						title: title, // 分享标题
						link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						imgUrl: imgUrl, // 分享图标
						success: () => {
								// alert("分享成功") 用户确认分享后执行的回调函数
						},
						cancel: () => {
								// alert("取消分享") 用户取消分享后执行的回调函数
						}
				})
				// 分享到给微信好友
				wx.onMenuShareAppMessage({
						title: title, // 分享标题
						desc: desc, // 分享描述
						link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						imgUrl: imgUrl, // 分享图标
						type: shareData.type.value, // 分享类型,music、video或link，不填默认为link
						dataUrl: shareData.type.link, // 如果type是music或video，则要提供数据链接，默认为空
						success: function() {
								// alert("分享成功") 用户确认分享后执行的回调函数
						},
						cancel: function() {
								// alert("取消分享") 用户取消分享后执行的回调函数
						}
				})
				// 分享到QQ空间
				wx.onMenuShareQZone({
						title: title, // 分享标题
						desc: desc, // 分享描述
						link: link, // 分享链接
						imgUrl: imgUrl, // 分享图标
						success: function() {
								// 用户确认分享后执行的回调函数
						},
						cancel: function() {
								// 用户取消分享后执行的回调函数
						}
				})

				// 分享到QQ
				wx.onMenuShareQQ({
						title: title, // 分享标题
						desc: desc, // 分享描述
						link: link, // 分享链接
						imgUrl: imgUrl, // 分享图标
						success: function() {
								// 用户确认分享后执行的回调函数
						},
						cancel: function() {
								// 用户取消分享后执行的回调函数
						}
				})
		})
}

/* 微信选择图片 */
export function weixinChooseImage(cb) {
	wx.ready(function() {
    // 调起微信 系统相机 拍照
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有 'album', 'camera'
      success: function(res) {
        var localIds = res.localIds // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
        var len = localIds.length
        // typeof cb == "function" && cb(localIds[len-1])
        wx.getLocalImgData({
          localId: localIds[len - 1], // 图片的localID
          success: function(res) {
            var localData = res.localData // localData是图片的base64数据，可以用img标签显示
            if (isiOS()) {
              // localData = localData.replace('jgp', 'jpeg');
            } else {
              localData = 'data:image/jpeg;base64' + localData
            }
            typeof cb === 'function' && cb(localData)
          }
        })
      }
    })
  })
}

function weixinConfig() {
	var url = process.env.BASE_URL + '/api/session/share_weixin_config?url=' + encodeURIComponent(window.location.href.split('#')[0])
	fetch({ url: url, method: 'get', params: {}}).then((res) => {
		wx.config({
			debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，
			// 参数信息会通过log打出，仅在pc端时才会打印。
			appId: res.appId, // 必填，公众号的唯一标识
			timestamp: res.timestamp, // 必填，生成签名的时间戳
			nonceStr: res.nonceStr, // 必填，生成签名的随机串
			signature: res.signature, // 必填，签名，见附录1
			jsApiList: ['checkJsApi', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
		})
	})
}

