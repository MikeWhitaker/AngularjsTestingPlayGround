"use strict";

describe("Service: randomApi", function() {
  // load the service's module
  beforeEach(module("angularJsUnitTestingApp"));

  // instantiate service
  
  
  fit("should return some data", function() {
    var randomApi = {};
    angular.mock.module('angularJsUnitTestingApp');

    angular.mock.inject(function(_randomApi_){
      randomApi = _randomApi_;
    });

    expect(randomApi.getData("something")).toEqual(
      "Standard Generalized Markup Language"
    );
  });
});
