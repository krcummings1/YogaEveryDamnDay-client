"use strict";

YEDD.controller('MainController',
  [
    "$scope",
    "$location",
    "$route",

    function ($scope, $location, $route) {

      $('.mainPoseButton').on('click', function () {
          $location.path("/poses")
          $route.reload();

      })

    } // closes main function

  ]);