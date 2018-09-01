angular.module('app')
  .controller('AppCtrl', ['itemsService', 'bye', 'pizzaService', 'getPizzaOptions', function (itemsService, bye, pizzaService, getPizzaOptions) {
    itemsService.sayhi((hi) => {
      this.hi = hi;
    });
    bye.saybye((bye) => {
      this.bye = bye;
    });
    this.getVote = (vote) => {
      console.log(vote);
    };
    getPizzaOptions.getPizzaOptions((options) => {
      this.options = options;
    });
  }])
  .component('app', {
    bindings: {},
    controller: 'AppCtrl',
    templateUrl: '/templates/app.html'
  });