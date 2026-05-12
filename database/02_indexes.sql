USE mercedes_benz;

CREATE INDEX idx_users_role ON users(role);

CREATE INDEX idx_cars_category ON cars(category);
CREATE INDEX idx_cars_featured ON cars(is_featured);
CREATE INDEX idx_cars_new_arrival ON cars(is_new_arrival);
CREATE INDEX idx_cars_year ON cars(year);
CREATE INDEX idx_cars_model ON cars(model);

CREATE INDEX idx_car_images_car_id ON car_images(car_id);

CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_car_id ON orders(car_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created_at ON orders(created_at);

CREATE INDEX idx_wishlist_user_id ON wishlist(user_id);

CREATE INDEX idx_test_drives_user_id ON test_drive_bookings(user_id);
CREATE INDEX idx_test_drives_status ON test_drive_bookings(status);
CREATE INDEX idx_test_drives_date ON test_drive_bookings(date);

CREATE INDEX idx_services_user_id ON service_bookings(user_id);
CREATE INDEX idx_services_status ON service_bookings(status);

CREATE INDEX idx_staff_dealership_id ON dealership_staff(dealership_id);

CREATE INDEX idx_chat_sender ON chat_messages(sender_id);
CREATE INDEX idx_chat_receiver ON chat_messages(receiver_id);
CREATE INDEX idx_chat_is_read ON chat_messages(is_read);
CREATE INDEX idx_chat_created_at ON chat_messages(created_at);
