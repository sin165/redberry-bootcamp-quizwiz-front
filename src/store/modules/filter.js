export default {
  namespaced: true,
  state() {
    return {
      changed: false,
      sort: null,
      difficulties: [],
      categories: [],
      status: null
    }
  },
  mutations: {
    setChanged(state, payload) {
      state.changed = payload
    },
    setSort(state, payload) {
      state.sort = payload
    },
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
    setChanged(context, payload) {
      context.commit('setChanged', payload)
    },
    setSort(context, payload) {
      context.commit('setSort', payload)
      context.commit('setChanged', true)
    },
    toggleDifficulty(context, payload) {
      if (context.state.difficulties.includes(payload)) {
        context.commit('removeDifficulty', payload)
      } else {
        context.commit('addDifficulty', payload)
      }
      context.commit('setChanged', true)
    },
    toggleCategory(context, payload) {
      if (context.state.categories.includes(payload)) {
        context.commit('removeCategory', payload)
      } else {
        context.commit('addCategory', payload)
      }
      context.commit('setChanged', true)
    },
    setStatus(context, payload) {
      context.commit('setStatus', payload)
      context.commit('setChanged', true)
    },
    setFromQuery(context, payload) {
      context.commit('setSort', payload.sort)
      context.commit('setDifficulties', payload.difficulties?.split(',').map(Number) ?? [])
      context.commit('setCategories', payload.categories?.split(',').map(Number) ?? [])
      context.commit('setStatus', payload.status)
    },
    reset(context) {
      context.commit('setSort', null)
      context.commit('setDifficulties', [])
      context.commit('setCategories', [])
      context.commit('setStatus', null)
      context.commit('setChanged', true)
    }
  },
  getters: {
    changed(state) {
      return state.changed
    },
    sort(state) {
      return state.sort
    },
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
      if (state.sort) {
        filters.sort = state.sort
      }
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
    },
    empty(state) {
      return !state.sort && !state.difficulties.length && !state.categories.length && !state.status
    }
  }
}
