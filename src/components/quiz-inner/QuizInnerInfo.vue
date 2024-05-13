<template>
  <section class="w-full desktop:flex desktop:justify-between">
    <div class="desktop:w-7/12 desktop:mb-12 desktop:pr-4">
      <div class="flex flex-col desktop:flex-col-reverse">
        <ul class="flex items-center flex-wrap mb-4">
          <template v-for="(category, index) in quiz.categories" :key="category.id">
            <span v-if="index > 0" class="size-1 bg-custom-gray-300 rounded-full mx-3"></span>
            <li class="text-sm text-primary font-semibold">{{ category.name }}</li>
          </template>
        </ul>
        <h1 class="text-4.5xl font-bold mb-4">{{ quiz.title }}</h1>
      </div>
      <p class="text-sm font-semibold text-custom-gray-500 mb-4 desktop:mb-8">
        {{ quiz.description }}
      </p>
      <img v-if="quiz.picture" :src="quiz.picture" alt="quiz image" class="w-full desktop:hidden" />
      <div
        class="text-sm font-semibold text-custom-gray-500 divide-y mb-7 mt-5 desktop:flex desktop:divide-y-0 desktop:divide-x desktop:mb-10"
      >
        <p class="h-11 flex items-center gap-2 desktop:h-3.5 desktop:pr-3">
          <IconHashtag />{{ quiz.questions.length }} Questions
        </p>
        <p class="h-11 flex items-center gap-2 desktop:h-3.5 desktop:px-3">
          <IconDiploma />{{ quiz.max_points }} Points
        </p>
        <p class="h-11 flex items-center gap-2 desktop:h-3.5 desktop:px-3">
          <IconRocket />{{ quiz.results_count }} Plays
        </p>
        <p class="h-11 flex items-center gap-2 desktop:h-3.5 desktop:pl-3">
          <IconTime />{{ Math.floor(quiz.time_limit / 60) }}m
        </p>
      </div>
      <div class="desktop:w-85">
        <BaseButton v-if="!quiz.auth_user_result" @click="$emit('start')">Start quizz</BaseButton>
        <p v-else class="text-xs font-semibold text-custom-gray-500 mb-4 desktop:mb-8">
          You have already taken this quiz
        </p>
      </div>
    </div>
    <div v-if="quiz.picture" class="hidden desktop:block w-2/5 mb-12">
      <img :src="quiz.picture" alt="quiz image" class="rounded-2xl" />
    </div>
  </section>
  <section class="hidden desktop:block w-full border-t py-8">
    <h4 class="font-bold text-lg mb-3">Instructions</h4>
    <p>{{ quiz.instructions }}</p>
  </section>
</template>

<script>
import IconHashtag from '@/components/icons/IconHashtag.vue'
import IconDiploma from '@/components/icons/IconDiploma.vue'
import IconRocket from '@/components/icons/IconRocket.vue'
import IconTime from '@/components/icons/IconTime.vue'
import BaseButton from '@/components/base/BaseButton.vue'

export default {
  components: {
    IconHashtag,
    IconDiploma,
    IconRocket,
    IconTime,
    BaseButton
  },
  props: {
    quiz: {
      type: Object,
      required: true
    }
  },
  emits: ['start']
}
</script>
