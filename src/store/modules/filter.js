export default {
  namespaced: true,
  state() {
    return {
      difficulties: [],
      categories: [],
      status: null
    }
  },
  mutations: {
    addDifficulty(state, payload) {
      state.difficulties.push(payload)
    },
    removeDifficulty(state, payload) {
      let index = state.difficulties.indexOf(payload)
      state.difficulties.splice(index, 1)
    },
    setDifficulties(state, payload) {
      state.difficulties = payload
    },
    addCategory(state, payload) {
      state.categories.push(payload)
    },
    removeCategory(state, payload) {
      let index = state.categories.indexOf(payload)
      state.categories.splice(index, 1)
    },
    setCategories(state, payload) {
      state.categories = payload
    },
    setStatus(state, payload) {
      state.status = payload
    }
  },
  actions: {
    toggleDifficulty(context, payload) {
      if (context.state.difficulties.includes(payload)) {
        context.commit('removeDifficulty', payload)
      } else {
        context.commit('addDifficulty', payload)
      }
    },
    toggleCategory(context, payload) {
      if (context.state.categories.includes(payload)) {
        context.commit('removeCategory', payload)
      } else {
        context.commit('addCategory', payload)
      }
    },
    setStatus(context, payload) {
      context.commit('setStatus', payload)
    },
    setFromQuery(context, payload) {
      context.commit('setDifficulties', payload.difficulties?.split(',').map(Number) ?? [])
      context.commit('setCategories', payload.categories?.split(',').map(Number) ?? [])
      context.commit('setStatus', payload.status)
    },
    reset(context) {
      context.commit('setDifficulties', [])
      context.commit('setCategories', [])
      context.commit('setStatus', null)
    }
  },
  getters: {
    difficulties(state) {
      return state.difficulties
    },
    categories(state) {
      return state.categories
    },
    status(state) {
      return state.status
    },
    all(state) {
      let filters = {}
      if (state.difficulties.length) {
        filters.difficulties = state.difficulties.toString()
      }
      if (state.categories.length) {
        filters.categories = state.categories.toString()
      }
      if (state.status) {
        filters.status = state.status
      }
      return filters
    }
  }
}
