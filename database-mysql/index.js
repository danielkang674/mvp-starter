const mysql = require('mysql');

const options = process.env.JAWSDB_URL || { host: 'localhost', user: 'root', password: process.env.MYSQL_PASS, database: 'u4yd16p0ho7f8tgn' };

const connection = mysql.createConnection(options);

const savePizza = (size, crust, cb) => {
  connection.query('INSERT INTO pizzas (size_id, crust_id) VALUES (?,?)', [size, crust], (err, data, fields) => {
    if (err) {
      console.log(err);
      cb(err, null);
    } else {
      cb(null, data);
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

const getPizzas = (cb) => {
  connection.query('select p.id, s.size, c.crust, t.topping from pizzas_toppings as p_t, pizzas as p, sizes as s, crusts as c, toppings as t where p_t.pizza_id = p.id and s.id = p.size_id and p.crust_id = c.id and p_t.topping_id = t.id;', (err, results, fields) => {
    if (err) {
      console.log(err);
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

const saveToppings = (id, toppings, cb) => {
  for (let topping of toppings) {
    connection.query('INSERT INTO pizzas_toppings (pizza_id, topping_id) VALUES(?, ?)', [id, topping], (err, results, fields) => {
      if (err) {
        console.log(err);
        cb(err, null);
      } else {
        cb(null);
      }
    });
  }
};

module.exports.model = { savePizza, getSizes, getCrusts, getToppings, getPizzas, saveToppings };

