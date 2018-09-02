angular.module('app')
  .controller('AppCtrl', ['itemsService', 'bye', 'pizzaService', 'getPizzaOptions', function (itemsService, bye, pizzaService, getPizzaOptions) {
    itemsService.sayhi((hi) => {
      this.hi = hi;
    });
    bye.saybye((bye) => {
      this.bye = bye;
    });
    this.getVote = (vote) => {
      pizzaService.send(vote, this.renderAfterVote);
    };
    getPizzaOptions.getPizzaOptions((options) => {
      this.options = options;
    });
    pizzaService.getAllPizzas((pizzas) => {
      this.pizzas = pizzas;
    });
    this.renderAfterVote = () => {
      pizzaService.getAllPizzas((pizzas) => {
        this.pizzas = pizzas;
      });
    };
  }])
  .component('app', {
    bindings: {},
    controller: 'AppCtrl',
    templateUrl: '/templates/app.html'
  });