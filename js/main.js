// Main javascript file, common to most of the html files

var rippleThis;

//$(window).on("load",function() {
$(document).ready(function() {
    if($(window).width() <= 1080) {
        $('#fullpage').removeId('fullpage');
    }
    // The fullPage.js initialiser
    // The page sliding
	$('#fullpage').fullpage();
    
    // Make the sections the same height as the page
    // $('.mainContent').css({
    //     minHeight: $(window).height()
    // });

    // About section

    // Make the heads ripple animation
    var headSize = 80;
    function ripple() {
            setTimeout(function() {
                setTimeout(function() {
                    rippleThis($('#ripple1'));
                }, 2000);
                setTimeout(function() {
                    rippleThis($('#ripple2'));
                }, 4000);
                setTimeout(function() {
                    rippleThis($('#ripple3'));
                }, 5000);
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
    
    // Animated text with type.js
    $(document).ready(function(){
      setTimeout(function() {
        $('#typed').text('');
        var typed6 = new Typed('#typed', {
            strings: ['Quick &amp; Cheap', 'Slick &amp; Adept', 'Sharp &amp; Skilful', 'Beautiful &amp; Customisable',
                        'Wholesome &amp; Delicious', '100\% Organic'],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 2000,
            cursorChar: '_',
            shuffle: true,
            smartBackspace: false,
            loop: true
        });
      }, 3000);
    });
    // document.getElementsByClassName("head").onclick = function fun() {
    //     console.log("Hey bois");
    // }  
    
    // the about head functionality
    $('.head').click(function() {
    //  document.getElementsByClassName("head").onclick = function fun() {
        $('.head').removeClass('active');
        if(this.id === 'head0'){
            $('.infoBlock').not('#mainBlock').slideUp();
            $('#mainBlock').slideDown();
            $('#mainBlock').addClass('active');
            $('#head0').addClass('active');
        } if(this.id === 'head1'){
            $('.infoBlock').not('#infoBlock1').slideUp();
            $('#infoBlock1').slideDown();
            $('#mainBlock').addClass('active');
            $('#head1').addClass('active');
        } else if( this.id === 'head2') {
            $('.infoBlock').not('#infoBlock2').slideUp();
            $('#infoBlock2').slideDown();
            $('#mainBlock').addClass('active');
            $('#head2').addClass('active');
        }
    //  }
    });
    
    // // Mobile Hamburger 
    // hamburger code
    $('.mobBox').click(function(){
        $(this).toggleClass('open');
        // if nav is open, open the 
        $('.topnav').slideToggle();
    });
});



