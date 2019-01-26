(function() {
  "use strict";

  /**
   * @ngdoc service
   * @name angularJsUnitTestingApp.randomApi
   * @description
   * # randomApi
   * Factory in the angularJsUnitTestingApp.
   */
  angular
    .module("angularJsUnitTestingApp")
    .factory("randomApi", randomApiFactory);

  randomApiFactory.$inject = ["$http", "$q"];

  function randomApiFactory($http, $q) {
    // Service logic
    var service = {};
    var baseUrl = "http://omdbapi.com/?;";
    service.search = function(query) {
      var deferred = $q.defer();
      $http
        .get(baseUrl + "s=" + encodeURIComponent(query))
        .success(function(data) {
          deferred.resolve(data);
        });
        return deferred.promise;
    };

    service.find = function(searchString) {
      return {
        Title: "StarWars",
        Year: "1977"
      };
    };

    return service;
  }
})();
