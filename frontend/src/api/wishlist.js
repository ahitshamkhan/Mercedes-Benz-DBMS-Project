import axios from './axiosConfig'

export const getWishlist = () => {
  return axios.get('/wishlist')
}

export const addToWishlist = (carId) => {
  return axios.post('/wishlist', { carId })
}

export const removeFromWishlist = (carId) => {
  return axios.delete(`/wishlist/${carId}`)
}
