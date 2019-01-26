'use strict';

fdescribe('Service: randomApi', function() {
  // load the service's module
  var randomApi = {};
  beforeEach(module('angularJsUnitTestingApp'));
  beforeEach(inject(function(_randomApi_){
    randomApi = _randomApi_;
  }));
  // instantiate service
  
  fit('should return some data', function() {
    // var someObject = {
    //   foo: 'bar'
    // };
    
    // dump(angular.mock.dump(someObject));

    expect(randomApi.getData('something')).toEqual(
      'Standard Generalized Markup Language'
    );
  });

  it('should re turn the title', function() {
    expect(randomApi.getTitle()).toEqual('example glossary');
  });

});
