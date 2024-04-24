import { fetchData } from '@/services/api/fetchData'

export const getCategories = async () => {
  return await fetchData('/categories')
}

export const getQuizzes = async (url = '/quizzes') => {
  return await fetchData(url, 'GET', null, true)
}
