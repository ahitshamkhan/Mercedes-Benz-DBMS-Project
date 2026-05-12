const db = require('../config/db');

const bookService = async (req, res) => {
    try {
        const { serviceType, dealership, date, notes } = req.body;

        const [result] = await db.query(
            'INSERT INTO service_bookings (user_id, service_type, dealership, date, notes) VALUES (?, ?, ?, ?, ?)',
            [req.user.id, serviceType, dealership, date, notes || null]
        );

        res.status(201).json({ message: 'Service booked successfully', serviceId: result.insertId });
    } catch (err) {
        res.status(500).json({ message: 'Failed to book service' });
    }
};

const getMyServices = async (req, res) => {
    try {
        const [services] = await db.query(`
            SELECT id, service_type, dealership AS dealer, date, notes, status, created_at,
                CASE service_type
                    WHEN 'oil_change' THEN 'Oil Change & Filter Replacement'
                    WHEN 'tire_service' THEN 'Tyre Rotation & Dynamic Balance'
                    WHEN 'inspection' THEN 'Full Performance Inspection'
                    WHEN 'repair' THEN 'Mechanical Repair & Diagnostic'
                    WHEN 'full_service' THEN 'Complete Annual Service Package'
                    ELSE service_type
                END AS title,
                CASE service_type
                    WHEN 'oil_change' THEN 'oil_barrel'
                    WHEN 'tire_service' THEN 'tire_repair'
                    WHEN 'inspection' THEN 'fact_check'
                    WHEN 'repair' THEN 'build'
                    WHEN 'full_service' THEN 'verified_user'
                    ELSE 'tools_wrench'
                END AS icon
            FROM service_bookings
            WHERE user_id = ?
            ORDER BY date DESC
        `, [req.user.id]);
        res.json(services);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch services' });
    }
};

const cancelService = async (req, res) => {
    try {
        await db.query(
            "UPDATE service_bookings SET status = 'cancelled' WHERE id = ? AND user_id = ?",
            [req.params.id, req.user.id]
        );
        res.json({ message: 'Service cancelled' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to cancel service' });
    }
};

module.exports = { bookService, getMyServices, cancelService };
