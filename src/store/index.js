import { createStore } from 'vuex'
import userModule from './modules/user'
import quizModule from './modules/quiz'
import toastModule from './modules/toast'

const store = createStore({
  modules: {
    user: userModule,
    quiz: quizModule,
    toast: toastModule
  }
})

export default store
