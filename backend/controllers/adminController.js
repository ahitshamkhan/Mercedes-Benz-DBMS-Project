const db = require('../config/db');

const getStats = async (req, res) => {
    try {
        const [stats] = await db.query('SELECT * FROM dashboard_stats');
        res.json(stats[0]);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch stats' });
    }
};

const getAllCars = async (req, res) => {
    try {
        const [cars] = await db.query(`
            SELECT c.*, ci.image_url AS primary_image
            FROM cars c
            LEFT JOIN car_images ci ON c.id = ci.car_id AND ci.is_primary = TRUE
            ORDER BY c.created_at DESC
        `);
        res.json(cars);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch cars' });
    }
};

const createCar = async (req, res) => {
    try {
        const { model, category, price, year, description, horsepower, engine, transmission, fuel_type, color, is_featured, is_new_arrival, image_url } = req.body;

        const [result] = await db.query(
            `INSERT INTO cars (model, category, price, year, description, horsepower, engine, transmission, fuel_type, color, is_featured, is_new_arrival)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [model, category, price, year, description || null, horsepower || null, engine || null, transmission || null, fuel_type || null, color || null, is_featured || false, is_new_arrival || false]
        );

        if (image_url) {
            await db.query(
                'INSERT INTO car_images (car_id, image_url, is_primary) VALUES (?, ?, TRUE)',
                [result.insertId, image_url]
            );
        }

        res.status(201).json({ message: 'Car created', carId: result.insertId });
    } catch (err) {
        res.status(500).json({ message: 'Failed to create car' });
    }
};

const updateCar = async (req, res) => {
    try {
        const { model, category, price, year, description, horsepower, engine, transmission, fuel_type, color, is_featured, is_new_arrival } = req.body;

        await db.query(
            `UPDATE cars SET model=?, category=?, price=?, year=?, description=?, horsepower=?, engine=?, transmission=?, fuel_type=?, color=?, is_featured=?, is_new_arrival=? WHERE id=?`,
            [model, category, price, year, description, horsepower, engine, transmission, fuel_type, color, is_featured || false, is_new_arrival || false, req.params.id]
        );

        res.json({ message: 'Car updated' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to update car' });
    }
};

const deleteCar = async (req, res) => {
    try {
        await db.query('DELETE FROM car_images WHERE car_id = ?', [req.params.id]);
        await db.query('DELETE FROM cars WHERE id = ?', [req.params.id]);
        res.json({ message: 'Car deleted' });
    } catch (err) {
        if (err.code === 'ER_ROW_IS_REFERENCED_2') {
            return res.status(400).json({ message: 'Cannot delete — this car has active orders' });
        }
        res.status(500).json({ message: 'Failed to delete car' });
    }
};

const getAllOrders = async (req, res) => {
    try {
        const [orders] = await db.query(`
            SELECT o.id, o.total_price, o.status, o.payment_method, o.created_at,
                   u.name AS customer_name, u.email AS customer_email,
                   c.model AS car_model
            FROM orders o
            JOIN users u ON o.user_id = u.id
            JOIN cars c ON o.car_id = c.id
            ORDER BY o.created_at DESC
        `);
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch orders' });
    }
};

const updateOrderStatus = async (req, res) => {
    try {
        const { status } = req.body;
        await db.query('UPDATE orders SET status = ? WHERE id = ?', [status, req.params.id]);
        res.json({ message: 'Order status updated' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to update order' });
    }
};

const getAllCustomers = async (req, res) => {
    try {
        const [customers] = await db.query('SELECT * FROM customer_directory ORDER BY created_at DESC');
        res.json(customers);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch customers' });
    }
};

const deleteCustomer = async (req, res) => {
    try {
        await db.query("DELETE FROM users WHERE id = ? AND role = 'customer'", [req.params.id]);
        res.json({ message: 'Customer deleted' });
    } catch (err) {
        if (err.code === 'ER_ROW_IS_REFERENCED_2') {
            return res.status(400).json({ message: 'Cannot delete — customer has active orders' });
        }
        res.status(500).json({ message: 'Failed to delete customer' });
    }
};

module.exports = { getStats, getAllCars, createCar, updateCar, deleteCar, getAllOrders, updateOrderStatus, getAllCustomers, deleteCustomer };
