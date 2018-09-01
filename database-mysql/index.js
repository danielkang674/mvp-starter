const mysql = require('mysql');
const options = {
  host: process.env.JAWSDB_HOST || 'localhost',
  user: process.env.JAWSDB_USERNAME || 'root',
  password: process.env.JAWSDB_PASSWORD || process.env.MYSQL_PASS,
  database: process.env.JAWSDB_DATABASE || 'test',
  port: process.env.JAWSDB_PORT
};

const connection = mysql.createConnection(options);

const saveSize = (size, cb) => {
  connection.query('INSERT INTO items (quantity, description) VALUES (?,?)', [1, size], (err, data, fields) => {
    if (err) {
      console.log(err);
      cb(err, null);
    } else {
      cb(null, 'saved to db');
    }
  })
};

const getSizes = (cb) => {
  connection.query('SELECT * FROM sizes', (err, results, fields) => {
    if (err) {
      console.log(err);
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

const getCrusts = (cb) => {
  connection.query('SELECT * FROM crusts', (err, results, fields) => {
    if (err) {
      console.log(err);
      cb(err);
    } else {
      cb(null, results);
    }
  });
};

const getToppings = (cb) => {
  connection.query('SELECT * FROM toppings', (err, results, fields) => {
    if (err) {
      console.log(err);
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

module.exports.model = { saveSize, getSizes, getCrusts, getToppings };

