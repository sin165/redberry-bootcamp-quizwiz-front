export default {
  namespaced: true,
  state() {
    return {
      categories: []
    }
  },
  mutations: {
    setCategories(state, payload) {
      state.categories = payload
    }
  },
  actions: {
    setCategories(context, payload) {
      context.commit('setCategories', payload)
    }
  },
  getters: {
    categories(state) {
      return state.categories
    }
  }
}
