import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import PasswordResetView from '@/views/PasswordResetView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ServerErrorView from '@/views/ServerErrorView.vue'
import QuizListingView from '@/views/QuizListingView.vue'
import QuizInnerView from '@/views/QuizInnerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: PasswordResetView
    },
    {
      path: '/quizzes',
      name: 'quiz-listing',
      component: QuizListingView
    },
    {
      path: '/quizzes/:id',
      name: 'quiz-inner',
      component: QuizInnerView
    },
    {
      path: '/server-error',
      name: 'server-error',
      component: ServerErrorView
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    }
  ]
})

export default router
