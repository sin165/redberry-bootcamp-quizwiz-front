import { fetchData } from '@/services/api/fetchData'

export const getStatistics = async () => {
  return await fetchData('/statistics')
}

export const getContactInfo = async () => {
  return await fetchData('/contact-info')
}
