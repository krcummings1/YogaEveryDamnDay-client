"use strict";

YEDD.controller('MainController'
  [
    "$scope",
    "$route",

    function ($scope, $PoseFactory, $route) {

      $('#myStateButton').on('click', function () {
    $(this).button('complete') // button text will be "finished!"
  })


    }

  ]);