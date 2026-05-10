import api from './axiosConfig'

// Dashboard stats
export const getDashboardStats = () => api.get('/admin/stats')

// Cars CRUD
export const getAllCarsAdmin  = () => api.get('/admin/cars')
export const createCar       = (data) => api.post('/admin/cars', data)
export const updateCar       = (id, data) => api.put(`/admin/cars/${id}`, data)
export const deleteCar       = (id) => api.delete(`/admin/cars/${id}`)

// Orders management
export const getAllOrdersAdmin = () => api.get('/admin/orders')
export const updateOrderStatus = (id, status) => api.put(`/admin/orders/${id}`, { status })

// Customers management
export const getAllCustomers   = () => api.get('/admin/customers')
export const deleteCustomer   = (id) => api.delete(`/admin/customers/${id}`)
