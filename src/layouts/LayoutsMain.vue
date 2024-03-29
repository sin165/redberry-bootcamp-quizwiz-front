<template>
  <TheHeader />
  <div class="pt-18">
    <slot />
  </div>
  <TheFooter />
</template>

<script>
import TheHeader from '@/components/shared/TheHeader.vue'
import TheFooter from '@/components/shared/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
