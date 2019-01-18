(function (){

'use strict';

/**
 * @ngdoc service
 * @name angularJsUnitTestingApp.randomApi
 * @description
 * # randomApi
 * Factory in the angularJsUnitTestingApp.
 */
angular.module('angularJsUnitTestingApp')
  .factory('randomApi', randomApiFactory);
  
  
  function randomApiFactory() {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  }
}());
