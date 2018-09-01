const mysql = require('mysql');

const host = process.env.HEROKU_SQL || 'localhost';
const user = process.env.HEROKU_USERMYSQL || 'root';
const password = process.env.HEROKU_MYSQL_PASS || 'ahriel674';
const database = process.env.HEROKU_MYSQL_DATABASE || 'test';

var connection = mysql.createConnection({ host, user, password, database });

const selectAll = function (callback) {
  connection.query('SELECT * FROM items', function (err, results, fields) {
    if (err) {
      console.log(err);
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

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

module.exports.model = { selectAll, saveSize, getSizes, getCrusts };


// SELECT * FROM toppings AS t INNER JOIN crusts AS c ON t.id = c.id INNER JOIN sizes AS s ON t.id = s.id;