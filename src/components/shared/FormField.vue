<template>
  <div>
    <label :for="name" class="text-sm text-custom-gray-700 mb-1.5 block">{{ label }}</label>
    <Field :name="name" :rules="rules" v-slot="{ field, errors }">
      <input
        :id="name"
        class="block border w-full h-14 px-4 rounded-0.5xl"
        :class="{ 'border-custom-gray-300': !errors[0], 'border-red-error-soft': !!errors[0] }"
        :type="type"
        :placeholder="placeholder"
        v-bind="field"
      />
      <p class="mt-1.5 text-red-error text-sm">{{ errors[0] }}</p>
    </Field>
  </div>
</template>

<script>
import { Field } from 'vee-validate'

export default {
  components: {
    Field
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
  }
}
</script>
