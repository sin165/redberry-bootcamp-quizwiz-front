<template>
  <button
    class="flex items-center gap-2 text-sm font-semibold text-custom-gray-900 mt-4"
    @click="myQuizzes = !myQuizzes"
  >
    My quizzes
    <div v-if="myQuizzes" class="size-4 rounded bg-black flex justify-center items-center">
      <IconCheckmark />
    </div>
    <div v-else class="size-4 border border-custom-gray-300 rounded"></div>
  </button>
  <button
    class="flex items-center gap-2 text-sm font-semibold text-custom-gray-900 mt-4"
    @click="notCompleted = !notCompleted"
  >
    Not completed
    <div v-if="notCompleted" class="size-4 rounded bg-black flex justify-center items-center">
      <IconCheckmark />
    </div>
    <div v-else class="size-4 border border-custom-gray-300 rounded"></div>
  </button>
</template>

<script>
import IconCheckmark from '@/components/icons/IconCheckmark.vue'

export default {
  components: {
    IconCheckmark
  },
  data() {
    return {
      myQuizzes: true,
      notCompleted: true
    }
  },
  watch: {
    myQuizzes() {
      this.updateStatusFilter()
    },
    notCompleted() {
      this.updateStatusFilter()
    }
  },
  created() {
    const status = this.$store.getters['filter/status']
    if (status === 'completed') {
      this.notCompleted = false
    } else if (status === 'not_completed') {
      this.myQuizzes = false
    }
  },
  methods: {
    updateStatusFilter() {
      if (this.myQuizzes && !this.notCompleted) {
        this.$store.dispatch('filter/setStatus', 'completed')
      } else if (this.notCompleted && !this.myQuizzes) {
        this.$store.dispatch('filter/setStatus', 'not_completed')
      } else {
        this.$store.dispatch('filter/setStatus', null)
      }
    }
  }
}
</script>
