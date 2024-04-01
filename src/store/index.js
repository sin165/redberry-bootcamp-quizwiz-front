import { createStore } from 'vuex'
import toastModule from './modules/toast'

const store = createStore({
  modules: {
    toast: toastModule
  }
})

export default store
