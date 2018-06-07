import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export const constantRouterMap = [
		{
				path: '/',
				name: 'HelloWorld',
				component: _import('helloworld/index')
		}, {
				path: '/tpl',
				name: 'tpl',
				component: _import('tpl/index')
		}
]

export default new Router({
		// mode: 'history', //后端支持可开
		base: '',
		scrollBehavior: () => ({ y: 0 }),
		routes: constantRouterMap
})
