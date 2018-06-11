/* 全局注册组件 */
import Vue from 'vue'
import {
	ToastPlugin,
	AlertPlugin,
	LoadingPlugin
} from 'vux'

Vue.use(ToastPlugin, { position: 'bottom' })
Vue.use(LoadingPlugin)
Vue.use(AlertPlugin)
