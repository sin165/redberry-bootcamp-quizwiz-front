<template>
  <RouterView />
  <ToastNotification v-if="toastVisible" />
</template>

<script>
import { RouterView } from 'vue-router'
import { getUser } from '@/services/api/auth'
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
  },
  created() {
    this.fetchUser()
  },
  methods: {
    async fetchUser() {
      const { status, data } = await getUser()
      if (status === 200) {
        this.$store.dispatch('user/set', data)
        if (this.$route.name === 'register' || this.$route.name === 'login') {
          this.$router.push({ name: 'home' })
        }
      }
    }
  }
}
</script>
