angular.module('app')
  .component('pizzas', {
    bindings: {
      pizzas: '<'
    },
    controller: function () { },
    templateUrl: '/templates/pizzas.html'
  });