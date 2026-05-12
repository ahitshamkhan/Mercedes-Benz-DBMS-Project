const express = require('express');
const router = express.Router();
const { bookTestDrive, getMyTestDrives, cancelTestDrive } = require('../controllers/bookingController');
const { protect } = require('../middleware/authMiddleware');

router.post('/test-drive', protect, bookTestDrive);
router.get('/test-drives', protect, getMyTestDrives);
router.delete('/test-drive/:id', protect, cancelTestDrive);

module.exports = router;
