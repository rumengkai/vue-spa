function pluralize(time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}

export function timeAgo(time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }

  if ((time + '').length === 10) {
    time = +time * 1000
  }

  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    date = new Date(parseInt(time))
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

export function formatTime(time, option) {
  time = +time * 1000
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) { // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分'
  }
}

export function formatTime2(time, option) {
  time = +time * 1000
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return Math.ceil(diff) + '秒'
  } else if (diff < 3600) { // less 1 hour
    return Math.ceil(diff / 60) + '分钟'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时'
  } else if (diff < 3600 * 24 * 2) {
    return '1天'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分'
  }
}

/* 数字 格式化*/
export function nFormatter(num, digits) {
  const si = [
    { value: 1E18, symbol: 'E' },
    { value: 1E15, symbol: 'P' },
    { value: 1E12, symbol: 'T' },
    { value: 1E9, symbol: 'G' },
    { value: 1E6, symbol: 'M' },
    { value: 1E3, symbol: 'k' }
  ]
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value + 0.1).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
    }
  }
  return num.toString()
}

export function html2Text(val) {
  const div = document.createElement('div')
  div.innerHTML = val
  return div.textContent || div.innerText
}

export function toThousandslsFilter(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

export function levelName(num) {
  switch (num) {
		case '-1':
			return '原价'
		case '0':
			return '普通'
		case '1':
			return '堂主'
		case '2':
			return '香主'
		case '3':
			return '少侠'
		case -1:
			return '原价'
		case 0:
			return '普通'
		case 1:
			return '堂主'
		case 2:
			return '香主'
		case 3:
			return '少侠'
		default:
			return '普通'
	}
}

export function attachAction(type) {
  switch (type) {
		case 'blackMember':
			return '被拉黑'
		case 'unblackMember':
			return '移出黑名单'
		case 'addTempMute':
			return '被禁言'
		case 'removeTempMute':
			return '解除禁言'
		case 'kickMember':
			return '踢出聊天室'
		case 'muteRoom':
			return '全体禁言'
		case 'unmuteRoom':
			return '解除禁言'
		case 'memberEnter':
			return '进入聊天室'
		case 'memberExit':
			return '退出聊天室'
	}
}

export function state(type) {
  switch (type) {
		case '0':
			return '未上架'
		case '1':
			return '已上架'
		case '2':
			return '已下架'
		case 0:
			return '未上架'
		case 1:
			return '已上架'
		case 2:
			return '已下架'
	}
}

export function memberType(type) {
  switch (type) {
		case 'owner':
			return '房主'
		case 'manager':
			return '管理员'
		case 'restricted':
			return '被拉黑'
		case 'common':
			return '正常'
		case 'guest':
			return '游客'
	}
}
export function itemType(type) {
  switch (type) {
		case 1:
			return '专栏'
		case 2:
			return '单品'
		case 3:
			return '商品'
		case 4:
			return '书籍'
		case 5:
			return '学者书籍'
		case 6:
			return '书单'
		case 7:
			return '学者书单'
		case 8:
			return '直播'
		case 9:
			return '线下活动'
		case '1':
			return '专栏'
		case '2':
			return '单品'
		case '3':
			return '商品'
		case '4':
			return '书籍'
		case '5':
			return '学者书籍'
		case '6':
			return '书单'
		case '7':
			return '学者书单'
		case '8':
			return '直播'
		case '9':
			return '线下活动'
		case '20':
			return '会员'
	}
}
