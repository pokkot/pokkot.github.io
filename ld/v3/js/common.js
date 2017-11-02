$(document).ready(function() {

	//mixItUp gallery
	$("#portfolio_grid").mixItUp();
	$(".s_portfolio li").click(function(){
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});


	//window size detect
	windowSizeDetect();
	$(window).resize(function() {
		windowSizeDetect();
	})
	function windowSizeDetect() {
		$(".main_head").css("height", $(window).height());
		$(".portfolio_item_info").css("padding-top", $(".portfolio_item").height()*0.3);
	};
	

	//triangle menu
	$(".sandwich-icon, .triangle-menu-list li a").click(function() {
		$(".triangle-menu-list, .triangle-menu").toggleClass("open");
	});

	$(".triangle-menu-list li a").mPageScroll2id();


	//simple menu
	$(".toggle_menu, .top_menu a").click(function() {
		$(".sandwich").toggleClass("active");
		$(".top_menu").fadeToggle(600);
		$(".top_menu li a").toggleClass("fadeInUp animated");
		$(".top_text").toggleClass("low_opacity");
	});

	$(".top_menu ul a").mPageScroll2id({offset:$('#top_bar').height()});


	//show menu after scroll
	//height of hide-zone
	var hh = $('header').height() - $('#top_bar').height();
	$(document).scroll(function() {
		var wScroll = $(this).scrollTop();
		if (wScroll >= $('#top_bar').offset().top) {
			$('#top_bar').removeClass('bar-hidden');
		} 
		if ( hh > wScroll) {
			$('#top_bar').addClass('bar-hidden');
		}
	});


	/*$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	});*/


	//validation
	$("input, select, textarea").jqBootstrapValidation();

});

$(window).load(function() {

	//loader
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");


	//animate.css
	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");

	$(".section_header .cont_photo .cont_list").animated("fadeIn", "fadeOut");

	$(".main_head .social_wrap li").animated("zoomIn", "zoonOut");
}); 