const { model } = require('../database-mysql/index.js');

const getPizzaOptions = (cb) => {
  let options = {};
  model.getSizes((err, sizes) => {
    if (err) {
      console.log(err);
      cb(err, null);
    } else {
      options.sizes = sizes;
      model.getCrusts((err, crusts) => {
        if (err) {
          console.log(err);
          cb(err, null);
        } else {
          options.crusts = crusts;
          model.getToppings((err, toppings) => {
            if (err) {
              console.log(err);
              cb(err, null);
            }
            else {
              options.toppings = toppings;
              cb(null, options);
            }
          });
        }
      });
    }
  });
};

module.exports.getPizzaOptions = getPizzaOptions;