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
    'ngTouch',
    'mapSVG',
  ])
  .constant("XMLFILE", {//nie działa mi to. Jak przekazuje do servisu to wywala błędy.
    "URL" : "'data/mapa.xml'",
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'TagController' 
      })
      // .when('/', {
      //   url: '/images/mapka.svg',
      //   controller: 'SVGController'
      // })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('mapAppApp', ['mapSVG']);
angular.module('mapSVG', []);