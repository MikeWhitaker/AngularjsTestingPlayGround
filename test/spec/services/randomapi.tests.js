"use strict";

describe("Service: randomApi", function() {
  // load the service's module
  var randomApi = {};
  beforeEach(module("angularJsUnitTestingApp"));
  beforeEach(inject(function(_randomApi_) {
    randomApi = _randomApi_;
  }));
  // instantiate service

  fit("should return some data", function() {
    // Arrange
    var actualResponse;
    // Act
    randomApi.search("something")
      .then(function(data){
        actualResponse = data;
      });

    // Assert
    var expectedResult = "example glossary";

    expect().toEqual(expectedResult);
  });

  describe("find method", function() {
    it("should return a specific string", function() {
      // Arrange
      // Act
      // Assert
      var expectedResult = "example glossary";

      expect(randomApi.find()).toEqual(expectedResult);
    });
  });
});
