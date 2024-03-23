<template>
  <HeaderMain />
  <div class="pt-18">
    <slot />
  </div>
  <FooterMain />
</template>

<script>
import HeaderMain from '@/components/layouts/main/HeaderMain.vue'
import FooterMain from '@/components/layouts/main/FooterMain.vue'

export default {
  components: {
    HeaderMain,
    FooterMain
  }
}
</script>
