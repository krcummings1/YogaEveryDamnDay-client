"use strict";

YEDD.factory("PoseFactory", function ($q, $http) {

  let allPoses = [];

  return function () {

    return $q((resolve, reject) => {
      $http
        .get(`http://localhost:5000/api/Pose/GetAll`)
        .success(
          poses => {
            console.log("all poses", poses);
            allPoses = poses;
            resolve(allPoses)
          },  
          error => reject(error)
        )
    });
  }

});
