export default {
  namespaced: true,
  state() {
    return {
      username: null,
      email: null
    }
  },
  mutations: {
    setUser(state, payload) {
      state.username = payload.username
      state.email = payload.email
    }
  },
  actions: {
    set(context, payload) {
      context.commit('setUser', payload)
    }
  },
  getters: {
    username(state) {
      return state.username
    },
    email(state) {
      return state.email
    }
  }
}
