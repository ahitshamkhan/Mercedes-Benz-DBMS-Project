USE mercedes_benz;

CREATE VIEW order_details AS
SELECT 
    o.id            AS order_id,
    o.user_id,
    o.car_id,
    o.total_price,
    o.status,
    o.payment_method,
    o.created_at    AS order_date,
    u.name          AS customer_name,
    u.email         AS customer_email,
    u.phone         AS customer_phone,
    c.model         AS car_model,
    c.category      AS car_category,
    c.color         AS car_color,
    c.year          AS car_year
FROM orders o
JOIN users u ON o.user_id = u.id
JOIN cars c  ON o.car_id  = c.id;

CREATE VIEW test_drive_details AS
SELECT 
    t.id            AS booking_id,
    t.user_id,
    t.date,
    t.time_slot,
    t.status,
    t.created_at,
    u.name          AS customer_name,
    u.email         AS customer_email,
    c.model         AS car_model,
    c.color         AS car_variant,
    d.name          AS dealership_name,
    d.city          AS dealership_city
FROM test_drive_bookings t
JOIN users u        ON t.user_id = u.id
LEFT JOIN cars c    ON t.car_id = c.id
LEFT JOIN dealerships d ON t.dealership_id = d.id;

CREATE VIEW service_details AS
SELECT 
    s.id            AS service_id,
    s.user_id,
    s.service_type,
    s.dealership,
    s.date,
    s.notes,
    s.status,
    s.created_at,
    u.name          AS customer_name,
    u.email         AS customer_email
FROM service_bookings s
JOIN users u ON s.user_id = u.id;

CREATE VIEW wishlist_details AS
SELECT 
    w.id            AS wishlist_id,
    w.user_id,
    w.car_id,
    w.created_at,
    c.model         AS car_model,
    c.category      AS car_category,
    c.price         AS car_price,
    c.color         AS car_color,
    c.year          AS car_year,
    ci.image_url    AS car_image
FROM wishlist w
JOIN cars c ON w.car_id = c.id
LEFT JOIN car_images ci ON c.id = ci.car_id AND ci.is_primary = TRUE;

CREATE VIEW dashboard_stats AS
SELECT
    (SELECT COUNT(*) FROM orders)                                   AS total_orders,
    (SELECT COUNT(*) FROM orders WHERE status = 'delivered')        AS delivered_orders,
    (SELECT COUNT(*) FROM users WHERE role = 'customer')            AS total_customers,
    (SELECT COUNT(*) FROM cars)                                     AS total_cars,
    (SELECT COALESCE(SUM(total_price), 0) FROM orders 
     WHERE status != 'cancelled')                                   AS total_revenue;

CREATE VIEW customer_directory AS
SELECT 
    id,
    name,
    email,
    phone,
    role,
    created_at,
    (SELECT COUNT(*) FROM orders o WHERE o.user_id = users.id)  AS total_orders
FROM users
WHERE role = 'customer';
