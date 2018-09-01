angular.module('app')
  .service('bye', function () {
    this.saybye = function (callback) {
      callback('bye');
    }
  });