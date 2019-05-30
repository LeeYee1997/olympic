(function($) {
	"use strict"



	///////////////////////////
	// Preloader
	$(window).on('load', function() {
		$("#preloader").delay(600).fadeOut();
	});



	///////////////////////////
	// Smooth scroll
	$("a[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 1200);
	});

	$('#back-to-top').on('click', function(){
	$('body,html').animate({
		scrollTop: 0
	}, 600);
});


	$('#about-slider').owlCarousel({
		items:1,
		loop:true,
		margin:15,
		nav: true,
		dots : true,
		autoplay : true,
		animateOut: 'fadeOut'
	});



	///////////////////////////
	// On Scroll



})(jQuery);
