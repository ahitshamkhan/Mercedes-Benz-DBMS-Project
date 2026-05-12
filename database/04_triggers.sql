USE mercedes_benz;

DELIMITER //

CREATE TRIGGER set_order_price
BEFORE INSERT ON orders
FOR EACH ROW
BEGIN
    IF NEW.total_price IS NULL OR NEW.total_price = 0 THEN
        SET NEW.total_price = (SELECT price FROM cars WHERE id = NEW.car_id);
    END IF;
END //

CREATE TRIGGER prevent_self_chat
BEFORE INSERT ON chat_messages
FOR EACH ROW
BEGIN
    IF NEW.sender_id = NEW.receiver_id THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Cannot send message to yourself';
    END IF;
END //

CREATE TRIGGER prevent_duplicate_test_drive
BEFORE INSERT ON test_drive_bookings
FOR EACH ROW
BEGIN
    DECLARE existing INT;
    SELECT COUNT(*) INTO existing
    FROM test_drive_bookings
    WHERE user_id = NEW.user_id
      AND car_id = NEW.car_id
      AND date = NEW.date
      AND status != 'cancelled';
    IF existing > 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'You already have a test drive booked for this car on this date';
    END IF;
END //

CREATE TRIGGER update_order_timestamp
BEFORE UPDATE ON orders
FOR EACH ROW
BEGIN
    IF OLD.status != NEW.status THEN
        SET NEW.created_at = CURRENT_TIMESTAMP;
    END IF;
END //

DELIMITER ;
