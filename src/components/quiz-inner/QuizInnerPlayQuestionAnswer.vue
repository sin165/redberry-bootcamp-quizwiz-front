<template>
  <div
    class="flex justify-between items-center gap-1 border p-4 w-full rounded-lg"
    :class="{ 'border-primary-light bg-blue-pale': selected, 'border-custom-gray-200': !selected }"
  >
    <p :class="{ 'text-custom-gray-600': !selected, 'text-primary': selected }">
      {{ answer.text }}
    </p>
    <div
      class="size-4 rounded-full flex justify-center items-center"
      :class="{ 'bg-primary': selected, 'border border-custom-gray-300': !selected }"
    >
      <IconCheckmark />
    </div>
  </div>
</template>

<script>
import IconCheckmark from '@/components/icons/IconCheckmark.vue'

export default {
  components: {
    IconCheckmark
  },
  props: {
    answer: {
      type: Object,
      required: true
    }
  },
  computed: {
    selected() {
      return this.$store.getters['play/answers'].includes(this.answer.id)
    }
  }
}
</script>
