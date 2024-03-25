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
        <div>
          <BaseLabel for="email">Email</BaseLabel>
          <Field name="email" rules="required" v-slot="{ field, errors }">
            <BaseInput
              id="email"
              type="email"
              placeholder="Example@gmail.com"
              v-bind="field"
              :isInvalid="!!errors[0]"
            />
            <ValidationError>{{ errors[0] }}</ValidationError>
          </Field>
        </div>
        <div>
          <BaseLabel for="password">Create a password</BaseLabel>
          <Field name="password" rules="required" v-slot="{ field, errors }">
            <BaseInput
              id="password"
              type="password"
              placeholder="must be 8 characters"
              v-bind="field"
              :isInvalid="!!errors[0]"
            />
            <ValidationError>{{ errors[0] }}</ValidationError>
          </Field>
        </div>
        <div>
          <BaseLabel for="confirm-password">Confirm password</BaseLabel>
          <Field name="confirm-password" rules="required" v-slot="{ field, errors }">
            <BaseInput
              id="confirm-password"
              type="password"
              placeholder="must be 8 characters"
              v-bind="field"
              :isInvalid="!!errors[0]"
            />
            <ValidationError>{{ errors[0] }}</ValidationError>
          </Field>
        </div>
        <div class="pt-2">
          <Field
            v-slot="{ field }"
            name="terms"
            type="checkbox"
            :value="true"
            :unchecked-value="false"
          >
            <label class="flex gap-3">
              <input
                type="checkbox"
                name="terms"
                v-bind="field"
                :value="true"
                class="peer hidden"
              />
              <div
                class="size-5 rounded-full border border-custom-gray-400 *:hidden peer-checked:border-none peer-checked:*:block"
              >
                <IconChecked />
              </div>
              <span class="text-custom-gray-700 text-sm"
                >I accept the terms and privacy policy</span
              >
            </label>
          </Field>
        </div>
        <button class="block w-full h-14 bg-black text-white font-semibold rounded-0.5xl">
          Sign Up
        </button>
      </Form>
    </template>
  </AuthLayout>
</template>

<script>
import { Form, Field } from 'vee-validate'
import AuthLayout from '@/layouts/AuthLayout.vue'
import IconArtRegister from '@/components/icons/IconArtRegister.vue'
import IconChecked from '@/components/icons/IconChecked.vue'
import BaseLabel from '@/components/ui/BaseLabel.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import ValidationError from '@/components/ui/ValidationError.vue'

export default {
  components: {
    Form,
    Field,
    AuthLayout,
    IconArtRegister,
    IconChecked,
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
