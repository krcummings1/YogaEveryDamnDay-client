// "use strict";

// YEDD.controller('PoseController',
//   [
//     "$scope",
//     "$PoseFactory",
//     "$route",

//     function ($scope, $PoseFactory, $route) {

//       $scope.allPoses = PoseFactory();
//       $scope.pose = {};
//       console.log("hello there");
//       console.log("all poses", allPoses);


//     }

//   ]);

"use strict";

YEDD.controller('PoseController', [
  '$scope',
  '$http', 

  function ($scope, $http) {

    // $scope.poses = [];
    $scope.data = [];

    $http
      .get('http://localhost:5000/api/Pose/')
      .success(data);

      console.log("past the GET");
      // console.log("poses", $scope.poses);
      console.log("data", data);

    // $scope.deleteToy = function (id) {
    //   $http({
    //     method: "DELETE",
    //     url: `http://localhost:5000/api/Inventory/${id}`
    //   })
    //   .then(
    //     () => console.log("Toy deleted"),
    //     () => console.log("Toy not deleted")
    //   );
    // }

  }

]);