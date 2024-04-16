<template>
  <LayoutsMain>
    <div class="mx-4 mt-5 mb-12 desktop:mx-24 desktop:mt-6 desktop:mb-18">
      <div class="flex flex-col gap-4 justify-between desktop:flex-row">
        <QuizListingCategoriesBar :categories="categories" />
        <QuizListingFilter />
      </div>
      <main></main>
    </div>
  </LayoutsMain>
</template>

<script>
import LayoutsMain from '@/layouts/LayoutsMain.vue'
import QuizListingFilter from '@/components/quiz-listing/QuizListingFilter.vue'
import QuizListingCategoriesBar from '@/components/quiz-listing/QuizListingCategoriesBar.vue'
import { getCategories } from '@/services/api/quiz'

export default {
  components: {
    LayoutsMain,
    QuizListingFilter,
    QuizListingCategoriesBar
  },
  computed: {
    categories() {
      return this.$store.getters['quiz/categories']
    }
  },
  created() {
    this.fetchCategories()
  },
  methods: {
    async fetchCategories() {
      const { status, data } = await getCategories()
      if (status === 200) {
        this.$store.dispatch('quiz/setCategories', data)
      }
    }
  }
}
</script>
