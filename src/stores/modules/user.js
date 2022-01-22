export default {
  namespaced: true,
  state: {
    username: '',
    password: '',
    credential: {}
  },
  mutations: {
    setUsername(state, value) {
      state.username = value
    },
    setPassword(state, value) {
      state.password = value
    },
    setCredential(state, payload) {
      state.credential = payload
    }
  },
  actions: {
    async getCredential({ commit }) {
      const response = await fetch('https://randomuser.me/api')
      const { results } = await response.json()

      commit('setCredential', results[0])
    }
  }
}