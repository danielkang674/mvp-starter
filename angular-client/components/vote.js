angular.module('app')
  .component('vote', {
    bindings: {
      options: '<',
      getVote: '<'
    },
    controller: function () {
      this.data = {
        size: null,
        crust: null,
        toppings: []
      }
    },
    templateUrl: '/templates/vote.html'
  });