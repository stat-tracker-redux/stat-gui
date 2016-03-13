'use strict';

/**
 * @ngdoc overview
 * @name statApp
 * @description
 * # statApp
 *
 * Main module of the application.
 */
angular
  .module('statApp', [
    'ngCookies',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/landing', {
        templateUrl: 'views/landing.html',
        controller: 'LandingCtrl',
        controllerAs: 'landing'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup'
      })
      .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl',
        controllerAs: 'user'
      })
      .when('/newact', {
        templateUrl: 'views/newact.html',
        controller: 'NewactCtrl',
        controllerAs: 'newact'
      })
      .when('/act', {
        templateUrl: 'views/act.html',
        controller: 'ActCtrl',
        controllerAs: 'act'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
