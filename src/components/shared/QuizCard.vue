<template>
  <article class="shadow-double w-98 min-h-128 p-6 pb-8">
    <div class="w-87 min-h-60 mb-8"></div>
    <ul class="flex items-center mb-3">
      <li v-for="(category, index) in quiz.categories" :key="category.id" class="flex items-center">
        <span v-if="index > 0" class="size-1 bg-custom-gray-300 rounded-full mx-3"></span>
        <a href="#" class="text-sm text-primary font-semibold">{{ category.name }}</a>
      </li>
    </ul>
    <h3 class="text-2xl font-semibold text-custom-gray-900 mb-5">{{ quiz.title }}</h3>
    <div class="flex gap-5 text-sm">
      <div v-if="quiz.auth_user_result" class="flex gap-3">
        <IconCompleted />
        <div>
          <h4 class="font-semibold text-custom-gray-900">Completed</h4>
          <p class="text-custom-gray-600">{{ quiz.auth_user_result.created_at }}</p>
        </div>
      </div>
      <div v-else class="flex gap-3">
        <IconNotCompleted />
        <div>
          <h4 class="font-semibold text-custom-gray-900">Not completed</h4>
          <p class="text-custom-gray-600 opacity-30">Date,Time</p>
        </div>
      </div>
      <div>
        <h4 class="font-semibold text-custom-gray-900">Total time</h4>
        <p v-if="quiz.auth_user_result" class="text-custom-gray-600">
          {{ quiz.auth_user_result.time }}
        </p>
        <p v-else class="text-custom-gray-600 opacity-30">N/A</p>
      </div>
      <div>
        <h4 class="font-semibold text-custom-gray-900">Total users</h4>
        <p class="text-custom-gray-600">
          {{ quiz.results_count }}
        </p>
      </div>
    </div>
    <div class="flex gap-5 text-sm mt-5">
      <div class="flex gap-3">
        <div
          :style="{ backgroundColor: quiz.difficulty.bg_color }"
          class="size-10 flex justify-center items-center rounded-full"
        >
          <IconDifficulty :style="{ color: quiz.difficulty.text_color }" />
        </div>
        <div>
          <h4 class="font-semibold text-custom-gray-900">Difficulty level</h4>
          <p class="text-custom-gray-600">{{ quiz.difficulty.name }}</p>
        </div>
      </div>
      <div v-if="quiz.auth_user_result" class="flex gap-3">
        <IconPoints />
        <div>
          <h4 class="font-semibold text-custom-gray-900">Points</h4>
          <p class="text-custom-gray-600">{{ quiz.auth_user_result.points }}</p>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import IconCompleted from '@/components/icons/IconCompleted.vue'
import IconNotCompleted from '@/components/icons/IconNotCompleted.vue'
import IconDifficulty from '@/components/icons/IconDifficulty.vue'
import IconPoints from '@/components/icons/IconPoints.vue'

export default {
  components: {
    IconCompleted,
    IconNotCompleted,
    IconDifficulty,
    IconPoints
  },
  props: {
    quiz: {
      type: Object,
      required: true
    }
  }
}
</script>
