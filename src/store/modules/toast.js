export default {
  namespaced: true,
  state() {
    return {
      visible: false,
      type: '',
      title: '',
      message: ''
    }
  },
  mutations: {
    showToast(state, payload) {
      state.type = payload.type
      state.title = payload.title
      state.message = payload.message
      state.visible = true
    },
    hideToast(state) {
      state.visible = false
    }
  },
  actions: {
    display(context, payload) {
      context.commit('showToast', payload)
      setTimeout(() => {
        context.commit('hideToast')
      }, 8000)
    }
  },
  getters: {
    visible(state) {
      return state.visible
    },
    type(state) {
      return state.type
    },
    title(state) {
      return state.title
    },
    message(state) {
      return state.message
    }
  }
}
