<template>
  <div
    class="fixed top-4 right-11 w-85 h-max py-3 pr-4 pl-16 rounded-lg shadow-heavy bg-custom-gray-750 text-white overflow-hidden desktop:top-10 desktop:right-12"
  >
    <div
      class="absolute top-1/2 -left-18 -translate-y-1/2 size-52 flex justify-center items-center"
      :class="{
        'bg-radial-green': type === 'success',
        'bg-radial-yellow': type === 'warning',
        'bg-radial-red': type === 'error'
      }"
    >
      <IconToastSuccess v-if="type === 'success'" />
      <IconToastWarning v-if="type === 'warning'" />
      <IconToastError v-if="type === 'error'" />
    </div>
    <h3 class="font-raleway text-lg">{{ title }}</h3>
    <p class="text-sm text-custom-gray-350">{{ message }}</p>
    <div
      class="h-1.5 w-full absolute left-0 bottom-0 animate-reduce"
      :class="{
        'bg-linear-green': type === 'success',
        'bg-linear-yellow': type === 'warning',
        'bg-linear-red': type === 'error'
      }"
    ></div>
  </div>
</template>

<script>
import IconToastSuccess from '@/components/icons/IconToastSuccess.vue'
import IconToastWarning from '@/components/icons/IconToastWarning.vue'
import IconToastError from '@/components/icons/IconToastError.vue'

export default {
  components: {
    IconToastSuccess,
    IconToastWarning,
    IconToastError
  },
  computed: {
    type() {
      return this.$store.getters['toast/type']
    },
    title() {
      return this.$store.getters['toast/title']
    },
    message() {
      return this.$store.getters['toast/message']
    }
  }
}
</script>
