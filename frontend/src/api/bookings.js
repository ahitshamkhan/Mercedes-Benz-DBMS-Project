import axios from './axiosConfig'

export const bookTestDrive = (data) => {
  return axios.post('/bookings/test-drive', data)
}

export const getMyTestDrives = () => {
  return axios.get('/bookings/test-drives')
}

export const cancelTestDrive = (id) => {
  return axios.delete(`/bookings/test-drive/${id}`)
}
