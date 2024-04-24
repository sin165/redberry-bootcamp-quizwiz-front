<template>
  <div class="fixed top-0 left-0 w-full h-full bg-white z-50" :class="{ 'pb-24': changed }">
    <div class="h-64">
      <div
        class="flex justify-between items-center h-18 gap-4 p-4 border-b border-custom-gray-300 bg-custom-gray-70-transparent"
        @wheel.prevent
        @touchmove.prevent
        @scroll.prevent
      >
        <button class="w-max font-semibold text-custom-gray-500" @click="reset">Reset</button>
        <h3 class="font-semibold text-custom-gray-500">FILTERS</h3>
        <button class="size-6 shrink-0 self-center" @click="$emit('close')">
          <IconClose class="size-full" />
        </button>
      </div>
      <div
        class="h-18 border-b border-custom-gray-300"
        @wheel.prevent
        @touchmove.prevent
        @scroll.prevent
      >
        <QuizListingFilterModalSearch @changeTerm="(term) => (searchTerm = term)" />
      </div>
      <div class="px-4.5 py-8" @wheel.prevent @touchmove.prevent @scroll.prevent>
        <div class="w-full h-12 rounded-3xl bg-custom-gray-300-light text-sm font-semibold">
          <button
            class="w-1/2 h-full border-custom-gray-300 rounded-3xl"
            :class="{
              'text-primary': selectedTab === 'filter',
              'bg-white': selectedTab === 'filter',
              border: selectedTab === 'filter',
              'text-custom-gray-500-light': selectedTab !== 'filter'
            }"
            @click="selectedTab = 'filter'"
          >
            Filter
          </button>
          <button
            class="w-1/2 h-full border-custom-gray-300 rounded-3xl"
            :class="{
              'text-primary': selectedTab === 'sorting',
              'bg-white': selectedTab === 'sorting',
              border: selectedTab === 'sorting',
              'text-custom-gray-500-light': selectedTab !== 'sorting'
            }"
            @click="selectedTab = 'sorting'"
          >
            Sorting
          </button>
        </div>
      </div>
    </div>
    <div
      class="flex h-[calc(100%-16rem)] items-stretch gap-2.5 overflow-y-scroll overscroll-y-contain desktop:overflow-y-auto desktop:h-auto"
    >
      <div
        class="border-custom-gray-300 rounded-xl w-160 p-4"
        :class="{ hidden: selectedTab !== 'filter' }"
      >
        <QuizListingFilterModalCompletion v-if="loggedIn" />
        <div v-if="loggedIn" class="w-full h-0 border-b border-black-faint mt-5 mb-4"></div>
        <QuizListingFilterModalDifficulties :searchTerm="searchTerm" />
        <div class="w-full h-0 border-b border-black-faint mt-5 mb-4"></div>
        <QuizListingFilterModalCategories :searchTerm="searchTerm" />
      </div>
      <div
        class="border-custom-gray-300 rounded-xl w-96 p-4"
        :class="{ hidden: selectedTab !== 'sorting' }"
      >
        <QuizListingFilterModalSort />
      </div>
    </div>
    <div
      v-if="changed"
      class="absolute b-0 l-0 flex items-center gap-2.5 w-full h-24 px-4.5 shadow-heavy z-50"
      @wheel.prevent
      @touchmove.prevent
      @scroll.prevent
    >
      <button
        class="w-64 h-14 bg-primary text-white text-lg font-semibold rounded-0.5xl"
        @click="$emit('confirm')"
      >
        Confirm
      </button>
      <button class="w-32 h-14 text-lg font-semibold rounded-0.5xl" @click="$emit('close')">
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
import IconClose from '@/components/icons/IconClose.vue'
import QuizListingFilterModalCompletion from '@/components/quiz-listing/QuizListingFilterModalCompletion.vue'
import QuizListingFilterModalDifficulties from '@/components/quiz-listing/QuizListingFilterModalDifficulties.vue'
import QuizListingFilterModalCategories from '@/components/quiz-listing/QuizListingFilterModalCategories.vue'
import QuizListingFilterModalSearch from '@/components/quiz-listing/QuizListingFilterModalSearch.vue'
import QuizListingFilterModalSort from '@/components/quiz-listing/QuizListingFilterModalSort.vue'

export default {
  components: {
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
      selectedTab: 'filter',
      searchTerm: ''
    }
  },
  computed: {
    changed() {
      return this.$store.getters['filter/changed']
    },
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
