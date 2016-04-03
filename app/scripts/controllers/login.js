'use strict';

/**
 * @ngdoc function
 * @name statApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the statApp
 */
angular.module('statApp')
  .controller('LoginCtrl', function ($cookieStore, Auth) {
    var login = this;
    login.user = {};
    login.submit =  function (){
      Auth.login(login.user).then(
        function(response){
          if(response.data.errormsg){
            //TODO: post error message
          } else{
            $cookieStore.put("token", response.data.token);
          }
        }
      );
    };

  });
