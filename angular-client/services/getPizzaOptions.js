angular.module('app')
  .service('getPizzaOptions', function ($http) {
    this.getPizzaOptions = function (cb) {
      $http({
        method: "GET",
        url: "/vote"
      })
        .then(function ({ data }) {
          if (cb) cb(data);
        })
        .catch(function (err) {
          console.log(err);
        });
    };
  });