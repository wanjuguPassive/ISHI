

    "use strict";
    //Scroll Down Animation
    $(".scrollCue").click(function() {
        $('html,body').animate({
        scrollTop: $("#p_one").offset().top},
        1200 );
    });


    $(".scrollUp_").click(function() {
        $('html,body').animate({
            scrollTop: $("#intro").offset().top},
            'slow');
    });

    //bxSlider
    $('.bxslider').bxSlider({
        auto: true,
        pause: 5000
    });

    //WHAT WE DO - Click to reveal






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



