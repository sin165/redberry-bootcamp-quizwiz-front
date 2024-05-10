export default {
  namespaced: true,
  state() {
    return {
      email: '',
      telephone: '',
      facebook: '',
      linkedin: '',
      quizCount: 0,
      categoryCount: 0
    }
  },
  mutations: {
    setContactInfo(state, payload) {
      state.email = payload.email
      state.telephone = payload.telephone
      state.facebook = payload.facebook
      state.linkedin = payload.linkedin
    },
    setQuizCount(state, payload) {
      state.quizCount = payload
    },
    setCategoryCount(state, payload) {
      state.categoryCount = payload
    }
  },
  actions: {
    setContactInfo(context, payload) {
      context.commit('setContactInfo', payload)
    },
    setQuizCount(context, payload) {
      context.commit('setQuizCount', payload)
    },
    setCategoryCount(context, payload) {
      context.commit('setCategoryCount', payload)
    }
  },
  getters: {
    email(state) {
      return state.email
    },
    telephone(state) {
      return state.telephone
    },
    facebook(state) {
      return state.facebook
    },
    linkedin(state) {
      return state.linkedin
    },
    quizCount(state) {
      return state.quizCount
    },
    categoryCount(state) {
      return state.categoryCount
    }
  }
}
