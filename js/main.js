// Main javascript file, common to most of the html files
var rippleThis;

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
    rippleThis = function(element, speed = 1000) {
        $(element).animate({
            opacity: 0,
            width: headSize+15,
            height: headSize+15,
            top: -6
        }, speed, function() {
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

$('.head').click(function() {
    $(this).css({
        borderColor: 'white'
    });
    if(this.id === 'head1'){
        $('.infoBlock').not('infoBlock1').slideUp();
        $('.infoBlock1').slideDown();
    } else if( this.id === 'head2') {
        $('.infoBlock').not('infoBlock2').slideUp();
        $('.infoBlock2').slideDown();
    }
});
