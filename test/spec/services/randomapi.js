"use strict";

fdescribe("Service: randomApi", function() {
  // load the service's module
  var randomApi = {};
  beforeEach(module("angularJsUnitTestingApp"));
  beforeEach(inject(function(_randomApi_){
    randomApi = _randomApi_;
  }));
  // instantiate service
  
  it("should return some data", function() {
    expect(randomApi.getData("something")).toEqual(
      "Standard Generalized Markup Language"
    );
  });

  it('should re turn the title', function() {
    expect(randomApi.getTitle()).toEqual("example glossary");
  });

});
