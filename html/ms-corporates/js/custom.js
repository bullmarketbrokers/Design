function codeLatLng(lat, lng, callback) {
	var response = [];
	var geocoder = new google.maps.Geocoder();
	var latlng = new google.maps.LatLng(lat, lng);
	geocoder.geocode({ 'latLng': latlng }, function (results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			for (var i = 0; i < results[0].address_components.length; i++) {
				 var component = results[0].address_components[i];
				response.push(component.short_name);
			}
		} else {
			callback(null);
		}
		callback(response);
	});
}		
jQuery(document).ready(function ($) {
	          //owl footer brands carousel start
		   
		  $("#owl-demo").owlCarousel({
		 
			  autoPlay: 3000, 
		 
			  items : 6,
			  itemsDesktop : [1199,5],
			  itemsDesktopSmall : [979,4],
			  itemsTablet : [768,3],
			  itemsMobile : [479,2],
			  stopOnHover : true,
		 
		  });	
		  //owl footer brands carousel end	
	
	if (navigator.geolocation) {
	   navigator.geolocation.getCurrentPosition(function (position) {
		   var lat = position.coords.latitude;
		   var lng = position.coords.longitude;
		   codeLatLng(lat, lng, saveData);
	   }, null);
   }	
	function saveData(response) {
		$('#geoLoc').val(response.join(" "));
	};   
	$("#commentForm").validate();				
});

$(function() {
    $(window).on('scroll',function(){
        var WindowTop = $(window).scrollTop();
        $('section').each(function(i){
            if(WindowTop > $(this).offset().top - 50 && 
               WindowTop < $(this).offset().top + $(this).outerHeight(true)
              ){
                $('.nav > li > a').removeClass('newClass');
     $('.nav li').eq(i).find('a').addClass('newClass');
            }
        });
    });
		  $('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html,body').animate({
				  scrollTop: target.offset().top
				}, 1000);
				return false;
			  }
			}
	});    
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


$(window).scroll(function() {
    clearTimeout($.data(this, 'scrollTimer'));
    //Hide/Show nav based on location
    var y = $(this).scrollTop();
    if (y > 397) {
        $('.scrollTop').fadeIn(500);   
    } else {
        $('.scrollTop').fadeOut(500);
    }
    $.data(this, 'scrollTimer', setTimeout(function() {    
        $('.scrollTop').fadeOut(500);
    }, 3000));
});

$(function(){
    var hash = location.hash.replace('#','');
    if(hash != ''){
        location.hash = '';
    }
});


$(window).on('load resize', function () {
    $('.modal-body').css('height', screen.height * .6);
});