angular.module('app')
  .component('pizzas', {
    bindings: {
      pizzas: '<',
      showAllVotes: '<'
    },
    controller: function () { },
    templateUrl: '/templates/pizzas.html'
  });