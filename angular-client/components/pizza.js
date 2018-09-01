angular.module('app')
  .component('pizza', {
    bindings: {
      getSize: '<'
    },
    controller: function () {
      this.value = '';
      this.handleClick = () => {
        this.getSize(this.value);
      }
    },
    templateUrl: '/templates/pizza.html'
  });