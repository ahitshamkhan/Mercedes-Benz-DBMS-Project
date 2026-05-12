const db = require('../config/db');

const getMyOrders = async (req, res) => {
    try {
        const [orders] = await db.query(`
            SELECT o.id, o.total_price AS price, o.status, o.payment_method, o.created_at AS date,
                   c.model AS name, ci.image_url AS image
            FROM orders o
            JOIN cars c ON o.car_id = c.id
            LEFT JOIN car_images ci ON c.id = ci.car_id AND ci.is_primary = TRUE
            WHERE o.user_id = ?
            ORDER BY o.created_at DESC
        `, [req.user.id]);
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch orders' });
    }
};

const getOrderById = async (req, res) => {
    try {
        const [orders] = await db.query(`
            SELECT o.*, c.model AS car_model, c.category, c.color, c.year,
                   ci.image_url AS car_image, u.name AS customer_name, u.email AS customer_email
            FROM orders o
            JOIN cars c ON o.car_id = c.id
            JOIN users u ON o.user_id = u.id
            LEFT JOIN car_images ci ON c.id = ci.car_id AND ci.is_primary = TRUE
            WHERE o.id = ? AND o.user_id = ?
        `, [req.params.id, req.user.id]);

        if (orders.length === 0) return res.status(404).json({ message: 'Order not found' });
        res.json(orders[0]);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch order' });
    }
};

const placeOrder = async (req, res) => {
    try {
        const { carId, paymentMethod } = req.body;

        const [cars] = await db.query('SELECT price FROM cars WHERE id = ?', [carId]);
        if (cars.length === 0) return res.status(404).json({ message: 'Car not found' });

        const [result] = await db.query(
            'INSERT INTO orders (user_id, car_id, total_price, payment_method) VALUES (?, ?, ?, ?)',
            [req.user.id, carId, cars[0].price, paymentMethod]
        );

        res.status(201).json({ message: 'Order placed successfully', orderId: result.insertId });
    } catch (err) {
        res.status(500).json({ message: 'Failed to place order' });
    }
};

const getOrderTracking = async (req, res) => {
    try {
        const [orders] = await db.query(
            'SELECT id, status, created_at FROM orders WHERE id = ? AND user_id = ?',
            [req.params.id, req.user.id]
        );
        if (orders.length === 0) return res.status(404).json({ message: 'Order not found' });
        res.json(orders[0]);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch tracking' });
    }
};

module.exports = { getMyOrders, getOrderById, placeOrder, getOrderTracking };
