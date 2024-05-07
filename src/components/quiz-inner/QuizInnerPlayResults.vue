<template>
  <div @wheel.prevent @touchmove.prevent @scroll.prevent>
    <RouterLink
      :to="{ name: 'quiz-listing' }"
      class="fixed top-0 left-0 w-full h-full z-40 bg-custom-gray-900-transparent backdrop-blur cursor-default"
    ></RouterLink>
    <div
      class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 bg-white z-50 p-6 rounded-xl"
    >
      <div class="relative">
        <RouterLink :to="{ name: 'quiz-listing' }">
          <IconClose class="absolute right-0" />
        </RouterLink>
      </div>
      <IconFinished class="mx-auto mb-5 mt-5" />
      <h3 class="text-lg font-semibold text-custom-gray-900 text-center mb-2">Quiz finished</h3>
      <p class="text-sm text-custom-gray-600 text-center mb-8">your results</p>
      <div class="text-sm font-medium divide-y">
        <div class="pb-3">
          <h4 class="text-custom-gray-700 mb-2">Quiz name</h4>
          <p>{{ results.quiz_name }}</p>
        </div>
        <div class="py-3">
          <h4 class="text-custom-gray-700 mb-2">Quiz level</h4>
          <p :style="{ color: results.quiz_level_color }">{{ results.quiz_level }}</p>
        </div>
        <div class="py-3">
          <h4 class="text-custom-gray-700 mb-2">Time</h4>
          <p>{{ formattedTime }}</p>
        </div>
        <div class="py-3">
          <h4 class="text-custom-gray-700 mb-2">Mistakes</h4>
          <p class="text-red-error">{{ results.incorrect_answers }}</p>
        </div>
        <div class="py-3">
          <h4 class="text-custom-gray-700 mb-2">Right answers</h4>
          <p class="text-green-light">{{ results.correct_answers }}</p>
        </div>
      </div>
      <RouterLink
        :to="{ name: 'quiz-listing' }"
        class="h-11 flex justify-center items-center font-semibold rounded-0.5xl bg-primary text-white"
      >
        Back to home
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import IconFinished from '@/components/icons/IconFinished.vue'
import IconClose from '@/components/icons/IconClose.vue'
import { formatTime } from '@/utils/formatting'

export default {
  components: {
    RouterLink,
    IconClose,
    IconFinished
  },
  props: {
    results: {
      type: Object,
      required: true
    }
  },
  computed: {
    formattedTime() {
      return formatTime(this.results.time)
    }
  }
}
</script>
