import axios from './axiosConfig'

export const getAllCars = () => {
  return axios.get('/cars')
}

export const getCarById = (id) => {
  return axios.get(`/cars/${id}`)
}

export const getCarsByCategory = (category) => {
  return axios.get(`/cars/category/${category}`)
}

export const searchCars = (query) => {
  return axios.get(`/cars/search?q=${query}`)
}

export const getFeaturedCars = () => {
  return axios.get('/cars/featured')
}

export const getNewArrivals = () => {
  return axios.get('/cars/new-arrivals')
}
