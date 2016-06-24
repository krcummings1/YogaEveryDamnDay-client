"use strict";

YEDD.controller('HeaderController',
[
  "$scope",
  "$location",
  "$route",

  function ($scope, $location, $route) {

    $('.posesButton').on('click', function () {
        $location.path("/poses")
        $route.reload();
    });


    $('.homeButton').on('click', function () {
        $location.path("/")
        $route.reload();
    });


    function collapseNavbar() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    }

    $(window).scroll(collapseNavbar);
    $(document).ready(collapseNavbar);

  } // closes main function
]);