"use strict";

describe("Service: randomApi", function() {
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
  // load the service's module
  beforeEach(module("angularJsUnitTestingApp"));

  // instantiate service
  var randomApi;
  

  fit("should return some data", function() {
    angular.mock.module(function($provide){
      $provide.factory('randomApi', function(){
          return {
            getData: function(query){
              return serviceData.GlossDiv.GlossList.GlossEntry.GlossTerm;
            }
          }
      });
    });

    angular.mock.inject(function(_randomApi_){
      randomApi = _randomApi_;
    });

    expect(randomApi.getData("something")).toEqual(
      "Standard Generalized Markup Language"
    );
  });
});
