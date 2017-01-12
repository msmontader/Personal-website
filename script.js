$(document).ready(function() {
document.getElementsByTagName("h1")[0].style.fontSize = "80px";
    vpw = $(window).width();
    vph = $(window).height();
$(window).scroll(function(){
  $("#nav_div").css({"top": ($(window).scrollTop()) + "px"});
});
$('.nav').localScroll();
