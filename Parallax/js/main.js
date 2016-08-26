$(document).ready(function(){
	if($("html").hasClass("mobile")){
		$("#content3").attr("data-stellar-background-ratio", "0.5");
		}
	$.stellar({
		horizontalScrolling: false,
		responsive: true
	});

	{
    $("html").niceScroll();
  	};

	$('a[href^="#"]').bind('click.smoothscroll',function (e) {

		e.preventDefault();

		var target = this.hash,
		$target = $(target);

		$('html, body').stop().animate( {
		'scrollTop': $target.offset().top
		}, "slow", 'swing', function () {
		window.location.hash = target;
		});
	});

	$("#cssmenu").menumaker({
	    title: "Menu",
	    breakpoint: 768,
	    format: "multitoggle"
	});

	$("#cssmenu").prepend("<div id='menu-line'></div>");

	var foundActive = false, activeElement, linePosition = 0, menuLine = $("#cssmenu #menu-line"), lineWidth, defaultPosition, defaultWidth;

	$("#cssmenu > ul > li").each(function() {
	  if ($(this).hasClass('active')) {
	    activeElement = $(this);
	    foundActive = true;
	  }
	});

	if (foundActive === false) {
	  activeElement = $("#cssmenu > ul > li").first();
	}

	defaultWidth = lineWidth = activeElement.width();

	defaultPosition = linePosition = activeElement.position().left;

	menuLine.css("width", lineWidth);
	menuLine.css("left", linePosition);

	$("#cssmenu > ul > li").hover(function() {
	  activeElement = $(this);
	  lineWidth = activeElement.width();
	  linePosition = activeElement.position().left;
	  menuLine.css("width", lineWidth);
	  menuLine.css("left", linePosition);
	}, function() {
	  menuLine.css("left", defaultPosition);
	  menuLine.css("width", defaultWidth);
	});

	$("#cssmenu > ul > li").click(function() {
		activeElement = $(this);
		defaultWidth = activeElement.width();
		defaultPosition = activeElement.position().left;
	});
});