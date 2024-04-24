export default {
  namespaced: true,
  state() {
    return {
      difficulties: [],
      categories: [],
      quizzes: [],
      nextPage: null
    }
  },
  mutations: {
    setDifficulties(state, payload) {
      state.difficulties = payload
    },
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
    setDifficulties(context, payload) {
      context.commit('setDifficulties', payload)
    },
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
    difficulties(state) {
      return state.difficulties
    },
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
