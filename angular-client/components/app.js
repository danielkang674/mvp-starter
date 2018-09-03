angular.module('app')
  .controller('AppCtrl', ['pizzaService', 'getPizzaOptions', function (pizzaService, getPizzaOptions) {
    this.getWinner = () => {
      pizzaService.getPopularVote((winner) => {
        this.winner = winner;
      });
    };
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
    pizzaService.getPopularVote
  }])
  .component('app', {
    bindings: {},
    controller: 'AppCtrl',
    templateUrl: '/templates/app.html'
  });