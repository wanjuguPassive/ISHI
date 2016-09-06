$(document).ready(function() {

    //Scroll Animation
    $(".scrollCue").click(function() {
    $('html,body').animate({
        scrollTop: $("#p_one").offset().top},
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
//	}).progress( function() {
//        $(this).masonry('layout');
//    });

//    var container = document.querySelector('#masonry');
//    var masonry = new Masonry(container, {
//        columnWidth: 320,
//        itemSelector: '.item',
//        isFitWidth: true,
//  });

});

