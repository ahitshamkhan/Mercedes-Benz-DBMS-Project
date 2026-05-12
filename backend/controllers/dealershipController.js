const db = require('../config/db');

const getAllDealerships = async (req, res) => {
    try {
        const [dealerships] = await db.query('SELECT * FROM dealerships ORDER BY city');
        res.json(dealerships);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch dealerships' });
    }
};

const getDealershipById = async (req, res) => {
    try {
        const [dealerships] = await db.query('SELECT * FROM dealerships WHERE id = ?', [req.params.id]);
        if (dealerships.length === 0) return res.status(404).json({ message: 'Dealership not found' });

        const [staff] = await db.query('SELECT * FROM dealership_staff WHERE dealership_id = ?', [req.params.id]);

        const [inventory] = await db.query(`
            SELECT c.*, ci.image_url AS primary_image
            FROM cars c
            LEFT JOIN car_images ci ON c.id = ci.car_id AND ci.is_primary = TRUE
            LIMIT 5
        `);

        const dealership = dealerships[0];
        dealership.staff = staff;
        dealership.inventory = inventory;

        res.json(dealership);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch dealership details' });
    }
};

module.exports = { getAllDealerships, getDealershipById };
