const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jonny@2323',
    database: 'election'
});

module.exports = db;