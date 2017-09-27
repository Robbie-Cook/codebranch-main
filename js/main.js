// Main javascript file, common to most of the html files

$(document).ready(function() {
    
    // sets the height for the fader
    var docHeight = $(document).height();
    $('.backgroundFade').css({
        height: docHeight - 60
    });
    
    // About section
    
    // Make the heads pop;
    
    $( ".ripple" ).animate({
    opacity: 0.25,
    left: "+=50",
    height: "toggle"
  }, 5000, function() {
    // Animation complete.
  });
});