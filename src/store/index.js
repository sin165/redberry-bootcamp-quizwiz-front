import { createStore } from 'vuex'
import userModule from './modules/user'
import quizModule from './modules/quiz'
import filterModule from './modules/filter'
import playModule from './modules/play'
import infoModule from './modules/info'
import toastModule from './modules/toast'

const store = createStore({
  modules: {
    user: userModule,
    quiz: quizModule,
    filter: filterModule,
    play: playModule,
    info: infoModule,
    toast: toastModule
  }
})

export default store
