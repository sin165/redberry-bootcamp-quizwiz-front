<template>
  <AuthLayout :showBackButton="hasPreviousRoute">
    <template #art>
      <div class="size-full bg-blue-soft flex items-center">
        <IconArtRegister />
      </div>
    </template>
    <template #default>
      <h1 class="font-extrabold text-3xl">Create account</h1>
    </template>
  </AuthLayout>
</template>

<script>
import AuthLayout from '@/layouts/AuthLayout.vue'
import IconArtRegister from '@/components/icons/IconArtRegister.vue'

export default {
  components: {
    AuthLayout,
    IconArtRegister
  },
  data() {
    return {
      hasPreviousRoute: false
    }
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.hasPreviousRoute = !!from.name
    })
  }
}
</script>
