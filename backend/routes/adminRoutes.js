const express = require('express');
const router = express.Router();
const { protect, adminOnly } = require('../middleware/authMiddleware');
const {
    getStats,
    getAllCars, createCar, updateCar, deleteCar,
    getAllOrders, updateOrderStatus,
    getAllCustomers, deleteCustomer
} = require('../controllers/adminController');

router.get('/stats', protect, adminOnly, getStats);

router.get('/cars', protect, adminOnly, getAllCars);
router.post('/cars', protect, adminOnly, createCar);
router.put('/cars/:id', protect, adminOnly, updateCar);
router.delete('/cars/:id', protect, adminOnly, deleteCar);

router.get('/orders', protect, adminOnly, getAllOrders);
router.put('/orders/:id', protect, adminOnly, updateOrderStatus);

router.get('/customers', protect, adminOnly, getAllCustomers);
router.delete('/customers/:id', protect, adminOnly, deleteCustomer);

module.exports = router;
