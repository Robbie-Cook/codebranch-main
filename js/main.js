// Main javascript file, common to most of the html files

$(document).ready(function() {
    
    // sets the height for the fader
    var docHeight = $(document).height();
    $('.backgroundFade').css({
        height: docHeight - 60
    });
    
    // About section
    
    // Make the heads pop;
    var headSize = 80;
    function ripple() {
        $( ".ripple" ).animate({
            opacity: 0,
            width: headSize+15,
            height: headSize+15,
            top: -8
        }, 1000, function() {
              $( ".ripple" ).css({
                  top: 0,
                  opacity: 1,
                  width: headSize,
                  height: headSize
              }).delay(2000);
             ripple();
        });
    }
    ripple();
});