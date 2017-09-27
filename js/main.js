// Main javascript file, common to most of the html files

$(document).ready(function() {
    
    // sets the height for the fader
    var docHeight = $(document).height();
    $('.backgroundFade').css({
        height: docHeight - 60
    });
    
    // About section
    
    // Make the heads pop;
    
    function ripple() {
        $( ".ripple" ).animate({
            opacity: 0.3,
            width: 140,
            height: 140
        }, 5000, function() {
             ripple();
        });
    }
});