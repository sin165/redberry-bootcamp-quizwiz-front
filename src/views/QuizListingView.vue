<template>
  <LayoutsMain>
    <div class="mx-4 mt-5 mb-12 desktop:mx-24 desktop:mt-6 desktop:mb-18">
      <div class="flex flex-col gap-4 justify-between desktop:flex-row">
        <QuizListingCategoriesBar :categories="categories" @confirm="confirm" />
        <QuizListingFilter @confirm="confirm" />
      </div>
      <main class="mt-12 mb-16">
        <div class="grid grid-cols-1 justify-items-center gap-12 desktop:grid-cols-3 desktop:gap-8">
          <QuizCard v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz" />
        </div>
        <BaseButton
          v-if="nextPage"
          class="mx-auto w-max mt-10"
          color="pale"
          :loading="loading"
          @click="loadMoreQuizzes"
        >
          Load more
        </BaseButton>
      </main>
      <QuizListingSearch @confirm="confirm" />
    </div>
  </LayoutsMain>
</template>

<script>
import LayoutsMain from '@/layouts/LayoutsMain.vue'
import QuizListingFilter from '@/components/quiz-listing/QuizListingFilter.vue'
import QuizListingCategoriesBar from '@/components/quiz-listing/QuizListingCategoriesBar.vue'
import QuizListingSearch from '@/components/quiz-listing/QuizListingSearch.vue'
import QuizCard from '@/components/shared/QuizCard.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { getCategories, getQuizzes } from '@/services/api/quiz'

export default {
  components: {
    LayoutsMain,
    QuizListingFilter,
    QuizListingCategoriesBar,
    QuizListingSearch,
    QuizCard,
    BaseButton
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    categories() {
      return this.$store.getters['quiz/categories']
    },
    quizzes() {
      return this.$store.getters['quiz/quizzes']
    },
    nextPage() {
      return this.$store.getters['quiz/nextPage']
    }
  },
  created() {
    let needsRefresh = false
    if (Object.keys(this.$route.query).length === 0 && !this.$store.getters['filter/empty']) {
      needsRefresh = true
    }
    this.$store.dispatch('filter/setFromQuery', this.$route.query)
    if (!this.$store.getters['quiz/categories'].length) {
      this.fetchCategories()
    }
    if (!this.$store.getters['quiz/quizzes'].length || needsRefresh) {
      this.fetchQuizzes()
    }
  },
  methods: {
    async fetchCategories() {
      const { status, data } = await getCategories()
      if (status === 200) {
        this.$store.dispatch('quiz/setCategories', data)
      }
    },
    async fetchQuizzes() {
      let params = this.$store.getters['filter/all']
      const { status, data } = await getQuizzes(params)
      if (status === 200) {
        this.$store.dispatch('quiz/setQuizzes', data.data)
        this.$store.dispatch('quiz/setNextPage', data.links.next)
      } else if (status === 500) {
        this.$router.push({ name: 'server-error' })
      }
    },
    async loadMoreQuizzes() {
      this.loading = true
      const { status, data } = await getQuizzes(this.nextPage.split('?')[1])
      if (status === 200) {
        this.$store.dispatch('quiz/addQuizzes', data.data)
        this.$store.dispatch('quiz/setNextPage', data.links.next)
      } else if (status === 500) {
        this.$router.push({ name: 'server-error' })
      }
      this.loading = false
    },
    async confirm() {
      const $query = []
      const categories = this.$store.getters['filter/categories'].toString()
      const difficulties = this.$store.getters['filter/difficulties'].toString()
      const status = this.$store.getters['filter/status']
      const sort = this.$store.getters['filter/sort']
      const term = this.$store.getters['filter/term']
      if (categories) {
        $query['categories'] = categories
      }
      if (difficulties) {
        $query['difficulties'] = difficulties
      }
      if (status) {
        $query['status'] = status
      }
      if (sort) {
        $query['sort'] = sort
      }
      if (term) {
        $query['term'] = term
      }
      this.$router.push({
        name: 'quiz-listing',
        query: $query
      })
      this.fetchQuizzes()
      this.$store.dispatch('filter/setChanged', false)
      this.$store.dispatch('filter/updateNumberOfChanges')
      this.$store.dispatch('filter/updateCurrentCategories')
    }
  }
}
</script>
