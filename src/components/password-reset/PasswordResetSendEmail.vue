<template>
  <h1 class="font-extrabold text-3xl text-center desktop:text-left">Forgot password?</h1>
  <p class="text-center text-black-transparent mt-6 desktop:max-w-107 desktop:text-left">
    Don’t worry! It happens. Please enter the email associated with your account.
  </p>
  <Form v-slot="{ errors }" class="max-w-107 mt-10 space-y-6" @submit="submitForm">
    <BaseField
      name="email"
      label="Email address"
      type="email"
      placeholder="Your email"
      rules="required|email"
      :error="errorFromBackend ?? errors.email"
      @focusout="errorFromBackend = null"
    />
    <BaseButton color="black" :loading="loading">Send</BaseButton>
  </Form>
</template>

<script>
import { Form } from 'vee-validate'
import { sendPasswordResetLink } from '@/services/api/auth'
import BaseField from '@/components/base/BaseField.vue'
import BaseButton from '@/components/base/BaseButton.vue'

export default {
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Form,
    BaseField,
    BaseButton
  },
  data() {
    return {
      loading: false,
      errorFromBackend: null
    }
  },
  methods: {
    async submitForm(values) {
      this.loading = true
      try {
        const { status, data } = await sendPasswordResetLink(values)
        if (status === 200) {
          this.$store.dispatch('toast/display', {
            type: 'success',
            title: 'Email Sent',
            message: data.message
          })
        } else if (status === 400 || status === 422) {
          this.errorFromBackend = data.message
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
