<template>
  <AuthLayout :showBackButton="hasPreviousRoute">
    <template #art>
      <div class="size-full bg-blue-soft flex items-center">
        <IconArtRegister />
      </div>
    </template>
    <template #default>
      <h1 class="font-extrabold text-3xl text-center desktop:text-left">Create account</h1>
      <p class="text-center text-black-transparent mt-6 desktop:absolute desktop:-bottom-12">
        Already have an account?
        <a class="text-primary font-semibold">Log in</a>
      </p>
      <Form v-slot="{ errors }" class="max-w-107 mt-10 space-y-6" @submit="submitForm">
        <FormField
          name="username"
          label="Username"
          placeholder="Your username"
          rules="required|min:3"
          :error="errors.username"
        />
        <FormField
          name="email"
          label="Email"
          type="email"
          placeholder="Example@gmail.com"
          rules="required|email"
          :error="errors.email"
        />
        <FormField
          name="password"
          label="Create a password"
          type="password"
          placeholder="must be 8 characters"
          rules="required|min:3"
          :error="errors.password"
        />
        <FormField
          name="confirmation"
          label="Confirm password"
          type="password"
          placeholder="must be 8 characters"
          rules="required|confirmed:@password"
          :error="errors.confirmation"
        />
        <div class="pt-2 pb-3.5">
          <FormCheckbox name="terms" label="I accept the terms and privacy policy" rules="accept" />
        </div>
        <ButtonBlack>Sign Up</ButtonBlack>
      </Form>
    </template>
  </AuthLayout>
</template>

<script>
import { Form } from 'vee-validate'
import AuthLayout from '@/layouts/AuthLayout.vue'
import IconArtRegister from '@/components/icons/IconArtRegister.vue'
import FormField from '@/components/shared/FormField.vue'
import FormCheckbox from '@/components/shared/FormCheckbox.vue'
import ButtonBlack from '@/components/ui/ButtonBlack.vue'

export default {
  components: {
    Form,
    AuthLayout,
    IconArtRegister,
    FormField,
    FormCheckbox,
    ButtonBlack
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
  },
  methods: {
    submitForm(values) {
      console.log(values)
    }
  }
}
</script>
