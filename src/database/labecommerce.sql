-- Active: 1705177004502@@127.0.0.1@3306


CREATE TABLE users (
    id TEXT PRIMARY KEY NOT NULL UNIQUE,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE, 
    password TEXT NOT NULL,
    creat_at TEXT NOT NULL
)

PRAGMA users('users')

INSERT INTO users(id, name, email, password, creat_at)
VALUES
('001', 'Diana', 'diana@gmail.com', 'gatinha3', '2024-01-13'),
('002', 'Apollo', 'apollo@outlook.com', 'popollo3', '2024-01-13'),
('003', 'Bilie', 'bilie@hotmail.com', 'bililinho2', '2024-01-13')

SELECT * FROM users;

CREATE TABLE products (
    id TEXT PRIMARY KEY NOT NULL UNIQUE,
    name TEXT NOT NULL,
    price REAL NOT NULL, 
    description TEXT NOT NULL,
    image_url TEXT NOT NULL
)

INSERT INTO products(id, name, price, description, image_url)
VALUES
('001', 'PS5', '3500.00', 'Vídeo game de última geração', 'https://images.pushsquare.com/3cc82f9c729cd/ps5-online-only.original.jpg'),
('002', 'DualSense', '400.00', 'Controle para PS5/PC', 'https://live.staticflickr.com/65535/49747503557_fa12f113db_h.jpg');

SELECT * FROM products;