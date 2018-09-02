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
        this.getVote(this.data);

      };
      this.reset = () => {
        this.data.size = null;
        this.data.crust = null;
        this.data.toppings = [];
      };
      console.log(this);
    },
    templateUrl: '/templates/vote.html'
  });