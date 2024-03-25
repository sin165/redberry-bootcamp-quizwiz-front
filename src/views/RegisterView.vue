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
      <Form class="max-w-107 mt-10 space-y-6" @submit="submitForm">
        <div>
          <BaseLabel for="username">Username</BaseLabel>
          <Field name="username" rules="required" v-slot="{ field, errors }">
            <BaseInput
              id="username"
              type="text"
              placeholder="Your username"
              v-bind="field"
              :isInvalid="!!errors[0]"
            />
            <ValidationError>{{ errors[0] }}</ValidationError>
          </Field>
        </div>
        <button>Sign Up</button>
      </Form>
    </template>
  </AuthLayout>
</template>

<script>
import { Form, Field } from 'vee-validate'
import AuthLayout from '@/layouts/AuthLayout.vue'
import IconArtRegister from '@/components/icons/IconArtRegister.vue'
import BaseLabel from '@/components/ui/BaseLabel.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import ValidationError from '@/components/ui/ValidationError.vue'

export default {
  components: {
    Form,
    Field,
    AuthLayout,
    IconArtRegister,
    BaseLabel,
    BaseInput,
    ValidationError
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
