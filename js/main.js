(function($) {
	"use strict"

	///////////////////////////

	// Scrollspy
	$('body').scrollspy({
		target: '#nav',
		offset: $(window).height() / 2
	});

	///////////////////////////
	// Smooth scroll
	$("a[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 600);
	});





	///////////////////////////
	// On Scroll
	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();

		// Fixed nav
    wScroll > 600 ? $('.into').addClass('affix') : $('.into').removeClass('affix');
		wScroll > 600 ? $('.side-nav').addClass('affix') : $('.side-nav').removeClass('affix');
    wScroll > 600 ? $('.maintext').addClass('col-md-offset-4') : $('.maintext').removeClass('col-md-offset-4');
    wScroll > 600 ? $('.maintext').removeClass('col-md-offset-1') : $('.maintext').addClass('col-md-offset-1');

	});



})(jQuery);
