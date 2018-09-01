angular.module('app')
  .service('pizzaService', function ($http) {
    this.send = function (size) {
      $http({
        method: "POST",
        url: "/vote",
        data: { size: size }
      })
        .then(function ({ data }) {
          console.log(data);
        })
        .catch(function (err) {
          console.log(err);
        });
    };
  });