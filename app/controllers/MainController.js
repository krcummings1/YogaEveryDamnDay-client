"use strict";

YEDD.controller('MainController'
  [
    "$scope",
    "$PoseFactory",
    "$route",

    function ($scope, $PoseFactory, $route) {

      $scope.allPoses = PoseFactory();
      $scope.pose = {};

      console.log("all poses", allPoses);


    }

  ]);