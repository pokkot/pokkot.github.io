$(document).ready(function() {

	$("#portfolio_grid").mixItUp();
	$(".s_portfolio li").click(function(){
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	windowSizeDetect();
	$(window).resize(function() {
		windowSizeDetect();
	})
	function windowSizeDetect() {
		$(".main_head").css("height", $(window).height());
	};


	//triangle menu
	$('.sandwich-icon, .triangle-menu-list li a').click(function() { 
		$('.triangle-menu-list, .triangle-menu').toggleClass('open');
	});

	$(".triangle-menu-list li a").mPageScroll2id();


	//simple menu
	$(".toggle_menu, .top_menu a").click(function() {
		$(".sandwich").toggleClass("active");
		$(".top_menu").fadeToggle(600);
		$(".top_menu li a").toggleClass("fadeInUp animated");
		$(".top_text").toggleClass("low_opacity");
	});

	$(".top_menu ul a").mPageScroll2id();



	/*$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	});*/

});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");
	$(".social_wrap li").animated("zoomIn", "zoonOut");

	$(".left .resume_item").animated("fadeInLeft", "fadeOutDown");
	$(".right .resume_item").animated("fadeInRight", "fadeOutDown");

}); 