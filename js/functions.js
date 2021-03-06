
jQuery(function($) {

  //Initiat WOW JS
  new WOW().init();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $(".scrollup").fadeIn();
      $("#scrollImage").removeClass("shake-slow shake-constant");
    } else {
      $(".scrollup").fadeOut();
      $("#scrollImage").addClass("shake-slow shake-constant");

    }
  });
  $(".scrollup").click(function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      1000
    );
    return false;
  });

  
  // portfolio filter
  $(window).load(function() {
    "use strict";
    var $portfolio_selectors = $(".portfolio-filter >li>a");
    var $portfolio = $(".portfolio-items");
    $portfolio.isotope({
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows"
    });

    $portfolio_selectors.on("click", function() {
      $portfolio_selectors.removeClass("active");
      $(this).addClass("active");
      var selector = $(this).attr("data-filter");
      $portfolio.isotope({
        filter: selector
      });
      return false;
    });
  });

  //Pretty Photo
  $("a[rel^='prettyPhoto']").prettyPhoto({
    social_tools: false
  });

  //Google Map
  var get_latitude = $("#google-map").data("latitude");
  var get_longitude = $("#google-map").data("longitude");

  function initialize_google_map() {
    var myLatlng = new google.maps.LatLng(get_latitude, get_longitude);
    var mapOptions = {
      zoom: 14,
      scrollwheel: false,
      center: myLatlng
    };
    var map = new google.maps.Map(
      document.getElementById("google-map"),
      mapOptions
    );
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map
    });
  }
  google.maps.event.addDomListener(window, "load", initialize_google_map);
});

$("#recentProjects").click(function() {
  window.location = "portfolio.html";
});
$("#plantHiring").click(function() {
  window.location = "planthiring.html";
});
$("#plantSelling").click(function() {
  window.location = "planthiring.html";
});
$("#locationIcon").click(function() {
  var locateUs = "https://maps.google.com/?q=-17.805488,30.946908";
  window.location = locateUs;
});
$("#whatWeDo").addClass("cssanimation leFadeInLeft sequence");
$("#scrollImage").addClass("shake-slow shake-constant");

