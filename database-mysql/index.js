const mysql = require('mysql');
const localOptions = { host: 'localhost', user: 'root', password: process.env.MYSQL_PASS, database: 'test' };
const options = process.env.JAWSDB_URL || localOptions;


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


// SELECT * FROM toppings AS t INNER JOIN crusts AS c ON t.id = c.id INNER JOIN sizes AS s ON t.id = s.id;