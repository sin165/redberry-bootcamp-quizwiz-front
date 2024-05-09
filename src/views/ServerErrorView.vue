<template>
  <LayoutsMain>
    <section class="my-10 desktop:my-14">
      <h1 class="font-raleway font-black text-5xl text-center">Internal server error!</h1>
      <h2 class="font-bold text-lg text-center mt-4">Error 500</h2>
      <div class="mx-14 my-11">
        <IconArtServerError class="mx-auto max-w-full h-min" />
      </div>
      <RouterLink
        :to="{ name: 'home' }"
        class="flex justify-center items-center gap-3 text-lg text-primary"
      >
        <IconGoHome />
        Go Home
      </RouterLink>
    </section>
  </LayoutsMain>
</template>

<script>
import { RouterLink } from 'vue-router'
import LayoutsMain from '@/layouts/LayoutsMain.vue'
import IconArtServerError from '@/components/icons/IconArtServerError.vue'
import IconGoHome from '@/components/icons/IconGoHome.vue'

export default {
  components: {
    RouterLink,
    LayoutsMain,
    IconArtServerError,
    IconGoHome
  }
}
</script>
