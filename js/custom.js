$(document).ready(function(){

  $('.menu-toggle').on('click', function(){
   $('.full-menu').toggleClass('full-menu--open');
  })

	$('#nav-icon').click(function(){
		$(this).toggleClass('full-menu--open');
	});

});
