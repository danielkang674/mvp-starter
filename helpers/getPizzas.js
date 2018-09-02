const { model } = require('../database-mysql');

const getPizzas = (cb) => {
  model.getPizzas((err, pizzas) => {
    if (err) {
      console.log(err);
      cb(err, null);
    } else {
      cb(null, pizzas, filterPizzas(pizzas));
    }
  });
};

const filterPizzas = (pizzas) => {
  let obj = {};
  for (let pizza of pizzas) {
    let { id, size, crust, topping } = pizza;
    if (!obj[id]) {
      obj[id] = { size: size, crust: crust, toppings: [topping] };
    } else {
      obj[id].toppings.push(topping);
    }
  }
  return obj;
};

module.exports.getPizzas = getPizzas;