import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const getHair = () => api.get('/hair')
export const getBeard = () => api.get('/beard')
export const getEyebrow = () => api.get('/eyebrow')
export const getContact = () => api.get('/contact')

export default api
