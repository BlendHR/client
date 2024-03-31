const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Replace with your own MySQL connection config
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'database_name'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Store email and password in the database
    // Make sure to hash the password before storing it
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});