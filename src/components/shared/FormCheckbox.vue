<template>
  <Field
    v-slot="{ field, errors }"
    :name="name"
    type="checkbox"
    :value="true"
    :unchecked-value="false"
    :rules="rules"
  >
    <label class="flex gap-3">
      <input type="checkbox" :name="name" v-bind="field" :value="true" class="peer hidden" />
      <div
        class="size-5 rounded-full border border-custom-gray-400 *:hidden peer-checked:border-none peer-checked:*:block"
      >
        <IconChecked />
      </div>
      <span class="text-custom-gray-700 text-sm">{{ label }}</span>
    </label>
    <p class="mt-1.5 text-red-error text-sm">{{ errors[0] }}</p>
  </Field>
</template>

<script>
import { Field } from 'vee-validate'
import IconChecked from '@/components/icons/IconChecked.vue'

export default {
  components: {
    Field,
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
