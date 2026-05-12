const db = require('../config/db');

const getWishlist = async (req, res) => {
    try {
        const [items] = await db.query(`
            SELECT w.id, w.car_id, w.created_at,
                   c.model, c.category, c.price, c.color, c.year,
                   ci.image_url AS primary_image
            FROM wishlist w
            JOIN cars c ON w.car_id = c.id
            LEFT JOIN car_images ci ON c.id = ci.car_id AND ci.is_primary = TRUE
            WHERE w.user_id = ?
            ORDER BY w.created_at DESC
        `, [req.user.id]);
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch wishlist' });
    }
};

const addToWishlist = async (req, res) => {
    try {
        const { carId } = req.body;
        await db.query('INSERT INTO wishlist (user_id, car_id) VALUES (?, ?)', [req.user.id, carId]);
        res.status(201).json({ message: 'Added to wishlist' });
    } catch (err) {
        if (err.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ message: 'Already in wishlist' });
        }
        res.status(500).json({ message: 'Failed to add to wishlist' });
    }
};

const removeFromWishlist = async (req, res) => {
    try {
        await db.query('DELETE FROM wishlist WHERE user_id = ? AND car_id = ?', [req.user.id, req.params.carId]);
        res.json({ message: 'Removed from wishlist' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to remove from wishlist' });
    }
};

module.exports = { getWishlist, addToWishlist, removeFromWishlist };
