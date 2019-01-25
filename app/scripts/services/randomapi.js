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
  
  randomApiFactory.$inject = ['$http', '$q'];
  
  function randomApiFactory($http, $q) {
    // Service logic
    var service= {};

    var serviceData = {
      title: "example glossary",
      GlossDiv: {
        title: "S",
        GlossList: {
          GlossEntry: {
            ID: "SGML",
            SortAs: "SGML",
            GlossTerm: "Standard Generalized Markup Language",
            Acronym: "SGML",
            Abbrev: "ISO 8879:1986",
            GlossDef: {
              para:
                "A meta-markup language, used to create markup languages such as DocBook.",
              GlossSeeAlso: ["GML", "XML"]
            },
            GlossSee: "markup"
          }
        }
      }
    };
    
    angular.mock.dump($http);

    var baseUrl = 'http://www.omdb.com/?v=1&'

    service.search = function(query){
      var deferred = $q.defer();
      $http.get(baseUrl + 's='+ encodeURIComponent(query))
        .success(function(data){
          deferred.resolve(data)
        });
        return deferred.promise;
    }

    // Public API here
    return service;
  }
}());
