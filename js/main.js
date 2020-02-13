$("#open").click(function() {
  $(".burger-menu").fadeIn();
  $(".burger-menu").css("display", "flex");
});
$("#close").click(function() {
  $(".burger-menu").fadeOut();
});

$(document).keydown(function(e) {
  if (e.keyCode == 27) {
    $(".burger-menu").fadeOut();
  }
});

$(window).resize(function() {
  $(".burger-menu").fadeOut();
});
$(document).scroll(function() {
  if ($(window).scrollTop() > 50) {
    $(".burger-menu").fadeOut();
  }
});
