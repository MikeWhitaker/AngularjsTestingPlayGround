"use strict";

xdescribe("Service: names", function() {
  var expectedData = "sometext";
  var responseData = "someOtherData";

  // load the service's module
  beforeEach(module("angularJsUnitTestingApp"));

  // instantiate service
  var names;
  var $httpBackend;
  var $rootScope;

  beforeEach(inject(function(_names_, _$httpBackend_, _$rootScope_) {
    names = _names_;
    $httpBackend = _$httpBackend_;
    $rootScope = _$rootScope_;
  }));

  it("should do something", function() {
    expect(!!names).toBe(true);
  });

  it("should have a function get data that returns some data", function() {
    // Arrange
    var expectedData = "sometext";

    // ACt
    var actualResult = names.getData();

    // Assert
    expect(actualResult).toEqual(expectedData);
  });

  it("should return the data form the http backend", function() {
    // Arrange
    var actualResult;
    var expectedUrl = "http://www.omdbapi.com/?v=1&s=star%20wars";
    $httpBackend.when("GET", "views/main.html").respond(200);

    $httpBackend.when("GET", expectedUrl).respond(200, responseData);

    // Act
    names.search("star wars").then(function(data) {
      actualResult = data;
    });
    $httpBackend.flush();
    // Assert

    var actualRequestJson = angular.fromJson(actualResult);


    expect(actualRequestJson.data).toEqual(responseData);
  });
});
