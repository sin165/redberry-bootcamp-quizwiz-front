import { getCookie } from '@/services/getCookie'
const backendUrl = import.meta.env.VITE_BACKEND_URL

export const fetchData = async (path, method = 'GET', values = null, withXSRF = false) => {
  const options = {
    method: method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }

  if (values) {
    options.body = JSON.stringify(values)
  }

  if (withXSRF) {
    await fetch(backendUrl + '/sanctum/csrf-cookie', {
      credentials: 'include'
    })
    options.headers['X-XSRF-TOKEN'] = getCookie('XSRF-TOKEN')
  }

  if (!path.startsWith('http')) {
    path = backendUrl + '/api' + path
  }

  const response = await fetch(path, options)
  const data = await response.json()
  return {
    status: response.status,
    data: data
  }
}
