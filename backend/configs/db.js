const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'admin.c6zew0gs4rf1.us-east-1.rds.amazonaws.com',
  port: '3306',
  user: 'appuser',
  password: 'learnIT02#',
  database: 'react_node_app'
});

module.exports = db;
