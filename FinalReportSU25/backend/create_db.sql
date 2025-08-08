-- Tạo database và bảng users cho MixueShop
CREATE DATABASE IF NOT EXISTS mixueshop;
USE mixueshop;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(50),
  lastName VARCHAR(50),
  phone VARCHAR(20),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255),
  role ENUM('customer','staff','admin') DEFAULT 'customer'
);
