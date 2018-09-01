angular.module('app')
  .controller('AppCtrl', ['itemsService', 'bye', 'pizzaService', function (itemsService, bye, pizzaService) {
    itemsService.getAll((data) => {
      this.items = data;
    });
    itemsService.sayhi((hi) => {
      this.hi = hi;
    });
    bye.saybye((bye) => {
      this.bye = bye;
    });
    this.getSize = (size) => {
      pizzaService.send(size);
    };
  }])
  .component('app', {
    bindings: {},
    controller: 'AppCtrl',
    templateUrl: '/templates/app.html'
  });