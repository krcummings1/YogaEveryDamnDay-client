"use strict";

YEDD.factory("PoseFactory", function ($http) {
  return () =>
    // Return a promise for our async XHR
    new Promise((resolve, reject) => {

      $http
        .get('http://localhost:5000/api/Pose')        
        .success(
          poseCollection => {
            resolve(poseCollection);
          },
          error => reject(error)
        );
    });

});