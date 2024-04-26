<template>
  <button
    class="pt-2 pb-4 px-1 border-b-2 text-sm font-semibold w-max shrink-0"
    :class="{
      'border-black text-black': selected,
      'border-transparent text-custom-gray-500': !selected
    }"
    @click="handleClick"
  >
    {{ name }}
  </button>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: false
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  emits: ['confirm'],
  methods: {
    handleClick() {
      if (this.id) {
        this.$store.dispatch('filter/setFromQuery', this.$route.query)
        this.$store.dispatch('filter/toggleCategory', this.id)
      } else {
        this.$store.dispatch('filter/reset')
      }
      this.$emit('confirm')
    }
  }
}
</script>
