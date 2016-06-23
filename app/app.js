"use strict";

let YEDD = angular.module('YogaEveryDamnDay', [
  'ngRoute'
]);

YEDD.config(['$routeProvider', 
  function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/main.html',
      controller: 'MainController'
    })
    .when('/poses', {
      templateUrl: 'partials/pose-search.html',
      controller: 'PoseController'
    })
    .otherwise('/');
  }
]);