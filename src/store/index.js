import { createStore } from 'vuex'
import userModule from './modules/user'
import quizModule from './modules/quiz'
import filterModule from './modules/filter'
import toastModule from './modules/toast'

const store = createStore({
  modules: {
    user: userModule,
    quiz: quizModule,
    filter: filterModule,
    toast: toastModule
  }
})

export default store
