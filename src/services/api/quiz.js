import { fetchData } from '@/services/api/fetchData'

export const getCategories = async () => {
  return await fetchData('/categories')
}

export const getDifficulties = async () => {
  return await fetchData('/difficulties')
}

export const getQuizzes = async (params) => {
  let url = '/quizzes'
  if (params) {
    url += '?' + params
  }
  return await fetchData(url, 'GET', null, true)
}
