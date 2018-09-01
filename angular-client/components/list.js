angular.module('app')
  .component('list', {
    bindings: {
      items: '<',
      hi: '<',
      bye: '<'
    },
    controller: function () { },
    templateUrl: '/templates/list.html'
  });