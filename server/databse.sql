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

CREATE TABLE checkout(
    checkoutID SERIAL PRIMARY KEY,
    userID INTEGER,
    ticketID INTEGER NOT NULL,
    FOREIGN KEY (userID) REFERENCES users(userID),
    FOREIGN KEY (ticketID) REFERENCES tickets(ticketID)
);  

SELECT AVG(*)
FROM SELECT COUNT(*)
    FROM checkout
    GROUP BY checkout.userID


With userTickets AS
SELECT checkout.userID, COUNT(*) AS ticketsPurchased
FROM checkout 
GROUP BY checkout.userID
HAVING 2 <= COUNT(*)

SELECT AVG(ticketsPurchased)
FROM userTickets