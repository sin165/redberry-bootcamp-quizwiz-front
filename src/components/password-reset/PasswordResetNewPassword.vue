<template>
  <h1 class="font-extrabold text-3xl text-center desktop:text-left">Reset password</h1>
  <p class="text-center text-black-transparent mt-6 desktop:text-left">
    Please type something you’ll remember
  </p>
  <p class="text-center text-black-transparent mt-6 desktop:absolute desktop:-bottom-12">
    Already have an account?
    <RouterLink :to="{ name: 'login' }" class="text-primary font-semibold">Log in</RouterLink>
  </p>
  <Form v-slot="{ errors }" class="max-w-107 mt-10 space-y-6" @submit="submitForm">
    <BaseField
      name="password"
      label="New password"
      type="password"
      placeholder="Must be 8 characters"
      rules="required|min:3"
      :error="errors.password"
    />
    <BaseField
      name="password_confirmation"
      label="Confirm password"
      type="password"
      placeholder="Repeat password"
      rules="required|confirmed:@password"
      :error="errors.password_confirmation"
    />
    <BaseButton color="black" :loading="loading">Reset password</BaseButton>
  </Form>
</template>

<script>
import { RouterLink } from 'vue-router'
import { Form } from 'vee-validate'
import { resetPassword } from '@/services/api/auth'
import BaseField from '@/components/base/BaseField.vue'
import BaseButton from '@/components/base/BaseButton.vue'

export default {
  components: {
    RouterLink,
    // eslint-disable-next-line vue/no-reserved-component-names
    Form,
    BaseField,
    BaseButton
  },
  props: {
    token: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    async submitForm(values) {
      this.loading = true
      values.email = this.email
      values.token = this.token
      try {
        const { status, data } = await resetPassword(values)
        if (status === 200) {
          this.$store.dispatch('toast/display', {
            type: 'success',
            title: 'Password changed',
            message: data.message
          })
        } else if (status === 400) {
          this.$store.dispatch('toast/display', {
            type: 'warning',
            title: 'Token Expired',
            message: data.message
          })
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
