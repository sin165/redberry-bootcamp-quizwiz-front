<template>
  <button
    :disabled="loading"
    class="flex justify-center items-center gap-1 w-full h-14 font-semibold rounded-0.5xl px-5"
    :class="{
      'bg-primary': color === 'primary',
      'bg-black': color === 'black',
      'bg-primary-pale': color === 'pale',
      'text-white': color !== 'pale',
      'text-primary': color === 'pale',
      'pl-3.5': loading && color === 'pale',
      'text-sm': loading && color === 'black'
    }"
  >
    <IconLoadMore v-if="!loading && color === 'pale'" class="mr-1" />
    <IconLoading v-if="loading && color === 'pale'" class="mr-1.5" />
    <slot></slot>
    <IconArrowRight v-if="loading && color === 'black'" class="size-4" />
  </button>
</template>

<script>
import IconLoadMore from '@/components/icons/IconLoadMore.vue'
import IconLoading from '@/components/icons/IconLoading.vue'
import IconArrowRight from '@/components/icons/IconArrowRight.vue'

export default {
  components: {
    IconLoadMore,
    IconLoading,
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
