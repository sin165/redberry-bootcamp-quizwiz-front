<template>
  <RouterView />
  <ToastNotification v-if="toastVisible" />
</template>

<script>
import { RouterView } from 'vue-router'
import ToastNotification from '@/components/shared/ToastNotification.vue'

export default {
  components: {
    RouterView,
    ToastNotification
  },
  computed: {
    toastVisible() {
      return this.$store.getters['toast/visible']
    }
  }
}
</script>
