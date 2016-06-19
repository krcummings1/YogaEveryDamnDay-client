// "use strict";

// YEDD.factory("PoseFactory", function ($http) {

//   // return {

//     function getPoses () {

//       return new Promise(function (resolve, reject){
//         $http.get(`http://localhost:5000/api/Pose/`)
//           .success(
//             poses => resolve(poses),        
//             error => reject(error)
//           )
//       });
//     }

//   // } // closes intial return
// });




// // "use strict";

// // YEDD.factory("PoseFactory", function ($q, $http) {

// //   let allPoses = [];

// //   return function () {

// //     return $q((resolve, reject) => {
// //       $http
// //         .get(`http://localhost:5000/api/Pose/`)
// //         .success(
// //           poses => {
// //             console.log("all poses", poses);
// //             allPoses = poses;
// //             resolve(allPoses)
// //           },  
// //           error => reject(error)
// //         )
// //     });
// //   }

// // });
