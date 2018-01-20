// This module handles the logic for detirmining if the client 
// icons are in the viewport and animating them. 
var ClientIcons = (function(){
  var animated = false;
  var slider = $('#slider-1');

  return {
    
    animated: function() {
      return animated;
    },
    
    areInViewport: function() {
      var elementTop = slider.offset().top;
      var elementBottom = elementTop + slider.outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      
      return elementBottom > viewportTop && elementTop < viewportBottom;
    },

    animate: function() {
      var elems = $('div.icon-client').not('#icon-0');
      var increase = Math.PI * 2 / elems.length;
      var x = 0;
      var y = 0;
      var angle = 0;
      var radius = 280;
      var center_top = (slider.height() - $("#icon-0").height()) / 2;
      var center_left = (slider.width() - $("#icon-0").width()) / 2;
      
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

      animated = true;
    }
  };
})();
