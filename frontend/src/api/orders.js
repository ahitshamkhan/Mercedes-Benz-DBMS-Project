import axios from './axiosConfig'

export const getMyOrders = () => {
  return axios.get('/orders/my')
}

export const getOrderById = (id) => {
  return axios.get(`/orders/${id}`)
}

export const placeOrder = (orderData) => {
  return axios.post('/orders', orderData)
}

export const trackOrder = (id) => {
  return axios.get(`/orders/${id}/tracking`)
}
