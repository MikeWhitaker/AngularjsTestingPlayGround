'use strict';

describe('Service: randomApi', function () {

  // load the service's module
  beforeEach(module('angularJsUnitTestingApp'));

  // instantiate service
  var randomApi;
  beforeEach(inject(function (_randomApi_) {
    randomApi = _randomApi_;
  }));

  it('should do something', function () {
    expect(!!randomApi).toBe(true);
  });

});
