<template>
  <header class="sticky top-0 shadow-small desktop:shadow-large bg-custom-gray-25 min-h-18">
    <div class="flex justify-between items-center gap-2.5 min-h-18 mx-4.5 desktop:mx-24 border-b">
      <BaseButton class="desktop:hidden" :loading="loading" @click="submit">Submit</BaseButton>
      <div
        class="desktop:hidden w-28 h-14 border border-custom-gray-300 bg-custom-gray-70 rounded-lg pt-2 pl-4"
      >
        <p class="text-xs font-bold">Timer</p>
        <p class="text-xl font-semibold text-custom-gray-600 leading-6">
          {{ formattedRemainingTime }}
        </p>
      </div>
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
        class="hidden desktop:block sticky top-43 shadow-double border border-custom-gray-300 w-98 h-64 rounded-lg shrink-0 p-8"
      >
        <div
          class="w-32 h-12 absolute -top-6 left-1/2 -translate-x-1/2 shadow-small border border-custom-gray-300 bg-white rounded-lg flex justify-center items-center font-semibold text-custom-gray-500"
        >
          Timer
        </div>
        <div
          class="mb-8 h-28 border-b border-b-gray-300 flex justify-center items-center text-6xl text-custom-gray-600"
        >
          {{ formattedRemainingTime }}
        </div>
        <BaseButton :loading="loading" @click="submit">Submit</BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue'
import IconClose from '@/components/icons/IconClose.vue'
import QuizInnerPlayStats from '@/components/quiz-inner/QuizInnerPlayStats.vue'
import QuizInnerPlayQuestion from '@/components/quiz-inner/QuizInnerPlayQuestion.vue'
import { submitAnswers } from '@/services/api/quiz'
import { formatTime } from '@/utils/formatting'

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
  emits: ['close'],
  data() {
    return {
      remainingTime: 0,
      timer: null,
      loading: false
    }
  },
  computed: {
    formattedRemainingTime() {
      return formatTime(this.remainingTime)
    }
  },
  mounted() {
    this.startTimer()
  },
  beforeUnmount() {
    clearInterval(this.timer)
    this.$store.dispatch('play/clearAnswers')
  },
  methods: {
    startTimer() {
      this.remainingTime = this.quiz.time_limit
      this.timer = setInterval(() => {
        if (this.remainingTime > 0) {
          this.remainingTime--
        } else {
          clearInterval(this.timer)
          this.submit()
        }
      }, 1000)
    },
    async submit() {
      this.loading = true
      clearInterval(this.timer)
      let time = this.quiz.time_limit - this.remainingTime
      let answers = this.$store.getters['play/answers']
      const { status, data } = await submitAnswers(this.quiz.id, answers, time)
      if (status === 200) {
        console.log('data: ', data)
      }
      this.loading = false
    }
  }
}
</script>
