<template>
  <div class="relative">
    <button
      class="border px-3.5 py-2 rounded-0.5xl text-custom-gray-500 border-custom-gray-500-light flex items-center gap-2"
      @click="open = !open"
    >
      <IconSettingsSlider />
      Filter
    </button>
    <QuizListingFilterModalMobile
      v-if="isMobile && open"
      @close="open = false"
      @confirm="confirm"
    />
    <QuizListingFilterModalDesktop
      v-if="!isMobile && open"
      @close="open = false"
      @confirm="confirm"
    />
  </div>
</template>

<script>
import IconSettingsSlider from '@/components/icons/IconSettingsSlider.vue'
import QuizListingFilterModalDesktop from './QuizListingFilterModalDesktop.vue'
import QuizListingFilterModalMobile from './QuizListingFilterModalMobile.vue'
import { getDifficulties } from '@/services/api/quiz'

export default {
  components: {
    IconSettingsSlider,
    QuizListingFilterModalDesktop,
    QuizListingFilterModalMobile
  },
  emits: ['confirm'],
  data() {
    return {
      open: false,
      isMobile: false
    }
  },
  created() {
    if (!this.$store.getters['quiz/difficulties'].length) {
      this.fetchDifficulties()
    }
  },
  mounted() {
    this.checkScreenSize()
    window.addEventListener('resize', this.checkScreenSize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize)
  },
  methods: {
    checkScreenSize() {
      this.isMobile = window.innerWidth < 1440
    },
    async fetchDifficulties() {
      const { status, data } = await getDifficulties()
      if (status === 200) {
        this.$store.dispatch('quiz/setDifficulties', data)
      }
    },
    confirm() {
      const $query = []
      const categories = this.$store.getters['filter/categories'].toString()
      const difficulties = this.$store.getters['filter/difficulties'].toString()
      const status = this.$store.getters['filter/status']
      const sort = this.$store.getters['filter/sort']
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
      this.$router.push({
        name: 'quiz-listing',
        query: $query
      })
      this.$emit('confirm')
      this.open = false
      this.$store.dispatch('filter/setChanged', false)
    }
  }
}
</script>
