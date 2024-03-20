<template>
  <header
    class="fixed w-full flex justify-between items-center h-18 bg-white border-b border-custom-gray-100 pl-4 pr-3 desktop:px-24 desktop:border-[#66666640]"
  >
    <div class="flex justify-start items-center gap-14">
      <RouterLink :to="{ name: 'home' }">
        <IconLogo />
      </RouterLink>
    </div>
    <div class="flex justify-end items-center gap-4">
      <a href="#" class="hidden desktop:flex group">
        <span
          class="bg-black text-white px-6 py-3 rounded text-sm font-bold border border-white group-hover:bg-white group-hover:text-black group-hover:border-black group-hover:shadow-solid group-hover:-translate-x-1 group-hover:-translate-y-1"
        >
          Sign up
        </span>
      </a>
      <a
        href="#"
        class="hidden desktop:flex items-center gap-1 mx-4 text-sm font-bold text-primary group"
      >
        <span>Log in</span>
        <IconArrowRight class="text-transparent group-hover:text-inherit" />
      </a>
      <button class="size-10 flex justify-center items-center desktop:hidden">
        <IconMenu />
      </button>
    </div>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router'
import IconLogo from '@/components/icons/IconLogo.vue'
import IconMenu from '@/components/icons/IconMenu.vue'
import IconArrowRight from '@/components/icons/IconArrowRight.vue'

export default {
  components: {
    RouterLink,
    IconLogo,
    IconMenu,
    IconArrowRight
  }
}
</script>
