<template>
  <Teleport to="#search">
    <button
      class="flex items-center gap-1 h-11.5 text-custom-gray-500 text-sm"
      @click="open = true"
    >
      <IconSearch />
      Search
    </button>
    <div
      v-if="open"
      class="absolute h-11.5 w-60 desktop:w-92 top-0 right-0 border border-custom-gray-300 rounded-0.5xl flex"
    >
      <input
        v-focus
        v-model="term"
        type="text"
        class="size-full rounded-l-0.5xl pl-9 pr-2 outline-blue-light outline-4"
        placeholder="Search"
        @keydown.enter="handleEnter"
      />
      <IconSearch class="absolute left-3.5 top-3.5" />
      <div
        class="shrink-0 w-11.5 h-full rounded-r-0.5xl border-l border-custom-gray-300 bg-white flex justify-center items-center cursor-pointer"
        @click="close"
      >
        <IconClose class="size-4" />
      </div>
    </div>
  </Teleport>
</template>

<script>
import IconSearch from '@/components/icons/IconSearch.vue'
import IconClose from '@/components/icons/IconClose.vue'

const focus = { mounted: (el) => el.focus() }

export default {
  components: {
    IconSearch,
    IconClose
  },
  directives: {
    focus
  },
  emits: ['confirm'],
  data() {
    return {
      open: false,
      term: this.$store.getters['filter/term']
    }
  },
  methods: {
    close() {
      this.open = false
      this.term = ''
    },
    handleEnter() {
      this.$store.dispatch('filter/setTerm', this.term)
      this.$emit('confirm')
    }
  }
}
</script>
