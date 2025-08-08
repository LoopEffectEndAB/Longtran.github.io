// Simple Express backend for user registration with MySQL
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // đổi thành user của bạn
  password: '', // đổi thành mật khẩu của bạn
  database: 'mixueshop'
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected!');
});

// API: Đăng ký tài khoản
app.post('/api/register', (req, res) => {
  const { firstName, lastName, phone, email, password, role } = req.body;
  const sql = 'INSERT INTO users (firstName, lastName, phone, email, password, role) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [firstName, lastName, phone, email, password, role], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true, userId: result.insertId });
  });
});

// API: Lấy danh sách user (demo)
app.get('/api/users', (req, res) => {
  db.query('SELECT id, firstName, lastName, phone, email, role FROM users', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
