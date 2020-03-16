jQuery(document).ready(function(){
	jQuery(".nav .navbar-toggle").click(function(){
		jQuery(".nav .navigation").slideToggle().toggleClass("active");
	});

	//sticky Header
	var contentNav = jQuery('.header').offset().top;
    var stickyNav = function () {
        var scrollTop = jQuery(window).scrollTop();
        if (scrollTop > contentNav) {
            jQuery('.header').addClass('sticky');
        } else {;
            jQuery('.header').removeClass('sticky')
        }
    };
    stickyNav();
    jQuery(window).scroll(function () {
        stickyNav();
    });
	
	//Page loader
	Pace.on('done', function(event) {			
	});
	
	//Banner Slider
	jQuery("#slider4").responsiveSlides({
        auto: true,
        pager: true,
        nav: false,
        speed: 1000,
        namespace: "callbacks",
        before: function () {
          jQuery('.events').append("<li>before event fired.</li>");
        },
        after: function () {
          jQuery('.events').append("<li>after event fired.</li>");
        }
	});
	
	//Photo Gallery
	jQuery("#gallery").liquo({
		menu: "#gallery-menu",
		random: false
	});
	
	//Magnific Popup
	jQuery('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
	});
	
	//Slick Slider For Testimonials
	$('.slider-nav').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		vertical: true,
		focusOnSelect: true,
		responsive: [
			{
			  breakpoint:500,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			  }
			}
  		]
	});
	
	/* scroll bottom to top */
	if (jQuery(this).scrollTop() > 100) {
		jQuery('.scrollup').fadeIn();
	} else {
		jQuery('.scrollup').fadeOut();
	}
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 100) {
			jQuery('.scrollup').fadeIn();
		} else {
			jQuery('.scrollup').fadeOut();
		}
	});
	jQuery('.scrollup').click(function () {
		jQuery("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});
	
	//Scroll to Section
	jQuery(".header a").click(function(e){
		e.preventDefault();
		var hrefVal = jQuery(this).attr("href");
		var sectionOffset = jQuery("#"+hrefVal).offset().top;
		jQuery('html, body').animate({
			scrollTop: sectionOffset
		}, 500);
	});
	
	//Team Pop-up
	jQuery(function () {
		jQuery('.popup-modal').magnificPopup({
			type: 'inline',
			preloader: false,
			focus: '#username',
			modal: true
		});
		jQuery(document).on('click', '.popup-modal-dismiss', function (e) {
			e.preventDefault();
			jQuery.magnificPopup.close();
		});
	});
	
	
	
});
