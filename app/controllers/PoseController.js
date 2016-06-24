"use strict";

YEDD.controller('PoseController', [
  '$scope',
  '$http', 
  '$route',
  'PoseFactory',
  '$timeout',
  '$location',

  function ($scope, $http, $route, PoseFactory, $timeout, $location) {

    PoseFactory().then(
      // Handle resolve() from the promise
      poseCollection => {
        console.log("resolve", poseCollection);

        $scope.posesArray = poseCollection;
        console.log("poses array", $scope.posesArray);
        $timeout();
   
        console.log("poseId", $scope.posesArray[0].PoseId);
      }, 
      error => console.log("??", error)
    );

    $scope.seePoseDetails = function(id) {
      $http({
        method: "GET",
        url: `http://localhost:5000/api/Pose/${id}`
      })
      .then(
        pose => {
          console.log("base pose", pose.data);

          $scope.basePose = pose.data[0];
          $scope.prepPoses = pose.data[0].PrepPoses;

          console.log("prepPoses", $scope.prepPoses);

          console.log("$scope.basePose", $scope.basePose);
        }

      );

    
    } // closes seePoseDetails

  } // closes main function

]);


