export default {
  namespaced: true,
  state() {
    return {
      categories: [],
      quizzes: [],
      nextPage: null
    }
  },
  mutations: {
    setCategories(state, payload) {
      state.categories = payload
    },
    setQuizzes(state, payload) {
      state.quizzes = payload
    },
    addQuizzes(state, payload) {
      state.quizzes = state.quizzes.concat(payload)
    },
    setNextPage(state, payload) {
      state.nextPage = payload
    }
  },
  actions: {
    setCategories(context, payload) {
      context.commit('setCategories', payload)
    },
    setQuizzes(context, payload) {
      context.commit('setQuizzes', payload)
    },
    addQuizzes(context, payload) {
      context.commit('addQuizzes', payload)
    },
    setNextPage(context, payload) {
      context.commit('setNextPage', payload)
    }
  },
  getters: {
    categories(state) {
      return state.categories
    },
    quizzes(state) {
      return state.quizzes
    },
    nextPage(state) {
      return state.nextPage
    }
  }
}
