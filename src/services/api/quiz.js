import { fetchData } from '@/services/api/fetchData'

export const getCategories = async () => {
  return await fetchData('/categories')
}
