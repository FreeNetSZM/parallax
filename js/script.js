$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  $(".layer1").css("background-position-y", scroll * 0.3 + "px");
  $(".layer2").css("background-position-y", scroll * 0.6 + "px");
  $(".layer3").css("background-position-y", scroll * 0.9 + "px");
});
