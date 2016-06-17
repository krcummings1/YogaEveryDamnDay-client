"use strict";

YEDD.controller('PoseController'
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