$(document).ready(function(){
  // Initialize WOW.js
  new WOW().init();

  // Initialize TypeIt
  new TypeIt('#clients', {
     strings: ["Coca Cola", "HSBC", "Bia Saigon", "Unilever", "Suntory/","Pepsico", "Orion", "Uniben","Rebsico"],
     speed: 200,
     breakLines: false,
     autoStart: false,
     loop: true
  });

  new TypeIt('#hunters', {
     strings: ["Passionate", "Wild", "Precise", "Imaginative", "Voracious", "Fierce"],
     speed: 200,
     breakLines: false,
     autoStart: false,
     loop: true
  });

  new TypeIt('#digital', {
     strings: ["Memorable", "Test"],
     speed: 200,
     breakLines: false,
     autoStart: false,
     loop: true
  });

  // Nav Functionality
  $('.menu-toggle').on('click', function(){
    $('.full-menu').toggleClass('full-menu--open');
  })

  $('#nav-icon').click(function(){
    $(this).toggleClass('full-menu--open');
  });

  // Logo Home Icon
  $(window).scroll(function() {
      if ($(this).scrollTop() > 200) { //use `this`, not `document`
          $('.logo-home').css({
              'display': 'none'
          });
      }
      else {
        $('.logo-home').css({
            'display': 'block'
        });
      }
  });

  // Client Icons animations
  $(document).on('scroll', throttle(function() {
    if (ClientIcons.areInViewport() && !ClientIcons.animated()) {
      ClientIcons.animate();
    }
  }, 200));
});


// Hunter Carousel
var sliderTeam = (function(document, $) {

  'use strict';

  var $sliderTeams = $('.slider--teams'),
      $list = $('#list'),
      $listItems = $('#list li'),
      $nItems = $listItems.length,
      $nView = 3,
      autoSlider,
      $current = 0,
      $isAuto = true,
      $acAuto = 2500,

      _init = function() {
        _initWidth();
        _eventInit();
      },

      _initWidth = function() {
        $list.css({
          'margin-left': Math.floor(100 / $nView) + '%',
          'width': Math.floor(100 * ($nItems / $nView)) + '%'
        });
        $listItems.css('width', 100 / $nItems + '%');
        $sliderTeams.velocity({ opacity: 1 }, { display: "block" }, { delay:1000 });
      },

      _eventInit = function() {

        window.requestAnimFrame = (function() {
          return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              window.oRequestAnimationFrame      ||
              window.msRequestAnimationFrame     ||
              function(callback, element){
                window.setTimeout(callback, 1000 / 60);
              };
        })();

        window.requestInterval = function(fn, delay) {
            if( !window.requestAnimationFrame       &&
                !window.webkitRequestAnimationFrame &&
                !window.mozRequestAnimationFrame    &&
                !window.oRequestAnimationFrame      &&
                !window.msRequestAnimationFrame)
                    return window.setInterval(fn, delay);
            var start = new Date().getTime(),
            handle = new Object();

            function loop() {
                var current = new Date().getTime(),
                delta = current - start;
                if(delta >= delay) {
                    fn.call();
                    start = new Date().getTime();
                }
                handle.value = requestAnimFrame(loop);
            };
            handle.value = requestAnimFrame(loop);
            return handle;
        }

        window.clearRequestInterval = function(handle) {
            window.cancelAnimationFrame ? window.cancelAnimationFrame(handle.value) :
            window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(handle.value)   :
            window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(handle.value) :
            window.oCancelRequestAnimationFrame ? window.oCancelRequestAnimationFrame(handle.value) :
            window.msCancelRequestAnimationFrame ? msCancelRequestAnimationFrame(handle.value) :
            clearInterval(handle);
        };

        $.each($listItems, function(i) {
          var $this = $(this);
          $this.on('touchstart click', function(e) {
            e.preventDefault();
            _stopMove(i);
            _moveIt($this, i);
          });
        });

        autoSlider = requestInterval(_autoMove, $acAuto);
      },

      _moveIt = function(obj, x) {

        var n = x;

        obj.find('figure').addClass('active');
        $listItems.not(obj).find('figure').removeClass('active');

        $list.velocity({
          translateX: Math.floor((-(100 / $nItems)) * n) + '%',
          translateZ: 0
        }, {
          duration: 1000,
          easing: [400, 26],
          queue: false
        });

      },

      _autoMove = function(currentSlide) {
        if ($isAuto) {
          $current = ~~(($current + 1) % $nItems);
        } else {
          $current = currentSlide;
        }
        console.log($current);
        _moveIt($listItems.eq($current), $current);
      },

      _stopMove = function(x) {
        clearRequestInterval(autoSlider);
        $isAuto = false;
        _autoMove(x);
      };

  return {
    init: _init
  };

})(document, jQuery);

$(window).load(function(){
  'use strict';
  sliderTeam.init();
});




//Category filter Feature
$(".filter-button").click(function(){
  var value = $(this).attr('data-filter');

  if(value == "all") {
   $('.filter').show('1000');
  }
  else {
   $(".filter").not('.'+value).hide('3000');
   $('.filter').filter('.'+value).show('3000');
  }
 });

 if ($(".filter-button").removeClass("active")) {
   $(this).removeClass("active");
 }
   $(this).addClass("active");
