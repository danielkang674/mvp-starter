require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { model } = require('../database-mysql');
const { getPizzaOptions } = require('../helpers/pizzaOptions.js');

const app = express();
const port = process.env.HEROKU_PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../angular-client'));
app.use(express.static(__dirname + '/../node_modules'));

app.get('/items', (req, res) => {
  model.selectAll((err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});


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
  model.saveSize(req.body.size, (err, msg) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.status(200).send(msg);
    }
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});

