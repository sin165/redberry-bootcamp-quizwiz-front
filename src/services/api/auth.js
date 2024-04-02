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
