<template>
  <MainHeader />
  <div class="pt-18">
    <slot />
  </div>
</template>

<script>
import MainHeader from '@/components/layouts/main/MainHeader.vue'

export default {
  components: {
    MainHeader
  }
}
</script>
