"use strict";

xdescribe("Service: randomApi", function() {
  // load the service's module
  
  var randomApi;
  var $httpBackend;
  var $rootScope;

  var fakeData = { foo: "bar" };

  beforeEach(module("angularJsUnitTestingApp"));
  beforeEach(inject(function(_randomApi_, _$httpBackend_, _$rootScope_) {
    dump("This is the injected service: ", angular.mock.dump(_randomApi_));
    randomApi = _randomApi_;
    $httpBackend = _$httpBackend_;
    $rootScope = _$rootScope_;
  }));
  // instantiate service

  it("should return some data", function() {
    // Arrange
    var actualResponse;

    $httpBackend
      .when("GET", "http://omdbapi.com/?v=1&something")
      .respond(200, fakeData);

    // Act
    randomApi.search("something").then(function(data) {
      actualResponse = data;
    });

    $rootScope.$apply();
    $httpBackend.flush();

    // Assert
    var expectedResult = "bar";

    expect(actualResponse.foo).toEqual(expectedResult);
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
