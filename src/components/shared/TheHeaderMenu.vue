<template>
  <div @wheel.prevent @touchmove.prevent @scroll.prevent>
    <div
      class="fixed w-full h-full z-40 bg-custom-gray-900-transparent backdrop-blur"
      @click="$emit('close')"
    ></div>
    <div class="fixed w-85 z-50 shadow-double bg-white p-6">
      <div class="flex justify-between h-11 border-b border-custom-gray-300">
        <RouterLink :to="{ name: 'home' }"><IconLogo /></RouterLink>
        <IconClose @click="$emit('close')" />
      </div>
      <div class="flex items-center border-b h-18 border-custom-gray-300">
        <a href="#" class="text-lg font-semibold text-custom-gray-900">Quizzes</a>
      </div>
      <RouterLink
        :to="{ name: 'register' }"
        class="block mt-5 bg-black text-white text-sm font-bold text-center p-3.5 rounded"
      >
        Sign up
      </RouterLink>
      <RouterLink
        :to="{ name: 'login' }"
        class="block mt-5 bg-custom-gray-70 text-primary text-sm font-bold text-center p-3.5 rounded"
      >
        Log in
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import IconLogo from '@/components/icons/IconLogo.vue'
import IconClose from '@/components/icons/IconClose.vue'

export default {
  components: {
    RouterLink,
    IconLogo,
    IconClose
  },
  emits: ['close']
}
</script>
