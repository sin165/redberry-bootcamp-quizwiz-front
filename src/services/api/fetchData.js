import { getCookie } from '@/services/getCookie'
const backendUrl = import.meta.env.VITE_BACKEND_URL

export const fetchData = async (
  path,
  method = 'GET',
  values = null,
  withXSRF = false,
  params = null
) => {
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

  let url = new URL(path)
  if (params) {
    url.search = new URLSearchParams(params)
  }

  const response = await fetch(url, options)
  const data = await response.json()
  return {
    status: response.status,
    data: data
  }
}
