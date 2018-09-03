angular.module('app')
  .service('pizzaService', function ($http) {
    this.send = function (vote, cb) {
      $http({
        method: "POST",
        url: "/vote",
        data: { vote: vote }
      })
        .then(function ({ data }) {
          console.log(data);
        })
        .then(function () {
          cb();
        })
        .catch(function (err) {
          console.log(err);
        });
    };
    this.getAllPizzas = function (cb) {
      $http({
        method: "GET",
        url: "/pizzas"
      })
        .then(function ({ data }) {
          if (cb) cb(data);
        })
        .catch(function (err) {
          console.log(err);
        });
    };
    this.getPopularVote = function (cb) {
      $http({
        method: "GET",
        url: "/winner"
      })
        .then(function ({ data }) {
          if (cb) cb(data);
        })
        .catch(function (err) {
          console.log(err);
        });
    };
    this.deleteVotes = function (cb) {
      $http({
        method: "GET",
        url: "/delete"
      })
        .then(function ({ data }) {
          console.log(data);
        })
        .then(function () {
          cb();
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  });