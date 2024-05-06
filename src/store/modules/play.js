export default {
  namespaced: true,
  state() {
    return {
      answers: []
    }
  },
  mutations: {
    selectAnswer(state, payload) {
      state.answers.push(payload)
    },
    unselectAnswer(state, payload) {
      let index = state.answers.indexOf(payload)
      state.answers.splice(index, 1)
    }
  },
  actions: {
    selectAnswer(context, payload) {
      context.commit('selectAnswer', payload)
    },
    unselectAnswer(context, payload) {
      context.commit('unselectAnswer', payload)
    }
  },
  getters: {
    answers(state) {
      return state.answers
    }
  }
}
