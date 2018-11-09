import fetch from '@/utils/fetch'

/* 获取数据 */
export function getData(params) {
	return fetch({
		url: '/api/index2.json',
		method: 'get',
		params
	})
}
/* 提交数据 */
export function postData(params) {
	return fetch({
		url: '/api/index2.json',
		method: 'post',
		params
	})
}
