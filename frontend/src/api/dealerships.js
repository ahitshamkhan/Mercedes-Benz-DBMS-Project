import axios from './axiosConfig'

export const getAllDealerships = () => {
  return axios.get('/dealerships')
}

export const getDealershipById = (id) => {
  return axios.get(`/dealerships/${id}`)
}
