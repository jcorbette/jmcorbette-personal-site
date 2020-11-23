$(document).ready(function() {
  headerScroll();
});


$(window).resize(function() {
  headerScroll();
});


function headerScroll() {
  if ($(window).width() > 799) {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 1) {
        $('.logo').css('display', 'block');
        $('header').addClass('header-scroll');
      } else {
        $('header').removeClass('header-scroll');
        $('.logo').css('display', 'block');
      }
    });
  }

  if ($(window).width() < 800) {
    $('.logo').css('margin', 'auto');
    $(window).scroll(function() {
      if ($(this).scrollTop() > 60) {
        $('.logo').css('display', 'none');
        $('header').addClass('header-scroll');
      } else {
        $('header').removeClass('header-scroll');
        $('.logo').css('display', 'block');
      }
    });
  }
}
