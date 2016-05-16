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
	var jssor_1_options = {
	  $AutoPlay: true,
	  $Idle: 0,
	  $AutoPlaySteps: 4,
	  $SlideDuration: 1600,
	  $SlideEasing: $Jease$.$Linear,
	  $PauseOnHover: 4,
	  $SlideWidth: 140,
	  $Cols: 8
	};
	
	var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
	
	//responsive code begin
	//you can remove responsive code if you don't want the slider scales while window resizing
	function ScaleSlider() {
		var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
		if (refSize) {
			refSize = Math.min(refSize, 945);
			jssor_1_slider.$ScaleWidth(refSize);
		}
		else {
			window.setTimeout(ScaleSlider, 30);
		}
	}
	ScaleSlider();
	$(window).bind("load", ScaleSlider);
	$(window).bind("resize", ScaleSlider);
	$(window).bind("orientationchange", ScaleSlider);
	//slider code end
	
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