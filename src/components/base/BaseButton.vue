<template>
  <button
    class="block w-full h-14 text-white font-semibold rounded-0.5xl"
    :class="{ 'bg-primary': color === 'primary', 'bg-black': color === 'black' }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: false,
      default: 'primary'
    }
  }
}
</script>
