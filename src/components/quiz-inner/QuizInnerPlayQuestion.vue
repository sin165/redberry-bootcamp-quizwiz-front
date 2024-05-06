<template>
  <div class="mb-12">
    <p class="text-sm font-semibold mb-6">
      <span class="pr-2.5 text-primary border-r">Question - {{ number }}</span>
      <span class="pl-2.5 text-pink">Points - {{ question.points }}</span>
    </p>
    <h3 class="text-lg font-bold mb-5">{{ question.text }}</h3>
    <p
      v-if="question.correct_answers > 1"
      class="flex items-center gap-2.5 h-9 px-4.5 mb-5 rounded bg-green-pale border border-green-light text-green"
    >
      <IconInfo />
      You can select {{ question.correct_answers }} options
    </p>
    <div class="space-y-2">
      <QuizInnerPlayQuestionAnswer
        v-for="answer in question.answers"
        :key="answer.id"
        :answer="answer"
        @click="toggleAnswer(answer.id)"
      />
    </div>
  </div>
</template>

<script>
import IconInfo from '@/components/icons/IconInfo.vue'
import QuizInnerPlayQuestionAnswer from '@/components/quiz-inner/QuizInnerPlayQuestionAnswer.vue'

export default {
  components: {
    IconInfo,
    QuizInnerPlayQuestionAnswer
  },
  props: {
    number: {
      type: Number,
      required: true
    },
    question: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selectedAnswers: []
    }
  },
  methods: {
    toggleAnswer(id) {
      if (this.selectedAnswers.includes(id)) {
        this.selectedAnswers.splice(this.selectedAnswers.indexOf(id), 1)
        this.$store.dispatch('play/unselectAnswer', id)
      } else {
        this.selectedAnswers.push(id)
        this.$store.dispatch('play/selectAnswer', id)
        if (this.selectedAnswers.length > this.question.correct_answers) {
          this.$store.dispatch('play/unselectAnswer', this.selectedAnswers.shift())
        }
      }
    }
  }
}
</script>
