// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './vux'
import '@/utils/index'
import '@/styles/index.scss'

import * as filters from './filters' // global filter

// register global utility filters.
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
})

// 授权，存gid和token
import { getBaseInfo } from './utils/auth'
getBaseInfo(location.pathname + '%3Ftype=n' + location.hash)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
