<template>
  <div class="block fixed top-0 left-0 w-full h-full" @click="$emit('close')"></div>
  <div
    class="bg-white absolute top-12 left-auto right-0 rounded-xl border border-black shadow-blurred z-20 p-4"
  >
    <div>
      <div class="flex gap-4 p-4 bg-custom-gray-70-transparent rounded-xl">
        <button class="px-3.5 py-2 rounded-0.5xl text-white bg-black flex items-center gap-2">
          <IconSettingsSlider />
          Filter
        </button>
        <QuizListingFilterModalSearch @changeTerm="(term) => (searchTerm = term)" />
        <div class="flex items-center gap-4">
          <button class="h-full bg-primary text-white px-6 rounded-0.5xl" @click="$emit('confirm')">
            Confirm
          </button>
          <div class="w-0 h-3.5 border-r border-custom-gray-500-lighter"></div>
          <button class="w-max text-custom-gray-500" @click="reset">Reset all filters</button>
        </div>
        <button class="size-4 shrink-0 self-center">
          <IconClose class="size-full" />
        </button>
      </div>
    </div>
    <div class="flex items-stretch gap-2.5">
      <div class="border border-custom-gray-300 rounded-xl w-160 p-4">
        <h4 class="block text-sm text-primary font-semibold">Filter by</h4>
        <QuizListingFilterModalCompletion v-if="loggedIn" />
        <div
          class="w-full h-0 border-black-faint mt-5 mb-4"
          :class="{ 'border-b': loggedIn }"
        ></div>
        <QuizListingFilterModalDifficulties :searchTerm="searchTerm" />
        <div class="w-full h-0 border-b border-black-faint mt-5 mb-4"></div>
        <QuizListingFilterModalCategories :searchTerm="searchTerm" />
      </div>
      <div class="border border-custom-gray-300 rounded-xl w-96 p-4">
        <h4 class="text-sm text-primary font-semibold">Sort by</h4>
        <QuizListingFilterModalSort />
      </div>
    </div>
  </div>
</template>

<script>
import IconSettingsSlider from '@/components/icons/IconSettingsSlider.vue'
import IconClose from '@/components/icons/IconClose.vue'
import QuizListingFilterModalCompletion from '@/components/quiz-listing/QuizListingFilterModalCompletion.vue'
import QuizListingFilterModalDifficulties from '@/components/quiz-listing/QuizListingFilterModalDifficulties.vue'
import QuizListingFilterModalCategories from '@/components/quiz-listing/QuizListingFilterModalCategories.vue'
import QuizListingFilterModalSearch from '@/components/quiz-listing/QuizListingFilterModalSearch.vue'
import QuizListingFilterModalSort from '@/components/quiz-listing/QuizListingFilterModalSort.vue'

export default {
  components: {
    IconSettingsSlider,
    IconClose,
    QuizListingFilterModalCompletion,
    QuizListingFilterModalDifficulties,
    QuizListingFilterModalCategories,
    QuizListingFilterModalSearch,
    QuizListingFilterModalSort
  },
  emits: ['close', 'confirm'],
  data() {
    return {
      searchTerm: ''
    }
  },
  computed: {
    loggedIn() {
      return !!this.$store.getters['user/username']
    }
  },
  methods: {
    reset() {
      this.$store.dispatch('filter/reset')
    }
  }
}
</script>
