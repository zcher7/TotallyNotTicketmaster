const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());

// ROUTES

app.post("/tickets", async(req, res) => {
    try {
        const {ticketid, price, available, artist, date} = req.body;
        const newTicket = await pool.query("INSERT INTO tickets (ticketid, price, available, artist, date)" +
                                            " VALUES($1, $2, $3, $4, $5) RETURNING *",
         [ticketid, price, available, artist, date]);

         res.json(newTicket.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
})

app.post("/users", async(req, res) => {
    try {
        const {userid, firstName, lastName, email, birthday} = req.body;
        const newUser = await pool.query("INSERT INTO users (userid, firstName, lastName, email, birthday)" +
                                            " VALUES($1, $2, $3, $4, $5) RETURNING *",
         [userid, firstName, lastName, email, birthday]);

         res.json(newUser.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
})

app.get("/tickets", async (req, res) => {
    try {
        const allTickets = await pool.query("SELECT * FROM tickets");
        res.json(allTickets.rows)
    } catch (err) {
        console.error(err.message)
    }
})

app.get("/users", async (req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM users");
        res.json(allUsers.rows)
    } catch (err) {
        console.error(err.message)
    }
})

// SELECT - Only show tickets for specific artist
app.get("/tickets/:artist", async (req, res) => {
    try {
        const {artist} = req.params;
        const tickets = await pool.query("SELECT * FROM tickets WHERE artist = $1", [artist]);

        res.json(tickets.rows);
    } catch (err) {
        console.error(err.message)
    }
})

// UPDATE - Price of ticket
app.put("/tickets/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const {price} = req.body;
        const updateTickets = await pool.query("UPDATE tickets SET price = $1 WHERE ticketID = $2", [price, id])

        res.json("Ticket Price has been updated!");
    } catch (err) {
        console.error(err.message)
    }
})

// DELETE - Remove ticket from
app.delete("/tickets/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const deleteTicket = await pool.query("DELETE FROM tickets WHERE ticketID = $1", [id])

        res.json("Ticket has been deleted...");
    } catch (err) {
        console.log(err.message)
    }
})

// PROJECTION - Show specific columns in tickets
app.get("/tickets/projection/:input", async (req, res) => {
    try {
        const param = req.params;
        const tickets = await pool.query("SELECT " + Object.values(param) + " FROM tickets");
        res.json(tickets.rows);
    } catch (err) {
        console.error(err.message)
    }
})

// JOIN
app.get("/tickets/join/:artist", async (req, res) => {
    try {
        const {artist} = req.params;
        const tickets = await pool.query("SELECT tickets.ticketID, users.firstName, users.lastName FROM tickets INNER JOIN checkout ON tickets.ticketID = checkout.ticketID INNER JOIN users ON checkout.userID = users.userID WHERE artist = $1", [artist]);
        res.json(tickets.rows);
    } catch (err) {
        console.error(err.message)
    }
})

// GROUP BY
app.get("/group", async (req, res) => {
    try {
        const tickets = await pool.query("SELECT tickets.artist, COUNT(*) FROM tickets INNER JOIN checkout ON tickets.ticketID = checkout.ticketID GROUP BY tickets.artist");
       
        res.json(tickets.rows);
    } catch (err) {
        console.error(err.message)
    }
})

// HAVING
app.get("/having", async (req, res) => {
    try {
        const tickets = await pool.query("SELECT available, AVG(price) FROM tickets GROUP BY available HAVING 80 >= AVG(price)");
       
        res.json(tickets.rows);
    } catch (err) {
        console.error(err.message)
    }
})

// NESTED
app.get("/nested", async (req, res) => {
    try {
        const tickets = await pool.query("With userTickets AS (SELECT checkout.userID, COUNT(*) AS ticketsPurchased FROM checkout GROUP BY checkout.userID HAVING 2 <= COUNT(*)) SELECT AVG(ticketsPurchased) FROM userTickets");
       
        res.json(tickets.rows);
    } catch (err) {
        console.error(err.message)
    }
})





app.listen(5000, () => {
    console.log("Server has started on port 5000");
});