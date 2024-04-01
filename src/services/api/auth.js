import { fetchData } from '@/services/api/fetchData'

export const register = async (values) => {
  return await fetchData('/register', 'POST', values, true)
}
