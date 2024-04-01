<template>
  <LayoutsAuth :showBackButton="hasPreviousRoute">
    <template #art>
      <div class="size-full bg-orange-soft flex justify-center items-center">
        <IconArtLogin />
      </div>
    </template>
    <template #default>
      <h1 class="font-extrabold text-3xl text-center desktop:text-left">Hi, Welcome! 👋</h1>
      <p class="text-center text-black-transparent mt-6 desktop:absolute desktop:-bottom-12">
        Don’t have an account?
        <RouterLink :to="{ name: 'register' }" class="text-primary font-semibold">
          Sign up
        </RouterLink>
      </p>
      <Form v-slot="{ errors }" class="max-w-107 mt-10 space-y-6" @submit="submitForm">
        <BaseField
          name="email"
          label="Email address"
          type="email"
          placeholder="Your email"
          rules="required|email"
          :error="errors.email"
        />
        <BaseField
          name="password"
          label="Password"
          type="password"
          placeholder="Your password"
          rules="required|min:3"
          :error="errors.password"
        />
        <div class="pt-2 pb-3.5 flex justify-between items-center">
          <BaseCheckbox name="remember" label="Remember for 30 days" />
          <span class="text-custom-gray-700 text-sm">Forgot password?</span>
        </div>
        <BaseButton color="black" :loading="loading">Log in</BaseButton>
      </Form>
    </template>
  </LayoutsAuth>
</template>

<script>
import { RouterLink } from 'vue-router'
import { Form } from 'vee-validate'
import { login } from '@/services/api/auth'
import LayoutsAuth from '@/layouts/LayoutsAuth.vue'
import IconArtLogin from '@/components/icons/IconArtLogin.vue'
import BaseField from '@/components/base/BaseField.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseButton from '@/components/base/BaseButton.vue'

export default {
  components: {
    RouterLink,
    // eslint-disable-next-line vue/no-reserved-component-names
    Form,
    LayoutsAuth,
    IconArtLogin,
    BaseField,
    BaseCheckbox,
    BaseButton
  },
  data() {
    return {
      hasPreviousRoute: false,
      loading: false
    }
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.hasPreviousRoute = !!from.name
    })
  },
  methods: {
    async submitForm(values) {
      this.loading = true
      try {
        const { status, data } = await login(values)
        if (status === 200) {
          console.log(data)
          // TODO: store user and redirect
        } else if (status === 401) {
          // TODO: display error - Invalid credentials
        } else {
          throw new Error()
        }
      } catch (error) {
        console.log(error)
        this.$store.dispatch('toast/display', {
          type: 'error',
          title: 'Error Occured',
          message: 'Something went wrong. Please, try again later'
        })
      }
      this.loading = false
    }
  }
}
</script>
