import axios from './axiosConfig'

export const getMessages = () => {
  return axios.get('/chat/messages')
}

export const sendMessage = (message) => {
  return axios.post('/chat/messages', { message })
}
