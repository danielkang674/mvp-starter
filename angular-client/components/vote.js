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
      };
      this.vote = () => {
        let { size, crust, toppings } = this.data;
        this.getVote({ size, crust, toppings });
        this.reset();
      };
      this.reset = () => {
        this.data.size = null;
        this.data.crust = null;
        this.data.toppings = [];
      };
    },
    templateUrl: '/templates/vote.html'
  });