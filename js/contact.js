//google maps



function myMap() {
// var mapProp= {
//     center:new google.maps.LatLng(51.508742,-0.120850),
//     zoom:14,
// };
var myLatLng = {lat: -45.871913, lng: 170.500177};
var center = {lat: -45.875567, lng: 170.504179};

var map = new google.maps.Map(document.getElementById('googleMap'), {
    zoom: 15,
    center: center
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });


// var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

//$(document).ready(function() {
    function getFormDataString(formEl) {
      var formData = new FormData(formEl),
          data = [];
    
      for (var keyValue of formData) {
        data.push(encodeURIComponent(keyValue[0]) + "=" + encodeURIComponent(keyValue[1]));
      }
    
      return data.join("&");
    }
    
    // Fetch the form element
    var formEl = $('.contactForm')[0];
    console.log("Form el " + formEl);
    // Override the submit event
    formEl.addEventListener("submit", function (e) {
      e.preventDefault();
    
      if (grecaptcha) {
        var recaptchaResponse = grecaptcha.getResponse();
        if (!recaptchaResponse) { // reCAPTCHA not clicked yet
        console.log("Hvnt clicked");
         $( ".recap" )
                .text( "Please click the recaptcha button above" )
                .show()
                .fadeOut( 5000 );
          return false;
        } 
      }
    
      var request = new XMLHttpRequest();
    
      request.addEventListener("load", function () {
          if (request.status >= 300 || request.status < 400 ) { // CloudCannon redirects on success
            $('.contactSubmit').addClass("submitted");
            $('.contactSubmit').attr("value", "Message Submitted!");
          // It worked
        }
      });
    
      request.open(formEl.method, formEl.action);
      request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      request.send(getFormDataString(formEl));
    });
//}