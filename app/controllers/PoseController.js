"use strict";

YEDD.controller('PoseController', [
  '$scope',
  '$http', 
  'PoseFactory',

  function ($scope, $http, PoseFactory) {

    $scope.poses = [];

    PoseFactory().then(
      // Handle resolve() from the promise
      poseCollection => {
        Object.keys(poseCollection).forEach(key => {
          poseCollection[key].id = key;
          $scope.poses.push(poseCollection[key]);
      console.log("poses", poseCollection);
        });
        $scope.$apply();
      },
      // Handle reject() from the promise
      err => console.log(err)
    );


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

