CREATE DATABASE ticketmanager;

CREATE TABLE tickets(
    ticketID SERIAL PRIMARY KEY,
    price INTEGER,
    available VARCHAR(30),
    artist VARCHAR(50), 
    date DATE
);

CREATE TABLE users(
    userID SERIAL PRIMARY KEY,
    firstName VARCHAR(30),
    lastName VARCHAR(30),
    email VARCHAR(50) UNIQUE,
    birthday DATE
);