const express = require('express');
const router = express.Router();
const { getMyOrders, getOrderById, placeOrder, getOrderTracking } = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');

router.get('/my', protect, getMyOrders);
router.get('/:id/tracking', protect, getOrderTracking);
router.get('/:id', protect, getOrderById);
router.post('/', protect, placeOrder);

module.exports = router;
