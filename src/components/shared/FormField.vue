<template>
  <div>
    <label :for="name" class="text-sm text-custom-gray-700 mb-1.5 block">{{ label }}</label>
    <Field :name="name" :rules="rules" v-slot="{ field, errors }">
      <div class="relative group">
        <input
          :id="name"
          class="block border w-full h-14 pl-4 pr-9 rounded-0.5xl outline-blue-light outline-4"
          :class="{ 'border-custom-gray-300': !errors[0], 'border-red-error-soft': !!errors[0] }"
          :type="showPassword ? 'text' : type"
          :placeholder="placeholder"
          v-bind="field"
        />
        <IconEye
          v-if="type === 'password'"
          class="absolute right-4 top-5 cursor-pointer"
          @click="showPassword = !showPassword"
        />
        <IconAlert
          v-else-if="!!errors[0]"
          class="absolute right-4 top-5 group-focus-within:hidden"
        />
      </div>
      <p class="mt-1.5 text-red-error text-sm">{{ errors[0] }}</p>
    </Field>
  </div>
</template>

<script>
import { Field } from 'vee-validate'
import IconAlert from '@/components/icons/IconAlert.vue'
import IconEye from '@/components/icons/IconEye.vue'

export default {
  components: {
    Field,
    IconAlert,
    IconEye
  },
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false
    },
    type: {
      type: String,
      default: 'text'
    },
    rules: {
      type: String || Object,
      required: false
    }
  },
  data() {
    return {
      showPassword: false
    }
  }
}
</script>
