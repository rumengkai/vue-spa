import fetch from '@/utils/fetch'

/* 获取数据 */
export function getDate(params) {
	return fetch({
		url: '/api/index2.json',
		method: 'post',
		params
	})
}
