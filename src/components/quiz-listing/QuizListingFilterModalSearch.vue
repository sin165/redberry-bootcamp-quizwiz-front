<template>
  <label class="relative w-full">
    <input
      type="text"
      class="size-full desktop:rounded-3xl desktop:border border-custom-gray-500-lighter pl-12 pr-6 py-1"
      placeholder="Search"
      @input="handleInput"
    />
    <IconSearch class="absolute top-0 desktop:top-3 ml-6" />
  </label>
</template>

<script>
import IconSearch from '@/components/icons/IconSearch.vue'

export default {
  components: {
    IconSearch
  },
  emits: ['changeTerm'],
  methods: {
    handleInput(e) {
      this.$emit('changeTerm', e.target.value)
    }
  }
}
</script>
