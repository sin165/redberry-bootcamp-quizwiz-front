import { defineRule } from 'vee-validate'
import { required, min, email, confirmed } from '@vee-validate/rules'

defineRule('required', required)
defineRule('min', min)
defineRule('email', email)
defineRule('confirmed', confirmed)

defineRule('accept', (value) => value === true)
