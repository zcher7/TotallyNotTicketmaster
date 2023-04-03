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
    userid INTEGER NOT NULL,
    ticketid INTEGER NOT NULL,
    FOREIGN KEY (userid) REFERENCES users(userid) ON DELETE CASCADE,
    FOREIGN KEY (ticketid) REFERENCES tickets(ticketid) ON DELETE CASCADE
);  

INSERT INTO tickets VALUES(1, 5, 'Seated', 'Drake', '2000-01-01');
INSERT INTO tickets VALUES(2, 5, 'Seated', 'Drake', '2000-01-01');
INSERT INTO tickets VALUES(3, 10, 'Standing', 'Drake', '2000-01-01');
INSERT INTO tickets VALUES(4, 20, 'Standing', 'Adele', '2020-03-03');
INSERT INTO tickets VALUES(5, 20, 'Standing', 'Adele', '2020-03-03');
INSERT INTO tickets VALUES(6, 20, 'Standing', 'Adele', '2020-03-03');
INSERT INTO tickets VALUES(7, 20, 'Standing', 'Adele', '2020-03-03');
INSERT INTO tickets VALUES(8, 20, 'Standing', 'Adele', '2020-03-03');
INSERT INTO tickets VALUES(9, 20, 'Standing', 'Adele', '2020-03-03');
INSERT INTO tickets VALUES(10, 20, 'Standing', 'Adele', '2020-03-03');
INSERT INTO tickets VALUES(11, 15, 'Seated', 'Rihanna', '2023-05-01');
INSERT INTO tickets VALUES(12, 20, 'Seated', 'Rihanna', '2023-05-01');
INSERT INTO tickets VALUES(13, 25, 'Seated', 'Rihanna', '2023-05-01');
INSERT INTO tickets VALUES(14, 30, 'Seated', 'Rihanna', '2023-05-01');
INSERT INTO tickets VALUES(15, 33, 'Seated', 'Rihanna', '2023-05-01');
INSERT INTO tickets VALUES(16, 3, 'Seated', 'Rihanna', '2023-05-01');
INSERT INTO tickets VALUES(17, 50, 'Seated', 'Adele', '2023-05-01');
INSERT INTO tickets VALUES(18, 30, 'Premium', 'Adele', '2023-05-01');
INSERT INTO tickets VALUES(19, 35, 'Premium', 'Adele', '2023-05-01');

INSERT INTO users VALUES(1, 'Joe', 'Biden', 'j@biden.com', '0100-01-01');
INSERT INTO users VALUES(2, 'Joe', 'Max', 'j@max.com', '2000-01-01');
INSERT INTO users VALUES(3, 'Joe', 'Marr', 'j@marr.com', '2000-01-01');
INSERT INTO users VALUES(4, 'Joe', 'Bryant', 'j@br.com', '2000-01-01');
INSERT INTO users VALUES(5, 'Joe', 'Erickson', 'j@e.com', '2002-01-01');
INSERT INTO users VALUES(6, 'Joe', 'Patrick', 'j@p.com', '1990-01-01');
INSERT INTO users VALUES(7, 'Tiffany', 'Patrick', 't@p.com', '1991-01-01');
INSERT INTO users VALUES(8, 'Emily', 'Summer', 'emily@summer.com', '1980-02-01');
INSERT INTO users VALUES(9, 'Fabian', 'Bentley', 'fabian@b.com', '1950-02-01');
INSERT INTO users VALUES(10, 'John', 'Cena', 'john@cena.com', '1950-07-05');
INSERT INTO users VALUES(11, 'Alex', 'Fray', 'a@fray.com', '1967-01-02');

INSERT INTO purchases VALUES(1, 1, 1);
INSERT INTO purchases VALUES(2, 1, 4);
INSERT INTO purchases VALUES(3, 1, 11);
INSERT INTO purchases VALUES(4, 2, 5);
INSERT INTO purchases VALUES(5, 3, 6);
INSERT INTO purchases VALUES(6, 4, 7);
INSERT INTO purchases VALUES(7, 5, 8);
INSERT INTO purchases VALUES(8, 6, 9);
INSERT INTO purchases VALUES(9, 7, 10);
INSERT INTO purchases VALUES(10, 2, 12);









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