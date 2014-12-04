$(document).ready(function(){
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse")
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse")
		}
	});
	
	$(".nav a").on("click", function() {
		if ($(".navbar-toggle").css("display") != "none") {
			$(".navbar-toggle").trigger("click")
		}
	});
	
	$(".page-scroll a").bind("click", function(b) {
		var a = $(this);
		$("html, body").stop().animate({
			scrollTop : $(a.attr("href")).offset().top
		}, 1500, "easeInOutExpo");
		b.preventDefault()
	});
});