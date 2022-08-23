import { LoginResponse } from './types'
import axios from 'axios'
import { stringify } from 'qs'

const api = axios.create({
  withCredentials: true,
  paramsSerializer: (params) => {
    return stringify(params, { arrayFormat: 'repeat' })
  },
})

api.defaults.headers.common['Content-Type'] = 'application/json'

export const refreshAccessTokenFn = async () => {
  const response = await api.post<LoginResponse>('api/v1/security/refresh')
  localStorage.setItem('access_token', response.data.access_token)
  localStorage.setItem('refresh_token', response.data.refresh_token)
  return response.data
}

api.interceptors.request.use((request) => {
  if (request.headers) {
    request.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token') || ''}`
  }
  return request
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      await refreshAccessTokenFn()
      return api(originalRequest)
    }
    return Promise.reject(error)
  }
)

export default api
