$(document).ready(function() {

	$('.scroll-link').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
	});


	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$(".timeline-text-container").on("click", function () {
			$(this).children(".timeline-hover-notice").hide();
			$(this).children(".timeline-class-desc").stop().slideToggle();
		});	
	} else {
		$(".timeline-text-container").hover(function(){
			$(this).children(".timeline-hover-notice").hide();
			$(this).children(".timeline-class-desc").stop().slideToggle();
		});
	}

	navSetter('main');
	navSetter('timeline');
	navSetter('portfolio');

});
// scroll function
function scrollToID(id, speed){
	var targetOffset = $(id).offset().top -40;
	$('html,body').animate({scrollTop:targetOffset}, speed);
}

function navSetter(id) {

	var target = $("#"+id).offset().top -50,
	    timeout = null;

	$(window).scroll(function () {
	    if (!timeout) {
	        timeout = setTimeout(function () {           
	            clearTimeout(timeout);
	            timeout = null;
	            if ($(window).scrollTop() >= target) {
	            	$(".nav").children().removeClass('active');
	                $("#nav-"+id).addClass('active');
	            }
	        }, 250);
	    }
	});

}
