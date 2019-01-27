'use strict';

/**
 * @ngdoc service
 * @name angularJsUnitTestingApp.names
 * @description
 * # names
 * Service in the angularJsUnitTestingApp.
 */
angular.module('angularJsUnitTestingApp')
  .service('names', function ($http, $q) {
    var self = this;
    self.aVariable = 'sometext';
    var baseUrl = 'http://www.omdbapi.com/?v=1&';
    var service = {};
    
    function httpPromise (url) {
			var deferred = $q.defer();
      $http.get(url)
        .then(function successCallback(response) {
          deferred.resolve(response);
        }, function errorCallback(response) {
          deferred.reject();
        });
			return deferred.promise;
    }
    
    service.search = function(query) {
			return httpPromise(baseUrl + 's=' + encodeURIComponent(query));
    };
    
    service.find = function(id) {
			return httpPromise(baseUrl + 'i=' + id);
		};

    service.getData = function (){
      return self.aVariable;
    };

    return service;
  });
