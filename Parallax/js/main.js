$(document).ready(function(){
	if($("html").hasClass("mobile")){
		$("#content3").attr("data-stellar-background-ratio", "0.5");
		}
	$.stellar({
		horizontalScrolling: false,
		responsive: true
	})

	$('a[href^="#"]').bind('click.smoothscroll',function (e) {

		e.preventDefault();

		var target = this.hash,
		$target = $(target);

		$('html, body').stop().animate( {
		'scrollTop': $target.offset().top
		}, "slow", 'swing', function () {
		window.location.hash = target;
		});
	})

	$('li > a').click(function() {
	    $('li').removeClass();
	    $(this).parent().addClass('active');
	});
});