"use strict";

YEDD.controller('PoseController', [
  '$scope',
  '$http', 
  '$route',
  'PoseFactory',
  '$timeout',

  function ($scope, $http, $route, PoseFactory, $timeout) {

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

          console.log("$scope.basePose", $scope.basePose);
        }
        // () => console.log("Toy deleted"),
        // () => console.log("Toy not deleted")
        // error => console.log("???", error)
      );

    
    } // closes seePoseDetails



  } // closes main function

]);

// "use strict";

// YEDD.controller('PoseController', [
//   '$scope',
//   '$http', 

//   function ($scope, $http) {
//     return () =>
//     // Return a promise for our async XHR
//     new Promise((resolve, reject) => {

//     //$scope.poses = [];
//     //var data;

//     $http
//       .get('http://localhost:5000/api/Pose')
//       .success(poses => {
//         resolve(poses);
//       },
//         error => reject(error);
//       });
//       console.log("poses", poses);
//       //.success(data => console.log("data", data));
      

//   }

// ]);

