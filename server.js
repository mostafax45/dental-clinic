const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');

app.use(cors());
app.use(express.json());

/* 🔗 هنا اتصال الداتابيز */
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "DentalClinicDB"
});

/* 📡 APIs هنا */
app.get('/', (req, res) => {
    res.send("Backend is working 🚀");
});

app.get('/patients', (req, res) => {
    db.query("SELECT * FROM patient", (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    });
});

/* 🚀 تشغيل السيرفر */
app.listen(3000, () => {
    console.log("Server running on port 3000");
});