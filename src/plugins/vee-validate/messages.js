import { configure } from 'vee-validate'

configure({
  generateMessage: (context) => {
    if (context.rule.name === 'required') {
      return `The ${context.field} is required`
    }
    if (context.rule.name === 'min') {
      return `The ${context.field} has to be at least ${context.rule.params} characters`
    }
    if (context.rule.name === 'email') {
      return `The ${context.field} must be a valid email address`
    }
    if (context.rule.name === 'confirmed') {
      return 'The passwords must match'
    }
    if (context.rule.name === 'accept') {
      return 'You must accept to proceed'
    }
    return `The ${context.field} is not valid`
  }
})
