<template>
  <LayoutsAuth :showBackButton="hasPreviousRoute">
    <template #art>
      <div class="size-full bg-lavender-soft flex justify-center items-center">
        <IconArtPasswordReset />
      </div>
    </template>
    <template #default>
      <PasswordResetNewPassword v-if="token" :token="token" :email="email" />
      <PasswordResetSendEmail v-else />
    </template>
  </LayoutsAuth>
</template>

<script>
import LayoutsAuth from '@/layouts/LayoutsAuth.vue'
import IconArtPasswordReset from '@/components/icons/IconArtPasswordReset.vue'
import PasswordResetSendEmail from '@/components/password-reset/PasswordResetSendEmail.vue'
import PasswordResetNewPassword from '@/components/password-reset/PasswordResetNewPassword.vue'

export default {
  components: {
    LayoutsAuth,
    IconArtPasswordReset,
    PasswordResetSendEmail,
    PasswordResetNewPassword
  },
  data() {
    return {
      hasPreviousRoute: false,
      token: this.$route.query['token'],
      email: this.$route.query['email']
    }
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.hasPreviousRoute = !!from.name
    })
  }
}
</script>
