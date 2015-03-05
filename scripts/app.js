'use strict';

/**
 * @ngdoc overview
 * @name mapAppApp
 * @description
 * # mapAppApp
 *
 * Main module of the application.
 */
angular
  .module('mapAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'TagController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
