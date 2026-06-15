CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(20) DEFAULT 'user'
);

CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  description TEXT,
  image_url VARCHAR(255)
);

-- Default admin: username: admin, password: password123 (hashed with bcrypt)
INSERT IGNORE INTO users (username, password, role) VALUES ('admin', '$2b$10$n7cJOW9V3Y74E89Idzr6yOFFk5d5k/1RUPfAdPgHY.4xJguZoUNV6', 'admin');

INSERT IGNORE INTO products (name, price, description, image_url) VALUES 
('Raw Silk Scarf', 45.00, 'Natural un-dyed silk scarf with organic texture.', '/images/img_1.png'),
('Indigo Dyed Shawl', 120.00, 'Hand-dyed using traditional indigo plant extraction.', '/images/img_2.png'),
('Wabi-Sabi Silk Robe', 250.00, 'Imperfectly perfect robe, comfortable and breathable.', '/images/img_3.png');
