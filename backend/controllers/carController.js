const db = require('../config/db');

const getAllCars = async (req, res) => {
    try {
        const [cars] = await db.query(`
            SELECT c.*, ci.image_url AS primary_image
            FROM cars c
            LEFT JOIN car_images ci ON c.id = ci.car_id AND ci.is_primary = TRUE
            ORDER BY c.is_featured DESC, c.created_at DESC
        `);
        res.json(cars);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch cars' });
    }
};

const getCarById = async (req, res) => {
    try {
        const [cars] = await db.query('SELECT * FROM cars WHERE id = ?', [req.params.id]);
        if (cars.length === 0) return res.status(404).json({ message: 'Car not found' });

        const [images] = await db.query('SELECT * FROM car_images WHERE car_id = ?', [req.params.id]);

        const car = cars[0];
        car.images = images;
        car.primary_image = images.find(img => img.is_primary)?.image_url || images[0]?.image_url || null;

        res.json(car);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch car details' });
    }
};

const getFeaturedCars = async (req, res) => {
    try {
        const [cars] = await db.query(`
            SELECT c.*, ci.image_url AS primary_image
            FROM cars c
            LEFT JOIN car_images ci ON c.id = ci.car_id AND ci.is_primary = TRUE
            WHERE c.is_featured = TRUE
            ORDER BY c.created_at DESC
        `);
        res.json(cars);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch featured cars' });
    }
};

const getNewArrivals = async (req, res) => {
    try {
        const [cars] = await db.query(`
            SELECT c.*, ci.image_url AS primary_image
            FROM cars c
            LEFT JOIN car_images ci ON c.id = ci.car_id AND ci.is_primary = TRUE
            WHERE c.is_new_arrival = TRUE
            ORDER BY c.created_at DESC
        `);
        res.json(cars);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch new arrivals' });
    }
};

const getCarsByCategory = async (req, res) => {
    try {
        const [cars] = await db.query(`
            SELECT c.*, ci.image_url AS primary_image
            FROM cars c
            LEFT JOIN car_images ci ON c.id = ci.car_id AND ci.is_primary = TRUE
            WHERE c.category LIKE ?
            ORDER BY c.price DESC
        `, [`%${req.params.type}%`]);
        res.json(cars);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch cars by category' });
    }
};

const searchCars = async (req, res) => {
    try {
        const query = req.query.q || '';
        const [cars] = await db.query(`
            SELECT c.*, ci.image_url AS primary_image
            FROM cars c
            LEFT JOIN car_images ci ON c.id = ci.car_id AND ci.is_primary = TRUE
            WHERE c.model LIKE ? OR c.category LIKE ? OR c.color LIKE ?
            ORDER BY c.is_featured DESC, c.created_at DESC
        `, [`%${query}%`, `%${query}%`, `%${query}%`]);
        res.json(cars);
    } catch (err) {
        res.status(500).json({ message: 'Failed to search cars' });
    }
};

module.exports = { getAllCars, getCarById, getFeaturedCars, getNewArrivals, getCarsByCategory, searchCars };
