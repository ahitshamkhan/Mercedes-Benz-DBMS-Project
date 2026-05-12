USE mercedes_benz;

DELIMITER //

CREATE PROCEDURE PlaceOrder(
    IN p_user_id INT,
    IN p_car_id INT,
    IN p_payment_method VARCHAR(50)
)
BEGIN
    DECLARE car_price DECIMAL(12,2);
    SELECT price INTO car_price FROM cars WHERE id = p_car_id;
    
    IF car_price IS NULL THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Car not found';
    END IF;

    INSERT INTO orders (user_id, car_id, total_price, payment_method, status)
    VALUES (p_user_id, p_car_id, car_price, p_payment_method, 'pending');

    SELECT LAST_INSERT_ID() AS order_id;
END //

CREATE PROCEDURE GetUserDashboard(IN p_user_id INT)
BEGIN
    SELECT 
        (SELECT COUNT(*) FROM orders WHERE user_id = p_user_id) AS total_orders,
        (SELECT COUNT(*) FROM wishlist WHERE user_id = p_user_id) AS wishlist_count,
        (SELECT COUNT(*) FROM test_drive_bookings WHERE user_id = p_user_id) AS test_drives,
        (SELECT COUNT(*) FROM service_bookings WHERE user_id = p_user_id) AS services;
END //

CREATE PROCEDURE GetAdminStats()
BEGIN
    SELECT * FROM dashboard_stats;
END //

CREATE PROCEDURE UpdateOrderStatus(
    IN p_order_id INT,
    IN p_new_status VARCHAR(20)
)
BEGIN
    UPDATE orders SET status = p_new_status WHERE id = p_order_id;
    SELECT * FROM order_details WHERE order_id = p_order_id;
END //

CREATE PROCEDURE SearchCars(IN p_query VARCHAR(100))
BEGIN
    SELECT c.*, ci.image_url AS primary_image
    FROM cars c
    LEFT JOIN car_images ci ON c.id = ci.car_id AND ci.is_primary = TRUE
    WHERE c.model LIKE CONCAT('%', p_query, '%')
       OR c.category LIKE CONCAT('%', p_query, '%')
       OR c.color LIKE CONCAT('%', p_query, '%')
    ORDER BY c.is_featured DESC, c.created_at DESC;
END //

DELIMITER ;
