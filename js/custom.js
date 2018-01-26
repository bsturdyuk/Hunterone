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
