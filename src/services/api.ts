import axios from 'axios'
import { SnackData } from '../interfaces/SnackData'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const getHair = () => api.get<SnackData[]>('/hair')
export const getBeard = () => api.get<SnackData[]>('/beard')
export const getEyebrow = () => api.get<SnackData[]>('/eyebrow')
export const getContact = () => api.get<SnackData[]>('/contact')

export default api
