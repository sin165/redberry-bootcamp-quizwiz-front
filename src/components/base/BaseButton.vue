<template>
  <button
    :disabled="loading"
    class="flex justify-center items-center gap-1 w-full h-14 text-white font-semibold rounded-0.5xl"
    :class="{
      'bg-primary': color === 'primary',
      'bg-black': color === 'black',
      'text-sm': loading && color === 'black'
    }"
  >
    <slot></slot>
    <IconArrowRight v-if="loading && color === 'black'" class="size-4" />
  </button>
</template>

<script>
import IconArrowRight from '@/components/icons/IconArrowRight.vue'

export default {
  components: {
    IconArrowRight
  },
  props: {
    color: {
      type: String,
      required: false,
      default: 'primary'
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>
