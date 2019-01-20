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

    // Public API here
    return {
      getData: function () {
        return serviceData;
      }
    };
  }
}());
