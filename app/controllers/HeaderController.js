"use strict";

YEDD.controller('HeaderController',
[
  "$scope",
  "$location",
  "$route",

  function ($scope, $location, $route) {

    $('.posesButton').on('click', function () {
        $location.path("/poses")
        $route.reload();
    });


    $('.homeButton').on('click', function () {
        $location.path("/")
        $route.reload();
    });

  } // closes main function
]);