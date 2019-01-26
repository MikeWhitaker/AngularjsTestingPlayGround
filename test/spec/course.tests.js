"use strict";
describe("ombd service", function() {

  beforeEach(module('angularJsUnitTestingApp'));
  beforeEach(inject(function(_randomApi_){
    var randomApi = _randomApi_;
  }));

  fit("should return GlossEntry data", function() {
    
    expect(service.search()).toEqual(
      "Standard Generalized Markup Language"
    );
  });
});
