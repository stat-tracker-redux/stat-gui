'use strict';

/**
 * @ngdoc service
 * @name statApp.auth
 * @description
 * # auth
 * Service in the statApp.
 */
angular.module('statApp')
  .service('Auth', function ($http, API_URL) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
      login: function (input){
        return $http.get(API_URL+"/login", input);
      },
      logout: function (){
        return $http.get(API_URL+"/logout");
      },
      check: function (){

      },
      register: function(){

      }
    };
  });
