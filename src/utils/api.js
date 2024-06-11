// src/utils/api.js

import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://3.39.228.111/api', // Your API base URL
  headers: {
    'Content-Type': 'application/json'
  }
})

apiClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

apiClient.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token')
      // Optionally redirect to login page
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default apiClient
