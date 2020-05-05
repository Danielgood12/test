$(document).ready(function(){
    $('body').scrollspy({
        target: '#mainNav',
        offset: 75
      });
      var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").removeClass("bg-transparency");
            $("#mainNav").addClass("bg-white");
           
          } else {
            $("#mainNav").removeClass("bg-white");
            $("#mainNav").addClass("bg-transparency");
            
           
           
          }
      };
      // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  });
  
  