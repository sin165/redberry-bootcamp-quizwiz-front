<template>
  <h4 class="text-sm font-semibold text-custom-gray-900 mb-4">Categories</h4>
  <div class="flex flex-wrap gap-x-2 gap-y-4">
    <button
      v-for="category in filteredCategories"
      :key="category.id"
      :style="{
        color: selectedCategories.includes(category.id) ? 'white' : '',
        backgroundColor: selectedCategories.includes(category.id) ? 'black' : ''
      }"
      class="px-3.5 py-2 rounded-3xl text-sm font-semibold text-custom-gray-600"
      @click="toggleCategory(category.id)"
    >
      {{ category.name }}
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
    categories() {
      return this.$store.getters['quiz/categories']
    },
    filteredCategories() {
      return this.categories.filter((category) => {
        return category.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      })
    },
    selectedCategories() {
      return this.$store.getters['filter/categories']
    }
  },
  methods: {
    toggleCategory(id) {
      this.$store.dispatch('filter/toggleCategory', id)
    }
  }
}
</script>
