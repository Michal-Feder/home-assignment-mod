import axios from 'axios'

export const apiProducts = axios.create({
  baseURL: 'http://localhost:5264',
})

export const apiOrders = axios.create({
  baseURL: 'http://localhost:3000', 
})