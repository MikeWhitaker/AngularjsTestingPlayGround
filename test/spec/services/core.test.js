"use strict";

describe("Service: core", function() {
  // load the service's module
  beforeEach(module("angularJsUnitTestingApp"));

  // instantiate service
  var core;
  var $httpBackend;
  beforeEach(inject(function(_core_, _$httpBackend_) {
    core = _core_;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
  });

  it("should do something", function() {
    expect(!!core).toBe(true);
  });

  it("should create a popular movie", function() {
    function expectedData(data) {
      var actualProperty = /{"movieId":"tt001100","description":".*"}/;
      return actualProperty;
    }

    $httpBackend.expectPOST(/./, expectedData).respond(201);

    var popularMovie = new core({
      movieId: "tt001100",
      description: "a great movieasdf"
    });
    popularMovie.$save();

    expect($httpBackend.flush).not.toThrow();
  });

  it("should get movieId", function() {
    $httpBackend.expectGET("popular/tt001100").respond(200);

    core.get({ movieId: "tt001100" });
    //expect($httpBackend.flush).not.toThrow();
  });

  it("should update the movieId", function() {
    $httpBackend.expectPUT("popular").respond(201);

    var popularMovie = new core({
      movieId: "tt001100",
      description: "a great movieasdf"
    });

    popularMovie.$update();
    //expect($httpBackend.flush).not.toThrow();
  });

  fit("should authenticate the headers", function() {
    function expectedHeaders(headers) {
      dump(angular.mock.dump(headers));
      var actualToken = angular.fromJson(headers).authToken;

      return actualToken === "teadybear";
    }

    $httpBackend.expectGET("popular/tt001100", expectedHeaders).respond(200);

    core.get({ movieId: "tt001100" });
  });
});
