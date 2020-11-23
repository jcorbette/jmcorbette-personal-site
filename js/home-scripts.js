$(document).ready(function() {
  parallax();
  switchDiv();
  slide1();
  slide2();
  slide3();
  slide4();
});


$(window).resize(function() {
  parallax();
  switchDiv();
  slide1();
  slide2();
  slide3();
  slide4();
});


$(window).scroll(function() {
  if (slide1($('.left-slide'))) {
    $('.left-slide').css('transform', 'translateX(0%)');
  }
  if (slide2($('.right-slide'))) {
    $('.right-slide').css('transform', 'translateX(0%)');
  }
  if (slide3($('.left-slide-1'))) {
    $('.left-slide-1').css('transform', 'translateX(0%)');
  }
  if (slide4($('.right-slide-2'))) {
    $('.right-slide-2').css('transform', 'translateX(0%)');
  }
  if (fade($('.clist-container'))) {
    $('.fade-container').css('color', '#000000');
  }
});


function parallax() {
  if ($(window).width() > 959) {
    $('.about-container').addClass('parallax-about');
    $(window).scroll(function() {
      var pageScroll = $(window).scrollTop();
      $('.parallax-about').css('margin-top', 1 - (pageScroll * 0.0325) + 'em');
    });
  } else {
    $('.about-container').css('margin-top', '5em');
    $('.about-container').removeClass('parallax-about');
  }
}


function slide1() {
  return $(window).scrollTop() + $(window).height() > $('.slide-container-1').offset().top + $('.slide-container-1').height();
}

function slide2() {
  return $(window).scrollTop() + $(window).height() > $('.slide-container-2').offset().top + $('.slide-container-2').height();
}

function slide3() {
  return $(window).scrollTop() + $(window).height() > $('.slide-container-3').offset().top + $('.slide-container-3').height();
}

function slide4() {
  return $(window).scrollTop() + $(window).height() > $('.slide-container-4').offset().top + $('.slide-container-4').height();
}

function fade() {
  return $(window).scrollTop() + $(window).height() > $('.clist-container').offset().top + $('.clist-container').height();
}


function switchDiv() {
  if ($(window).width() > 959) {
    $('.s-1').before($('.s-2'));
    $('.s-3').before($('.s-4'));
  } else {
    $('.s-2').before($('.s-1'));
    $('.s-4').before($('.s-3'));
  }
}



var scrollToTopBtn = document.getElementById("buttonScroll");
var rootElement = document.documentElement;

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

scrollToTopBtn.addEventListener("click", scrollToTop);
