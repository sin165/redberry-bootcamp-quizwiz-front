<template>
  <header class="sticky top-0 shadow-small desktop:shadow-large bg-custom-gray-25 min-h-18">
    <div class="flex justify-between items-center gap-2.5 min-h-18 mx-4.5 desktop:mx-24 border-b">
      <BaseButton class="desktop:hidden">Submit</BaseButton>
      <div
        class="desktop:hidden w-28 h-14 border border-custom-gray-300 bg-custom-gray-70 rounded-lg"
      ></div>
      <h1 class="hidden desktop:block text-center font-bold text-lg">{{ quiz.title }}</h1>
      <QuizInnerPlayStats :quiz="quiz" class="hidden desktop:flex" />
      <IconClose class="shrink-0 cursor-pointer" @click="$emit('close')" />
    </div>
    <div class="p-4.5 desktop:hidden">
      <h1 class="text-center font-bold text-lg">{{ quiz.title }}</h1>
      <QuizInnerPlayStats :quiz="quiz" />
    </div>
  </header>
  <div class="flex justify-between gap-10 m-4.5 desktop:m-24">
    <section class="w-full">
      <QuizInnerPlayQuestion
        v-for="(question, index) in quiz.questions"
        :key="question.id"
        :number="index + 1"
        :question="question"
      />
    </section>
    <div>
      <div
        class="hidden desktop:block sticky top-43 shadow-double border border-custom-gray-300 w-98 h-64 rounded-lg shrink-0"
      ></div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue'
import IconClose from '@/components/icons/IconClose.vue'
import QuizInnerPlayStats from '@/components/quiz-inner/QuizInnerPlayStats.vue'
import QuizInnerPlayQuestion from '@/components/quiz-inner/QuizInnerPlayQuestion.vue'

export default {
  components: {
    BaseButton,
    IconClose,
    QuizInnerPlayStats,
    QuizInnerPlayQuestion
  },
  props: {
    quiz: {
      type: Object,
      required: true
    }
  },
  emits: ['close']
}
</script>
