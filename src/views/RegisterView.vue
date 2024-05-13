<template>
  <LayoutsAuth :showBackButton="hasPreviousRoute">
    <template #art>
      <div class="size-full bg-blue-soft flex items-center">
        <IconArtRegister />
      </div>
    </template>
    <template #default>
      <h1 class="font-extrabold text-3xl font-raleway text-center desktop:text-left">
        Create account
      </h1>
      <p class="text-center text-black-transparent mt-6 desktop:absolute desktop:-bottom-12">
        Already have an account?
        <RouterLink :to="{ name: 'login' }" class="text-primary font-semibold">Log in</RouterLink>
      </p>
      <Form v-slot="{ errors }" class="max-w-107 mt-10 space-y-6" @submit="submitForm">
        <BaseField
          name="username"
          label="Username"
          placeholder="Your username"
          rules="required|min:3"
          :error="errorsFromBackend.username ?? errors.username"
          @focusout="errorsFromBackend.username = null"
        />
        <BaseField
          name="email"
          label="Email"
          type="email"
          placeholder="Example@gmail.com"
          rules="required|email"
          :error="errorsFromBackend.email ?? errors.email"
          @focusout="errorsFromBackend.email = null"
        />
        <BaseField
          name="password"
          label="Create a password"
          type="password"
          placeholder="must be 8 characters"
          rules="required|min:3"
          :error="errors.password"
        />
        <BaseField
          name="confirmation"
          label="Confirm password"
          type="password"
          placeholder="must be 8 characters"
          rules="required|confirmed:@password"
          :error="errors.confirmation"
        />
        <div class="pt-2 pb-3.5">
          <BaseCheckbox name="terms" label="I accept the terms and privacy policy" rules="accept" />
        </div>
        <BaseButton color="black" :loading="loading">Sign Up</BaseButton>
      </Form>
    </template>
  </LayoutsAuth>
</template>

<script>
import { RouterLink } from 'vue-router'
import { Form } from 'vee-validate'
import { register } from '@/services/api/auth'
import LayoutsAuth from '@/layouts/LayoutsAuth.vue'
import IconArtRegister from '@/components/icons/IconArtRegister.vue'
import BaseField from '@/components/base/BaseField.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseButton from '@/components/base/BaseButton.vue'

export default {
  components: {
    RouterLink,
    // eslint-disable-next-line vue/no-reserved-component-names
    Form,
    LayoutsAuth,
    IconArtRegister,
    BaseField,
    BaseCheckbox,
    BaseButton
  },
  data() {
    return {
      hasPreviousRoute: false,
      errorsFromBackend: {},
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
      if (this.errorsFromBackend.username || this.errorsFromBackend.email) {
        return
      }
      this.loading = true
      try {
        const { status, data } = await register(values)
        if (status === 201) {
          this.$store.dispatch('toast/display', {
            type: 'success',
            title: 'Registration Successful!',
            message: 'You need to verify your email before you can log in'
          })
        } else if (status === 422) {
          this.errorsFromBackend.username = data.errors.username ? data.errors.username[0] : null
          this.errorsFromBackend.email = data.errors.email ? data.errors.email[0] : null
        } else {
          throw new Error()
        }
      } catch (error) {
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
