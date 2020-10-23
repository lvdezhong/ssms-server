import mysql from 'mysql';

const db = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'root',
  port     : 3306,
  database : 'students',
});

export default db