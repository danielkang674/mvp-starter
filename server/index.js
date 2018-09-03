require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { model } = require('../database-mysql');
const { getPizzaOptions } = require('../helpers/pizzaOptions.js');
const { savePizza } = require('../helpers/savePizza.js');
const { getPizzas, filterPizzas } = require('../helpers/getPizzas.js').getPizzas;
const { popularVote } = require('../helpers/chooseWinner.js').chooseWinner;
const morgan = require('morgan');
const { deleteVotes } = require('../helpers/deleteVotes.js');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

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
        res.end(data);
      }
    });
  }
});

app.get('/pizzas', (req, res) => {
  getPizzas((err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/winner', (req, res) => {
  getPizzas((err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(popularVote(data));
    }
  })
});

app.get('/delete', (req, res) => {
  deleteVotes((err) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send('deleted votes');
    }
  })
});

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});

