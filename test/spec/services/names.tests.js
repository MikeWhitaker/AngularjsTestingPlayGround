'use strict';

fdescribe('Service: names', function () {

  // load the service's module
  beforeEach(module('angularJsUnitTestingApp'));

  // instantiate service
  var names;
  var $httpBackend;
  var $rootScope;

  beforeEach(inject(function (_names_,_$httpBackend_, _$rootScope_) {
    names = _names_;
    $httpBackend = _$httpBackend_;
    $rootScope = _$rootScope_;
  }));

  it('should do something', function () {
    dump(angular.mock.dump(names));
    expect(!!names).toBe(true);
  });

  it('should have a function get data that returns some data', function () {
    // Arrange
      var expectedData = 'sometext';

    // ACt
    var actualResult = names.getData();
    
    // Assert
    expect(actualResult).toEqual(expectedData);
  });
});
