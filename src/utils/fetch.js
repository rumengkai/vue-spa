import axios from 'axios'
import { getToken, getGid, getFrom } from '@/utils/auth'
import Qs from 'qs'
// import { toast } from '@/utils/assembly' 创建axios实例
const service = axios.create({
		baseURL: process.env.BASE_URL, // api的base_url
		timeout: 15000, // 请求超时时间
		transformRequest: [data => {
			data = Qs.stringify(data)
			return data
		}],
		headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
		}
})
// request拦截器
service.interceptors.request.use(config => {
		config.headers['token'] = getToken()
		config.headers['gid'] = getGid()
		config.headers['from'] = getFrom()
		return config
}, error => {
		// Do something with request error
		console.log(error) // for debug
		Promise.reject(error)
})
// respone拦截器
service.interceptors.response.use(response => {
		const res = response.data
		if (res.status === 0) {
				// 成功
				return res
		} else if (res.status === 4) {
				return res
				// toast(res.error) return Promise.reject({'error':res})
		} else {
				// toast(res.error) if (res.status==5&&res.error=='会话失效，请重新登录') {
				// 	window.clearcookie(cookie) 	// getAuth(cookie, querystring) }
				return res
		}
}, error => {
		console.log('err' + error) // for debug
		// toast(error.message)
		return Promise.reject(error)
})
const feachData = r => {
		if (r.method === 'post') {
				return service.post(r.url, r.params)
		} else {
				return service.get(r.url, { params: r.params })
		}
}
export default feachData
