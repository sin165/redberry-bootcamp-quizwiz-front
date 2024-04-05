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
    },
    unsetUser(state) {
      state.username = null
      state.email = null
    }
  },
  actions: {
    set(context, payload) {
      context.commit('setUser', payload)
    },
    unset(context) {
      context.commit('unsetUser')
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
