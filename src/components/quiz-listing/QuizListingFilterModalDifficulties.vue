<template>
  <h4 class="text-sm font-semibold text-custom-gray-900 mb-4">Levels</h4>
  <div class="flex flex-wrap gap-x-2 gap-y-4">
    <button
      v-for="difficulty in filteredDifficulties"
      :key="difficulty.id"
      :style="{
        color: selectedDifficulties.includes(difficulty.id) ? 'white' : difficulty.text_color,
        backgroundColor: selectedDifficulties.includes(difficulty.id)
          ? difficulty.text_color
          : difficulty.bg_color
      }"
      class="px-3 py-1 rounded-xl text-sm font-medium"
      @click="toggleDifficulties(difficulty.id)"
    >
      {{ difficulty.name }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    searchTerm: {
      type: String,
      required: false
    }
  },
  computed: {
    difficulties() {
      return this.$store.getters['quiz/difficulties']
    },
    filteredDifficulties() {
      return this.difficulties.filter((difficulty) => {
        return difficulty.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      })
    },
    selectedDifficulties() {
      return this.$store.getters['filter/difficulties']
    }
  },
  methods: {
    toggleDifficulties(id) {
      this.$store.dispatch('filter/toggleDifficulty', id)
    }
  }
}
</script>
