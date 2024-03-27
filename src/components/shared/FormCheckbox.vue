<template>
  <label class="flex gap-3">
    <Field
      :name="name"
      type="checkbox"
      :value="true"
      :unchecked-value="false"
      :rules="rules"
      class="peer hidden"
    />
    <div
      class="size-5 rounded-full border border-custom-gray-400 *:hidden peer-checked:border-none peer-checked:*:block"
    >
      <IconChecked />
    </div>
    <span class="text-custom-gray-700 text-sm">{{ label }}</span>
  </label>
  <p class="mt-1.5 text-red-error text-sm">
    <ErrorMessage :name="name" />
  </p>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate'
import IconChecked from '@/components/icons/IconChecked.vue'

export default {
  components: {
    Field,
    ErrorMessage,
    IconChecked
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
    rules: {
      type: String || Object,
      required: false
    }
  }
}
</script>
