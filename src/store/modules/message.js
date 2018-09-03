const funds = {
  state: {
    detail: {}
  },
  mutations: {
    SET_MESSAGE: (state, data) => {
      state.detail = data
    }
  },
  actions: {
		message: ({ commit }, detail) => {
      commit('SET_MESSAGE', detail)
    }
  }
}

export default funds
