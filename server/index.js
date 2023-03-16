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
        const {ticketID, price, available, artist, date} = req.body;
        const newTicket = await pool.query("INSERT INTO tickets (ticketID, price, available, artist, date)" +
                                            " VALUES($1, $2, $3, $4, $5) RETURNING *",
         [ticketID, price, available, artist, date]);

         res.json(newTicket.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
})

app.post("/users", async(req, res) => {
    try {
        const {userID, firstName, lastName, email, birthday} = req.body;
        const newUser = await pool.query("INSERT INTO users (userID, firstName, lastName, email, birthday)" +
                                            " VALUES($1, $2, $3, $4, $5) RETURNING *",
         [userID, firstName, lastName, email, birthday]);

         res.json(newUser.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
})

app.listen(5000, () => {
    console.log("Server has started on port 5000");
});