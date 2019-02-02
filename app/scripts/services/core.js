"use strict";

/**
 * @ngdoc service
 * @name angularJsUnitTestingApp.core
 * @description
 * # core
 * Service in the angularJsUnitTestingApp.
 */
angular
  .module("angularJsUnitTestingApp", ["ngResource"])
  .factory("core", function($resource) {
    var token = 'teadybear';
    
    return $resource(
      "popular/:movieId",
      { movieId: "@Id" },
      {
        update: {
          method: "PUT",
          headers: { authToken: token }
        },
        get: {
          method: "GET",
          headers: { authToken: token }
        },
        query: {
          method: "GET",
          headers: { authToken: token }
        },
        save: {
          method: "POST",
          headers: { authToken: token }
        },
        remove: {
          method: "DELETE",
          headers: { authToken: token }
        }
      }
    );
  });
