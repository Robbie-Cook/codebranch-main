// Main javascript file, common to most of the html files

$(document).ready(function() {

    // sets the height for the fader
    var docHeight = $(document).height();
    $('.backgroundFade').css({
        height: docHeight - 60
    });

    // About section

    // Make the heads ripple animation
    var headSize = 80;
    function ripple() {
            setTimeout(function() {
                setTimeout(function() {
                    rippleThis($('#ripple2'));
                }, 9000);
                rippleThis($('#ripple1'));
                ripple();
            }, 7000);
    }
    function rippleThis(element) {
        console.log("Ripple called");
        $(element).animate({
            opacity: 0,
            width: headSize+15,
            height: headSize+15,
            top: -6
        }, 1000, function() {
            $(element).css({
              top: 0,
              opacity: 1,
              width: headSize,
              height: headSize
          });
        });
    }



    // call the main function
    ripple();
});

$(".head").hover(function() {
    rippleThis($(this).siblings('.redRipple')[0]);
});
