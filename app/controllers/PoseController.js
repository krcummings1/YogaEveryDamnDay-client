"use strict";

YEDD.controller('PoseController', [
  '$scope',
  '$http', 
  '$route',
  'PoseFactory',
  '$timeout',

  function ($scope, $http, $route, PoseFactory, $timeout) {

    // $(document).ready(function() {
    // $scope.posesArray = [];

    // $scope.pose = {
    //   sanskrit: "",
    //   commonName: ""
    // }

    PoseFactory().then(
      // Handle resolve() from the promise
      poseCollection => {
        console.log("resolve", poseCollection);
        // $scope.poses.push(poseCollection);


          // console.log("pose collection", poseCollection);
           // $scope.posesArray = poseCollection;
           $scope.posesArray = poseCollection;
          console.log("poses array", $scope.posesArray);
          $timeout();
   
// console.log("pose", $scope.poses[0]);
console.log("poseId", $scope.posesArray[0].PoseId);
// console.log("pose", favePose[0].sanskrit);


        }, 
        error => console.log("??", error)
      );
  // });
    //     $scope.$apply();
    //   },
    //   // Handle reject() from the promise
    //   err => console.log(err)
    // );

    // $scope.poseArray = PoseFactory(poseCollection);
    // console.log("poseArray", poseArray);

  }

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

