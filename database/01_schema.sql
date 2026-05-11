CREATE DATABASE IF NOT EXISTS mercedes_benz;
USE mercedes_benz;

CREATE TABLE users (
    id          INT             PRIMARY KEY AUTO_INCREMENT,
    name        VARCHAR(100)    NOT NULL,
    email       VARCHAR(100)    UNIQUE NOT NULL,
    password    VARCHAR(255)    NOT NULL,
    phone       VARCHAR(20),
    role        ENUM('customer', 'admin') DEFAULT 'customer',
    created_at  TIMESTAMP       DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cars (
    id              INT             PRIMARY KEY AUTO_INCREMENT,
    model           VARCHAR(150)    NOT NULL,
    category        VARCHAR(50)     NOT NULL,
    price           DECIMAL(12,2)   NOT NULL,
    year            INT             NOT NULL,
    description     TEXT,
    horsepower      INT,
    engine          VARCHAR(100),
    transmission    VARCHAR(50),
    fuel_type       VARCHAR(30),
    color           VARCHAR(50),
    is_featured     BOOLEAN         DEFAULT FALSE,
    is_new_arrival  BOOLEAN         DEFAULT FALSE,
    created_at      TIMESTAMP       DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE car_images (
    id          INT             PRIMARY KEY AUTO_INCREMENT,
    car_id      INT             NOT NULL,
    image_url   VARCHAR(500)    NOT NULL,
    is_primary  BOOLEAN         DEFAULT FALSE,
    FOREIGN KEY (car_id) REFERENCES cars(id) ON DELETE CASCADE
);

CREATE TABLE dealerships (
    id              INT             PRIMARY KEY AUTO_INCREMENT,
    name            VARCHAR(100)    NOT NULL,
    city            VARCHAR(50)     NOT NULL,
    address         VARCHAR(255),
    phone           VARCHAR(20),
    email           VARCHAR(100),
    image_url       VARCHAR(500),
    hours_weekday   VARCHAR(30),
    hours_sunday    VARCHAR(30)
);

CREATE TABLE orders (
    id              INT             PRIMARY KEY AUTO_INCREMENT,
    user_id         INT             NOT NULL,
    car_id          INT             NOT NULL,
    total_price     DECIMAL(12,2)   NOT NULL,
    status          ENUM('pending', 'confirmed', 'preparing', 'in_transit', 'delivered', 'cancelled')
                                    DEFAULT 'pending',
    payment_method  VARCHAR(50),
    created_at      TIMESTAMP       DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE RESTRICT,
    FOREIGN KEY (car_id)  REFERENCES cars(id)  ON DELETE RESTRICT
);

CREATE TABLE wishlist (
    id          INT         PRIMARY KEY AUTO_INCREMENT,
    user_id     INT         NOT NULL,
    car_id      INT         NOT NULL,
    created_at  TIMESTAMP   DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY unique_wishlist (user_id, car_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (car_id)  REFERENCES cars(id)  ON DELETE CASCADE
);

CREATE TABLE test_drive_bookings (
    id              INT         PRIMARY KEY AUTO_INCREMENT,
    user_id         INT         NOT NULL,
    car_id          INT,
    dealership_id   INT,
    date            DATE        NOT NULL,
    time_slot       VARCHAR(20) NOT NULL,
    status          ENUM('pending', 'confirmed', 'completed', 'cancelled')
                                DEFAULT 'pending',
    created_at      TIMESTAMP   DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id)       REFERENCES users(id)        ON DELETE CASCADE,
    FOREIGN KEY (car_id)        REFERENCES cars(id)         ON DELETE SET NULL,
    FOREIGN KEY (dealership_id) REFERENCES dealerships(id)  ON DELETE SET NULL
);

CREATE TABLE service_bookings (
    id              INT             PRIMARY KEY AUTO_INCREMENT,
    user_id         INT             NOT NULL,
    service_type    VARCHAR(50)     NOT NULL,
    dealership      VARCHAR(100),
    date            DATE            NOT NULL,
    notes           TEXT,
    status          ENUM('scheduled', 'in_progress', 'completed', 'cancelled')
                                    DEFAULT 'scheduled',
    created_at      TIMESTAMP       DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE dealership_staff (
    id              INT             PRIMARY KEY AUTO_INCREMENT,
    dealership_id   INT             NOT NULL,
    name            VARCHAR(100)    NOT NULL,
    role            VARCHAR(50),
    subtitle        VARCHAR(100),
    image_url       VARCHAR(500),
    FOREIGN KEY (dealership_id) REFERENCES dealerships(id) ON DELETE CASCADE
);

CREATE TABLE chat_messages (
    id              INT         PRIMARY KEY AUTO_INCREMENT,
    sender_id       INT         NOT NULL,
    receiver_id     INT,
    message         TEXT        NOT NULL,
    is_read         BOOLEAN     DEFAULT FALSE,
    created_at      TIMESTAMP   DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_id)   REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (receiver_id) REFERENCES users(id) ON DELETE SET NULL
);
