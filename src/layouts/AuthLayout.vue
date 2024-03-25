<template>
  <div class="flex">
    <div class="hidden desktop:block w-111/240 h-lvh shrink-0">
      <slot name="art"></slot>
      <RouterLink :to="{ name: 'home' }" class="fixed top-10 left-10">
        <IconLogo />
      </RouterLink>
    </div>
    <div class="relative h-lvh w-full overflow-y-auto">
      <div class="mt-11 ml-14 absolute">
        <button class="flex items-center gap-2" v-if="showBackButton" @click="$router.go(-1)">
          <IconBack />
          <span class="text-sm font-medium text-custom-gray-500">Back</span>
        </button>
      </div>
      <div class="relative mx-5 mt-28 mb-18 desktop:mx-20">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import IconLogo from '@/components/icons/IconLogo.vue'
import IconBack from '@/components/icons/IconBack.vue'

export default {
  components: {
    IconLogo,
    IconBack
  },
  props: {
    showBackButton: {
      type: Boolean,
      default: false
    }
  }
}
</script>
