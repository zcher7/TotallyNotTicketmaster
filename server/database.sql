CREATE DATABASE ticketmanager;

CREATE TABLE tickets(
    ticketid SERIAL PRIMARY KEY,
    price INTEGER,
    type VARCHAR(30),
    artist VARCHAR(50), 
    date DATE
);

CREATE TABLE users(
    userid SERIAL PRIMARY KEY,
    firstName VARCHAR(30),
    lastName VARCHAR(30),
    email VARCHAR(50) UNIQUE,
    birthday DATE
);

CREATE TABLE purchases(
    purchaseid SERIAL PRIMARY KEY,
    userid INTEGER,
    ticketid INTEGER NOT NULL,
    FOREIGN KEY (userid) REFERENCES users(userid) ON DELETE CASCADE,
    FOREIGN KEY (ticketid) REFERENCES tickets(ticketid) ON DELETE CASCADE
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

SELECT tickets.ticketID, users.firstName, users.lastName 
FROM tickets 
INNER JOIN checkout ON tickets.ticketID = checkout.ticketID 
INNER JOIN users ON checkout.userID = users.userID 
WHERE artist = $1





"Find the emails of users who own a ticket for every artist"
SELECT U.email
FROM users U
WHERE NOT EXISTS (
    (SELECT DISTINCT T.artist
    FROM tickets T)
    EXCEPT
    (SELECT DISTINCT T1.artist
    FROM purchases P, Tickets T1
    WHERE P.userid = U.userid AND P.ticketid = T1.ticketid))

"Find the names of sailors who have reserved every boat reserved by those with a lower rating"
SELECT S1.sname
FROM Sailors S1
WHERE NOT EXISTS (
    (SELECT B1.bid
    FROM Boats B1, Reserves R1, Sailors S2
    WHERE B1.bid = R1.bid AND R1.sid = S2.sid AND S2.rating < S1.rating)
    EXCEPT
    (SELECT B2.bid
    FROM Boats B2, Reserves R2
    WHERE B2.bid = R2.bid AND R2.sid = S1.sid))