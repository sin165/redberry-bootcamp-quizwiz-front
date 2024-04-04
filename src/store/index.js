import { createStore } from 'vuex'
import userModule from './modules/user'
import toastModule from './modules/toast'

const store = createStore({
  modules: {
    user: userModule,
    toast: toastModule
  }
})

export default store
