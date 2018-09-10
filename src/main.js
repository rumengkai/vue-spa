// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

import './vux'
import '@/utils/index'
import '@/styles/index.scss'
import * as filters from './filters' // global filter
import { setMetaTitle } from '@/utils/setMetaTitle.js'

// 设置页面title（解决微信中页面切换title不变的问题）
Vue.directive('title', {
  inserted: (el, binding) => {
    setMetaTitle(binding.value)
  }
})

// register global utility filters.
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
	router,
	store,
  components: { App },
  template: '<App/>'
})
