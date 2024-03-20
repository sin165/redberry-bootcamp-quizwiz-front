<template>
  <MainHeader />
  <div class="pt-18">
    <slot />
  </div>
  <MainFooter />
</template>

<script>
import MainHeader from '@/components/layouts/main/MainHeader.vue'
import MainFooter from '@/components/layouts/main/MainFooter.vue'

export default {
  components: {
    MainHeader,
    MainFooter
  }
}
</script>
