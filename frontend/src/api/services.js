import axios from './axiosConfig'

export const bookService = (data) => {
  return axios.post('/services/book', data)
}

export const getMyServices = () => {
  return axios.get('/services/my')
}

export const cancelService = (id) => {
  return axios.delete(`/services/${id}`)
}
