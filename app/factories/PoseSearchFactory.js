// "use strict";

// YEDD.factory("PoseSearchFactory", function ($q, $http) {

//   let poses = [];

//   return {
//     getPoses: function () { 
//     // getPoses is being called in PoseSearchController???????
//       return poses;
//     },
//     findPoses: function (breed, zip) {
//       return $q((resolve, reject) => {
//         $http
//           .jsonp(`http://api.petfinder.com/pet.find?key=8e5f1dc37136499111d4b4b2b45d51ed&animal=dog&breed=${breed}&location=${zip}&output=full&format=json&callback=JSON_CALLBACK`)
//           .success(
//             petSearchResult => {
//               // console.log("found pet from petfinder", petSearchResult);
//               poses = petSearchResult.petfinder.pets.pet;
//               resolve(poses)
//             },  
//             error => reject(error)
//           )
//       });

//     }

//   }
// });
