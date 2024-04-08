import { fetchData } from '@/services/api/fetchData'

export const register = async (values) => {
  return await fetchData('/register', 'POST', values, true)
}

export const login = async (values) => {
  return await fetchData('/login', 'POST', values, true)
}

export const verify = async (url) => {
  return await fetchData(url)
}

export const resend = async (verifyUrl, email) => {
  const values = {}
  if (email) {
    values.email = email
  } else {
    values.id = verifyUrl.match(/verify\/(\d+)/)[1]
  }
  return await fetchData('/email/verification-notification', 'POST', values, true)
}

export const getUser = async () => {
  return await fetchData('/user')
}

export const logout = async () => {
  return await fetchData('/logout', 'POST', null, true)
}

export const sendPasswordResetLink = async (values) => {
  return await fetchData('/forgot-password', 'POST', values, true)
}

export const resetPassword = async (values) => {
  return await fetchData('/reset-password', 'POST', values, true)
}
