const express = require('express');
const router = express.Router();
const { getAllDealerships, getDealershipById } = require('../controllers/dealershipController');

router.get('/', getAllDealerships);
router.get('/:id', getDealershipById);

module.exports = router;
