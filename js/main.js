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
    $('.head0').removeClass('active');
    $('.head1').removeClass('active');
    $('.head3').removeClass('active');

    
    if(this.id === 'head0'){
        $('.head0').addClass('active');
        $('.infoBlock').not('#mainBlock').slideUp().removeClass();
        $('#mainBlock').slideDown();
        $('#mainBlock').addClass('active');
    } if(this.id === 'head1'){
        $('.head1').addClass('active');
        $('.infoBlock').not('#infoBlock1').slideUp();
        $('#infoBlock1').slideDown();
        $('#mainBlock').addClass('active');
    } else if( this.id === 'head2') {
        $('.head2').addClass('active');
        $('.infoBlock').not('#infoBlock2').slideUp();
        $('#infoBlock2').slideDown();
        $('#mainBlock').addClass('active');
    }
});
