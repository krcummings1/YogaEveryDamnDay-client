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

          // if ($scope.prepPoses.length <= 1) {
          //   $("div").removeClass(".col-sm-4");
          //   $("div").addClass("col-md-6  col-md-offset-3");
          //   console.log("hello");
          // }

          // var moreThanOnePrepPose;

          // if ($scope.prepPoses.length > 1) {
          //   $scope.moreThanOnePrepPose === 'true';
          //   console.log("true, more than 1 prep pose", $scope.moreThanOnePrepPose)
          // } else {
          //   $scope.moreThanOnePrepPose === 'false';
          //   console.log("false, only 1 prep pose", $scope.moreThanOnePrepPose);
          // }

          console.log("$scope.basePose", $scope.basePose);
        }

      );

    
    } // closes seePoseDetails



      $('.mainMenuButton').on('click', function () {
          $location.path("/")
          $route.reload();

      })



  } // closes main function

]);


