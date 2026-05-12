const express = require('express');
const router = express.Router();
const { getAllCars, getCarById, getFeaturedCars, getNewArrivals, getCarsByCategory, searchCars } = require('../controllers/carController');

router.get('/', getAllCars);
router.get('/featured', getFeaturedCars);
router.get('/new-arrivals', getNewArrivals);
router.get('/search', searchCars);
router.get('/category/:type', getCarsByCategory);
router.get('/:id', getCarById);

module.exports = router;
