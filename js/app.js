$(document).ready(function() {

    //Scroll Animation
    $(".scrollCue").click(function() {
    $('html,body').animate({
        scrollTop: $("#page2").offset().top},
        'slow');
});

	// Initialize Masonry
//	$('#content').masonry({
//		columnWidth: 320,
//		itemSelector: '.item',
//		isFitWidth: true,
//		isAnimated: !Modernizr.csstransitions
//	}).imagesLoaded(function() {
//		$(this).masonry('reload');
//	});

});

