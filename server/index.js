require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { model } = require('../database-mysql');
const { getPizzaOptions } = require('../helpers/pizzaOptions.js');
const { savePizza } = require('../helpers/savePizza.js');
const { getPizzas } = require('../helpers/getPizzas.js');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../angular-client'));
app.use(express.static(__dirname + '/../node_modules'));

app.get('/vote', (req, res) => {
  getPizzaOptions((err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/vote', (req, res) => {
  let { size, crust, toppings } = req.body.vote;
  if (size === null || crust === null || toppings.length < 1) {
    res.sendStatus(400);
    return;
  } else {
    savePizza(size, crust, toppings, (err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.end();
      }
    });
  }
});

app.get('/pizzas', (req, res) => {
  getPizzas((err, data, filteredData) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(filteredData);
    }
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});

