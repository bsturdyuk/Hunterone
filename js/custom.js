$(document).ready(function(){

  new WOW().init();


  $('.menu-toggle').on('click', function(){
   $('.full-menu').toggleClass('full-menu--open');
  })

	$('#nav-icon').click(function(){
		$(this).toggleClass('full-menu--open');
	});

});




////////////////////// Client Circles animation /////////////////////////
$(function() {
    var elems = $('div.icon-client').not('#icon-0');

    var increase = Math.PI * 2 / elems.length,
        x = 0,
        y = 0,
        angle = 0,
        radius = 280;

    var center_top = ($("#slider-1").height() - $("#icon-0").height())/2,
        center_left = ($("#slider-1").width() - $("#icon-0").width())/2;
    // $('.icon').css({
    //     'top': center_top + 'px',
    //     'left': center_left + 'px'
    // });
    $(elems).css('opacity', '0').each(function(i) {
        elem = elems[i];

        x = radius * Math.cos(angle) + center_left;
        y = radius * Math.sin(angle) + center_top;

        $(elem).delay(500*i).animate({
            'position': 'absolute',
            'left': x + 'px',
            'top': y + 'px',
            'opacity': '1'
        }, 1000);

        angle += increase;
    });
    // $("#icon-0").css({
    //     'left': center_top - 16 + 'px',
    //     'top': center_left - 16 + 'px'
    // });
});




/////////////////////// In View trigger /////////////////////
// // get the element to animate
// var element = $('#type-effect');
//
// // check if element is in view
// function inView() {
//   // get window height
//   var windowHeight = $(window).height();
//
//   // get current scroll position (distance from the top of the page to the bottom of the current viewport)
//   var scrollPosition = $(window).scrollTop() + windowHeight;
//   // get element position (distance from the top of the page to the bottom of the element)
//   var elementPosition = element.offset().top + element.height();
//
//   // is scroll position greater than element position? (is element in view?)
//   if (scrollPosition > elementPosition) {
//     return true;
//   }
//
//   return false;
// }
//
// // listen for scroll event
// $(document).on('scroll', function() {
//   // execute this on scroll, is element in view?
//   if (inView()) {
//       // element is in view, add class to element
//       element.addClass('typing');
//   }
// });
