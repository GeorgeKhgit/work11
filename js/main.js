$("#open").click(function(){$(".burger-menu").fadeIn(),$(".burger-menu").css("display","flex")}),$("#close").click(function(){$(".burger-menu").fadeOut()}),$(document).keydown(function(e){27==e.keyCode&&$(".burger-menu").fadeOut()}),$(window).resize(function(){$(".burger-menu").fadeOut()}),$(document).scroll(function(){50<$(window).scrollTop()&&$(".burger-menu").fadeOut()});