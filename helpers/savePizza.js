const { model } = require('../database-mysql');

const savePizza = (size, crust, toppings, cb) => {
  model.savePizza(size, crust, (err, data) => {
    if (err) {
      console.log(err);
      cb(err, null);
    } else {
      model.saveToppings(data.insertId, toppings, (err) => {
        if (err) {
          console.log(err);
          cb(err, null);
        } else {
          cb(null);
        }
      });
    }
  });
};

module.exports.savePizza = savePizza;