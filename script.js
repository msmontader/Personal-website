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
$(document).ready(function(){
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });
});
