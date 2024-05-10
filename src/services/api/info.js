import { fetchData } from '@/services/api/fetchData'

export const getStatistics = async () => {
  return await fetchData('/statistics')
}
