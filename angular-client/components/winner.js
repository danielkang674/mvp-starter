angular.module('app')
  .component('winner', {
    bindings: {
      winner: '<',
      getWinner: '<',
      deleteVotes: '<'
    },
    controller: function () {

    },
    templateUrl: '/templates/winner.html'
  });
