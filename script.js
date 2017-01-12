$(document).ready(function() {
document.getElementsByTagName("h1")[0].style.fontSize = "80px";
    vpw = $(window).width();
    vph = $(window).height();

    $('.full-page').height(vph);
$('.pageTwo').css('min-height', '100%');
$('.pageThree').css('min-height', '100%');
});
$(window).scroll(function(){
  $("#nav_div").css({"top": ($(window).scrollTop()) + "px"});
});
$('.nav').localScroll();
