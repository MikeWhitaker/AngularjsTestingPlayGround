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
  beforeEach(inject(function(_randomApi_) {
    randomApi = _randomApi_;
  }));

  it("should return some data", function() {
    var service = {
      getData: function() {
        return serviceData.GlossDiv.GlossList.GlossEntry.GlossTerm;
      }
    };
    expect(service.getData("something")).toEqual(
      "Standard Generalized Markup Language"
    );
  });
});
