import Vue from 'vue'
import Vuex from 'vuex'
import message from './modules/message'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    message
  },
  getters
})

export default store
