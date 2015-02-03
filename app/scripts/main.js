$(document).ready(function(){
	'use strict';
	$(window).scroll(function() {
		if ($('.navbar').offset().top > 50) {
			$('.navbar-fixed-top').addClass('top-nav-collapse');
		} else {
			$('.navbar-fixed-top').removeClass('top-nav-collapse');
		}
	});

	$('.nav a').on('click', function() {
		if ($('.navbar-toggle').css('display') !== 'none') {
			$('.navbar-toggle').trigger('click');
		}
	});

	$('.page-scroll a').on('click', function(ev) {
		var elem = $(ev.currentTarget.hash);
		$('html, body').stop().animate({
			scrollTop : elem.offset().top
		}, 1000, 'easeInOutExpo');
		ev.preventDefault();
	});
});