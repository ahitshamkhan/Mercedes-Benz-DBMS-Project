const express = require('express');
const router = express.Router();
const { getMyOrders, getOrderById, placeOrder, getOrderTracking } = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');

router.get('/my', protect, getMyOrders);
router.get('/:id', protect, getOrderById);
router.get('/:id/tracking', protect, getOrderTracking);
router.post('/', protect, placeOrder);

module.exports = router;
