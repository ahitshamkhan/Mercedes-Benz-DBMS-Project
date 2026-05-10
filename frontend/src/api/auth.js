import axios from './axiosConfig'

// Send login request to backend
export const loginUser = (email, password) => {
  return axios.post('/auth/login', { email, password })
}

// Send register request to backend
export const registerUser = (name, email, password, phone) => {
  return axios.post('/auth/register', { name, email, password, phone })
}