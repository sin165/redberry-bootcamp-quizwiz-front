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
      <div
        v-if="username"
        class="flex justify-start items-center gap-3 border-b border-custom-gray-300 py-5"
      >
        <div
          class="size-16 border border-custom-gray-300 rounded-full flex items-center justify-center"
        >
          <IconProfile />
        </div>
        <div>
          <p class="font-semibold text-custom-gray-900">{{ username }}</p>
          <p class="text-sm text-custom-gray-600">{{ email }}</p>
        </div>
      </div>
      <RouterLink
        v-if="!username"
        :to="{ name: 'register' }"
        class="block mt-5 bg-black text-white text-sm font-bold text-center p-3.5 rounded"
      >
        Sign up
      </RouterLink>
      <RouterLink
        v-if="!username"
        :to="{ name: 'login' }"
        class="block mt-5 bg-custom-gray-70 text-primary text-sm font-bold text-center p-3.5 rounded"
      >
        Log in
      </RouterLink>
      <button
        v-if="username"
        class="block mt-5 bg-custom-gray-70 text-primary text-sm font-bold text-center p-3.5 rounded w-full"
        @click="$emit('logout')"
      >
        Log out
      </button>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import IconLogo from '@/components/icons/IconLogo.vue'
import IconProfile from '@/components/icons/IconProfile.vue'
import IconClose from '@/components/icons/IconClose.vue'

export default {
  components: {
    RouterLink,
    IconLogo,
    IconProfile,
    IconClose
  },
  props: {
    username: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: false
    }
  },
  emits: ['close', 'logout']
}
</script>
