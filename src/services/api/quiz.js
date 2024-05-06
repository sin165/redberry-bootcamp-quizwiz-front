import { fetchData } from '@/services/api/fetchData'

export const getCategories = async () => {
  return await fetchData('/categories')
}

export const getDifficulties = async () => {
  return await fetchData('/difficulties')
}

export const getQuizzes = async (params) => {
  return await fetchData('/quizzes', 'GET', null, true, params)
}

export const getQuiz = async (id) => {
  return await fetchData('/quizzes/' + id, 'GET', null, true)
}

export const submitAnswers = async (quizId, answers, time) => {
  return await fetchData(`/quizzes/${quizId}/result`, 'POST', { answers, time }, true)
}
