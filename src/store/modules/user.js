export default {
  namespaced: true,
  state() {
    return {
      username: null,
      email: null,
      avatar: null
    }
  },
  mutations: {
    setUser(state, payload) {
      state.username = payload.username
      state.email = payload.email
      state.avatar = payload.avatar
    },
    unsetUser(state) {
      state.username = null
      state.email = null
      state.avatar = null
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
    },
    avatar(state) {
      return state.avatar
    }
  }
}
