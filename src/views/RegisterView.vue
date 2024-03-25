<template>
  <AuthLayout :showBackButton="hasPreviousRoute">
    <template #art>
      <div class="size-full bg-blue-soft flex items-center">
        <IconArtRegister />
      </div>
    </template>
    <template #default>
      <h1 class="font-extrabold text-3xl mb-10">Create account</h1>
      <Form class="max-w-107 space-y-6" @submit="submitForm">
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
