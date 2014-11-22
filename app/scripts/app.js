'use strict';

/**
 * @ngdoc overview
 * @name hackfashionApp
 * @description
 * # hackfashionApp
 *
 * Main module of the application.
 */
angular
  .module('hackfashionApp', [
    'ngRoute',
    'ngTouch',
    'akoenig.deckgrid',
    'ngMaterial',
    'ngAnimate'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/detail', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl'
      })
      .when('/metric', {
        templateUrl: 'views/metric.html',
        controller: 'MetricCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
