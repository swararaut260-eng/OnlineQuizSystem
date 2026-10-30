const express = require("express");
const mysql = require("mysql2");
const session = require("express-session");

const app = express();
const PORT = 3000;

// Read website files
app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session setup
app.use(session({
    secret: "onlinequizsecret",
    resave: false,
    saveUninitialized: false
}));

// MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rautswara143",
    database: "online_quiz"
});

db.connect((err) => {
    if (err) {
        console.log("MySQL connection failed:", err.message);
    } else {
        console.log("MySQL Connected Successfully!");
    }
});

// Test route
app.get("/test", (req, res) => {
    res.send("Online Quiz System Server is Working!");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});