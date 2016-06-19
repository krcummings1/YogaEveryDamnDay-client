"use strict";

YEDD.controller('PoseController', [
  '$scope',
  '$http', 

  function ($scope, $http) {

    // $scope.figurines = [];
    var data;

    $http
      .get('http://localhost:5000/api/Pose')
      .success(data => console.log("data", data));
      // .success(inv => $scope.figurines = inv);
      

  }

]);