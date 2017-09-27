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
            width: headSize+25,
            height: headSize+25,
            top: -5
        }, 1000, function() {
            //   $( ".ripple" ).animate({
                  top: 0,
                  opacity: 1,
                  width: headSize,
                  height: headSize
            //   }, 1000);
             ripple();
        });
    }
    ripple();
});