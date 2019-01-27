'use strict';

/**
 * @ngdoc service
 * @name angularJsUnitTestingApp.names
 * @description
 * # names
 * Service in the angularJsUnitTestingApp.
 */
angular.module('angularJsUnitTestingApp')
  .service('names', function () {
    var self = this;
    self.aVariable = 'sometext';

    var service = {};

    service.getData = function (){
      return selfaVariable;
    };

    return service;
  });
