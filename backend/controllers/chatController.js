const db = require('../config/db');

const getMessages = async (req, res) => {
    try {
        const [messages] = await db.query(`
            SELECT m.id, m.message, m.is_read, m.created_at,
                   m.sender_id, m.receiver_id,
                   s.name AS sender_name, s.role AS sender_role,
                   r.name AS receiver_name
            FROM chat_messages m
            JOIN users s ON m.sender_id = s.id
            LEFT JOIN users r ON m.receiver_id = r.id
            WHERE m.sender_id = ? OR m.receiver_id = ?
            ORDER BY m.created_at ASC
        `, [req.user.id, req.user.id]);
        res.json(messages);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch messages' });
    }
};

const sendMessage = async (req, res) => {
    try {
        const { message, receiverId } = req.body;

        let receiver = receiverId;
        if (!receiver) {
            const [admins] = await db.query("SELECT id FROM users WHERE role = 'admin' LIMIT 1");
            if (admins.length > 0) receiver = admins[0].id;
        }

        const [result] = await db.query(
            'INSERT INTO chat_messages (sender_id, receiver_id, message) VALUES (?, ?, ?)',
            [req.user.id, receiver, message]
        );

        res.status(201).json({
            id: result.insertId,
            sender_id: req.user.id,
            receiver_id: receiver,
            message,
            is_read: false,
            created_at: new Date()
        });
    } catch (err) {
        res.status(500).json({ message: 'Failed to send message' });
    }
};

module.exports = { getMessages, sendMessage };
