<template>
  <button
    class="pt-2 pb-4 px-1 border-b-2 text-sm font-semibold w-max shrink-0"
    :class="{
      'border-black text-black': selected,
      'border-transparent text-custom-gray-500': !selected
    }"
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
    selected: {
      type: Boolean,
      default: false
    }
  }
}
</script>
