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

  // Nav Functionality
  $('.menu-toggle').on('click', function(){
    $('.full-menu').toggleClass('full-menu--open');
  })

  $('#nav-icon').click(function(){
    $(this).toggleClass('full-menu--open');
  });

  // Client Icons animations
  $(document).on('scroll', throttle(function() {
    if (ClientIcons.areInViewport() && !ClientIcons.animated()) {
      ClientIcons.animate();
    }
  }, 200));
});
