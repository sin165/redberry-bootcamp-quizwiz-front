<template>
  <input
    class="block border w-full h-14 px-4 rounded-0.5xl"
    :class="{ 'border-custom-gray-300': !isInvalid, 'border-red-error-soft': isInvalid }"
  />
</template>

<script>
export default {
  props: {
    isInvalid: {
      type: Boolean,
      default: false
    }
  }
}
</script>
