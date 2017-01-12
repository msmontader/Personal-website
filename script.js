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
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
