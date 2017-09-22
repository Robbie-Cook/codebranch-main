// Main javascript functionality

//Contact form Recapcha

// Helper function to get form data in the supported format



//End of Contac Form

//ReadMore toggle

$(".readMoreButton").on('click', function(){
    $(".homeReadMore").slideToggle();
});

$(".mobBox").on('click', function(){
    $("ul.topnav").slideToggle();
});

$(document).mouseup(function(e) 
{   
    if($( window ).width() < 600){
        var container = $(".newNav");
    
        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
            container.children('ul.topnav').hide();
            $('.mobBox').removeClass('open');
        }
    }
});


$(document).ready(function() {

  /** Cloud animation **/
  // var animateMe = function(targetElement, speed){
  //
  //   $( targetElement ).animate({
  //       left: "+=50",
  //     }, speed, function() {
  //       // Animation complete.
  //     });
  //   });
      // $(targetElement).css({left:'-200px'});
      // $(targetElement).animate(
      //     {
      //     'left': $(document).width()
      //   },
      //     {
      //     duration: speed,
      //     complete: function(){
      //         animateMe(this, speed);
      //         }
      //     }
      // );

  //};

  // the moving clouds functionality

  var clouds = function() {
    $('.cloud').each(function() {
      $(this).css(
        {top: (Math.random()*1100 % 100)+100 + "px",
        height: Math.random()*100 + "px",
        left: (Math.random()*1000 % 800)+100 + "px"}
      );
    });
    var windowWidth = $( window ).width();
    function move() {$( ".move" ).each(function() {
      $(this).animate({
        left: "+=" + (windowWidth+200),
        }, 40000 + (Math.random()*100000), "linear", function() {
          $(this).css({left: -200});
          move();
        })
      });
    }
    move();
  }
  if ($(window).width() > 600) {
    clouds();
  }
  //animateMe('.cloudMoving', 100);
  /** End of cloud animation **/

  /** Navbar colour changing */
  var links = $('.topnav').children();
  var colourArray = ['#5d34a1', '#4e79be', '#d9cd07', '#9ebc15', '#5598b5', '#e57e00'];
  var imgLocation = "../images/";
  var imgArray = ['navtop1.png', 'navtop2.png', 'navtop3.png', 'navtop4.png',
  'navtop5.png', 'navtop6.png'];

  $(links).children().each(function(index ) {
    $(this).css('backgroundColor', colourArray[index % colourArray.length]);
  }
  );
  $(links).each(function( index ) {
    $(this).css({
      'borderImage': 'url(' + imgLocation + imgArray[index % imgArray.length] + ') 30 stretch',
      'borderTop': "10px solid transparent"});
  });
});
  /** End navbar colour changing */
  
    // hamburger code
  	$('.mobBox').click(function(){
		$(this).toggleClass('open');
	});
