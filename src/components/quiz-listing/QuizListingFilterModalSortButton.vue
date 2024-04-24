<template>
  <button
    class="flex justify-between items-center w-full h-10 pl-3 pr-4 rounded-lg"
    :class="{ 'bg-custom-gray-250-light': selected === name }"
    @click="select"
  >
    <div class="flex gap-4 items-center">
      <slot></slot>
    </div>
    <IconSelected v-if="selected === name" />
  </button>
</template>

<script>
import IconSelected from '@/components/icons/IconSelected.vue'

export default {
  components: {
    IconSelected
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    selected() {
      return this.$store.getters['filter/sort']
    }
  },
  methods: {
    select() {
      if (this.selected === this.name) {
        this.$store.dispatch('filter/setSort', null)
      } else {
        this.$store.dispatch('filter/setSort', this.name)
      }
    }
  }
}
</script>
