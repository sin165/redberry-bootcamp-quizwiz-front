<template>
  <LayoutsMain v-if="!playing">
    <div class="pt-6 px-4.5 desktop:px-24">
      <button class="hidden desktop:flex items-center gap-2 mb-6" @click="$router.go(-1)">
        <IconBack />
        <span class="text-sm font-medium text-custom-gray-500">Back</span>
      </button>
      <div class="flex justify-between gap-10 mb-20">
        <main v-if="quiz" class="relative w-full">
          <QuizInnerInfo :quiz="quiz" @start="playing = true" />
        </main>
        <div class="hidden desktop:block space-y-8 w-98 shrink-0">
          <QuizCard v-for="quiz in similarQuizzes" :key="quiz.id" :quiz="quiz" :withBg="true" />
        </div>
      </div>
    </div>
  </LayoutsMain>
  <QuizInnerPlay v-else :quiz="quiz" @close="playing = false" />
</template>

<script>
import LayoutsMain from '@/layouts/LayoutsMain.vue'
import IconBack from '@/components/icons/IconBack.vue'
import QuizInnerInfo from '@/components/quiz-inner/QuizInnerInfo.vue'
import QuizInnerPlay from '@/components/quiz-inner/QuizInnerPlay.vue'
import QuizCard from '@/components/shared/QuizCard.vue'
import { getQuiz, getQuizzes } from '@/services/api/quiz'

export default {
  components: {
    LayoutsMain,
    IconBack,
    QuizInnerInfo,
    QuizInnerPlay,
    QuizCard
  },
  data() {
    return {
      playing: false,
      quiz: null,
      similarQuizzes: null
    }
  },
  watch: {
    $route() {
      this.quiz = null
      this.similarQuizzes = null
      this.fetchQuiz()
      window.scrollTo(0, 0)
    }
  },
  created() {
    this.fetchQuiz()
  },
  methods: {
    async fetchQuiz() {
      const { status, data } = await getQuiz(this.$route.params.id)
      if (status === 200) {
        this.quiz = data.data
      } else if (status === 500) {
        this.$router.push({ name: 'server-error' })
      }
      this.fetchSimilarQuizzes()
    },
    async fetchSimilarQuizzes() {
      let params = {
        categories: this.quiz.categories.map((category) => category.id),
        status: 'not_completed',
        exclude: this.quiz.id,
        per_page: 3
      }
      const { status, data } = await getQuizzes(params)
      if (status === 200) {
        this.similarQuizzes = data.data
      }
    }
  }
}
</script>
