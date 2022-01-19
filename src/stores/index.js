import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      totalLikes: 0,
      username: '',
      password: ''
    }
  },

  mutations: {
    increment(state) {
      state.totalLikes++
    },
    setUsername(state, value) {
      state.username = value
    },
    setPassword(state, value) {
      state.password = value
    }
  }
})