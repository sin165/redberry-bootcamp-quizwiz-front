export default {
  namespaced: true,
  state() {
    return {
      quizCount: 0,
      categoryCount: 0
    }
  },
  mutations: {
    setQuizCount(state, payload) {
      state.quizCount = payload
    },
    setCategoryCount(state, payload) {
      state.categoryCount = payload
    }
  },
  actions: {
    setQuizCount(context, payload) {
      context.commit('setQuizCount', payload)
    },
    setCategoryCount(context, payload) {
      context.commit('setCategoryCount', payload)
    }
  },
  getters: {
    quizCount(state) {
      return state.quizCount
    },
    categoryCount(state) {
      return state.categoryCount
    }
  }
}
