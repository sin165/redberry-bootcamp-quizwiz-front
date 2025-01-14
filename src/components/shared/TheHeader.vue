<template>
  <header
    class="fixed w-full flex justify-between items-center h-18 bg-white border-b border-custom-gray-100 pl-4 pr-3 desktop:px-24 desktop:border-custom-gray-500-transparent z-30"
  >
    <div class="flex justify-start items-center gap-11">
      <RouterLink :to="{ name: 'home' }">
        <IconLogo />
      </RouterLink>
      <RouterLink
        :to="{ name: 'quiz-listing' }"
        class="text-custom-gray-600 font-semibold text-sm flex items-center gap-2"
      >
        <div
          class="size-2.5 rounded-full"
          :class="{ 'bg-primary': $route.name === 'quiz-listing' || $route.name === 'quiz-inner' }"
        ></div>
        Quizzes
      </RouterLink>
    </div>
    <div class="flex justify-end items-center gap-4">
      <div id="search" class="relative"></div>
      <div class="hidden desktop:flex group">
        <RouterLink
          v-if="!username"
          :to="{ name: 'register' }"
          class="bg-black text-white px-6 py-3 rounded text-sm font-bold font-raleway border border-white group-hover:bg-white group-hover:text-black group-hover:border-black group-hover:shadow-solid group-hover:-translate-x-1 group-hover:-translate-y-1"
        >
          Sign up
        </RouterLink>
      </div>
      <RouterLink
        v-if="!username"
        :to="{ name: 'login' }"
        class="hidden desktop:flex items-center gap-1 mx-4 text-sm font-bold font-raleway text-primary group"
      >
        <span>Log in</span>
        <IconArrowRight class="text-transparent group-hover:text-inherit" />
      </RouterLink>
      <div
        v-if="username"
        class="hidden desktop:flex justify-center items-center relative size-8 border border-custom-gray-300 rounded-full group"
        tabindex="-1"
      >
        <img v-if="avatar" :src="avatar" alt="avatar" class="rounded-full" />
        <IconProfile v-else />
        <div
          class="hidden group-focus:flex justify-between items-end absolute w-80 h-40 -top-1 -right-1 border border-custom-gray-300 bg-white rounded-lg px-6 py-8 shadow"
        >
          <div>
            <div
              class="flex justify-center items-center size-10 border border-custom-gray-300 rounded-full mb-3"
            >
              <img v-if="avatar" :src="avatar" alt="avatar" class="rounded-full" />
              <IconProfile v-else />
            </div>
            <p class="text-sm font-semibold text-custom-gray-900">{{ username }}</p>
            <p class="text-sm text-custom-gray-600">{{ email }}</p>
          </div>
          <IconLogout class="cursor-pointer" @click="logOut" />
        </div>
      </div>
      <button
        class="size-10 flex justify-center items-center desktop:hidden"
        @click="menuOpen = true"
      >
        <IconMenu />
      </button>
    </div>
  </header>
  <TheHeaderMenu
    v-if="menuOpen"
    :username="username"
    :email="email"
    :avatar="avatar"
    @close="menuOpen = false"
    @logout="logOut"
  />
</template>

<script>
import { RouterLink } from 'vue-router'
import { logout } from '@/services/api/auth'
import IconLogo from '@/components/icons/IconLogo.vue'
import IconMenu from '@/components/icons/IconMenu.vue'
import IconArrowRight from '@/components/icons/IconArrowRight.vue'
import IconProfile from '@/components/icons/IconProfile.vue'
import IconLogout from '@/components/icons/IconLogout.vue'
import TheHeaderMenu from '@/components/shared/TheHeaderMenu.vue'

export default {
  components: {
    RouterLink,
    IconLogo,
    IconMenu,
    IconArrowRight,
    IconProfile,
    IconLogout,
    TheHeaderMenu
  },
  data() {
    return {
      menuOpen: false
    }
  },
  computed: {
    username() {
      return this.$store.getters['user/username']
    },
    email() {
      return this.$store.getters['user/email']
    },
    avatar() {
      return this.$store.getters['user/avatar']
    }
  },
  methods: {
    async logOut() {
      const { status } = await logout()
      if (status === 200) {
        this.$store.dispatch('user/unset')
      }
    }
  }
}
</script>
