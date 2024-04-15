export default {
  namespaced: true,
  state() {
    return {
      categories: []
    }
  },
  mutations: {},
  actions: {},
  getters: {
    categories(state) {
      return state.categories
    }
  }
}
