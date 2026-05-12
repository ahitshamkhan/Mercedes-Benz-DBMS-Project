const db = require('../config/db');

const bookTestDrive = async (req, res) => {
    try {
        const { carId, dealership, date, time } = req.body;

        let dealershipId = null;
        if (dealership) {
            const [dealers] = await db.query('SELECT id FROM dealerships WHERE name LIKE ?', [`%${dealership}%`]);
            if (dealers.length > 0) dealershipId = dealers[0].id;
        }

        const [result] = await db.query(
            'INSERT INTO test_drive_bookings (user_id, car_id, dealership_id, date, time_slot) VALUES (?, ?, ?, ?, ?)',
            [req.user.id, carId || null, dealershipId, date, time]
        );

        res.status(201).json({ message: 'Test drive booked successfully', bookingId: result.insertId });
    } catch (err) {
        if (err.sqlState === '45000') {
            return res.status(400).json({ message: err.message });
        }
        res.status(500).json({ message: 'Failed to book test drive' });
    }
};

const getMyTestDrives = async (req, res) => {
    try {
        const [bookings] = await db.query(`
            SELECT t.id, t.date, t.time_slot AS time, t.status, t.created_at,
                   c.model AS car, c.color AS variant,
                   d.name AS dealer,
                   ci.image_url AS image
            FROM test_drive_bookings t
            LEFT JOIN cars c ON t.car_id = c.id
            LEFT JOIN dealerships d ON t.dealership_id = d.id
            LEFT JOIN car_images ci ON c.id = ci.car_id AND ci.is_primary = TRUE
            WHERE t.user_id = ?
            ORDER BY t.date DESC
        `, [req.user.id]);
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch test drives' });
    }
};

const cancelTestDrive = async (req, res) => {
    try {
        await db.query(
            "UPDATE test_drive_bookings SET status = 'cancelled' WHERE id = ? AND user_id = ?",
            [req.params.id, req.user.id]
        );
        res.json({ message: 'Test drive cancelled' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to cancel test drive' });
    }
};

module.exports = { bookTestDrive, getMyTestDrives, cancelTestDrive };
