angular.module('app')
  .service('pizzaService', function ($http) {
    this.send = function (vote) {
      $http({
        method: "POST",
        url: "/vote",
        data: { vote: vote }
      })
        .then(function ({ data }) {
          console.log(data);
        })
        .catch(function (err) {
          console.log(err);
        });
    };
    this.getAllPizzas = function (cb) {
      $http({
        method: "GET",
        url: "/pizzas",
      })
        .then(function ({ data }) {
          if (cb) cb(data);
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  });