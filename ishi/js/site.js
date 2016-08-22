$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
		$('#prev').click();
        break;

        /*
		case 38: // up
		$('#lightbox').click();
        break;
		*/

        case 39: // right
		$('#next').click();
        break;

        /*
		case 40: // down
		$('#lightbox').click();
        break;
		*/

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

// DOC READY
// =================================

$(document).ready(function() {

	var bHeight = $(window).height();
	var bWidth = $(window).width();

	if (bWidth <=768) {
		var isMobile = true;
		$('html').removeClass('desktop');
		$('html').addClass('mobile');
	} else {
		var isMobile = false;
		$('html').removeClass('mobile');
		$('html').addClass('desktop');
	}


	// INTRO
	// =================================
	$('.intro').imagesLoaded(function() {
		$('body.home').addClass('done');
	});

	$('.scrollCue, .intro .logo').click(function() {
	    $('html, body').animate({
				scrollTop: ($('.homeGrid').offset().top + 135)
	    }, 700, function() {

		});

	});



	// NAV MENU
	// =================================

	$('.menuBtn').click(function() {
		$('body').toggleClass('menuOpen');
	});



  // GRID
	// =================================

	if ( $('body').hasClass('masonry') ) {

		/*

		var $container = $('.grid');
		// initialize Masonry after all images have loaded
		$container.imagesLoaded( function() {
		  $container.masonry({
				itemSelector: '.grid li',
				columnWidth: '.grid-sizer',
		    gutter: '.gutter-sizer',
	      transitionDuration: 0
	    });
		});

		*/

	  new AnimOnScroll( document.getElementById( 'grid' ), {
			minDuration : 0.4,
			maxDuration : 0.7,
			viewportFactor : 0.3
		} );

	} else if ( $('body').hasClass('home') ) {

		/*

		var $container = $('.grid');
		// initialize Masonry after all images have loaded
		$container.imagesLoaded( function() {
		  $container.masonry({
				itemSelector: '.grid li',
				columnWidth: 1,
	      transitionDuration: 0
	    });
		});

		*/

	  new AnimOnScroll( document.getElementById( 'grid' ), {
			minDuration : 0.4,
			maxDuration : 0.7,
			viewportFactor : 0.3
		} );

	}

	// ADD TO / ADDED Buttons LIGHTBOX
	// =================================
	$('.lbox').click(function() {
		var theParent = $(this).parent();
		var theID = $(this).data('id');

		theParent.toggleClass('added');
		if ( theParent.hasClass('added') ) {

			// we have the photo id, ajax call to add to database
			var dataString = 'picID='+ theID;
			$.ajax({
				type: "POST",
				url: "/classes/addToLightbox.php",
				data: dataString,
				success: function(response) {
					var newCount = response;
					$(".lightboxQty").html(newCount);
				}
			});

			$(this).find('span.text').html('REMOVE');
			$(this).find('img').attr('src', '/images/icon-remove.png');
		} else {

			// we have the photo id, ajax call to add to database
			var dataString = 'picID='+ theID;
			$.ajax({
				type: "POST",
				url: "/classes/removeFromLightbox.php",
				data: dataString,
				success: function(response) {
					var newCount = response;
					$(".lightboxQty").html(newCount);
				}
			});

			if ($('body').hasClass('lightbox')) {
				$(theParent).remove();
			}

			$(this).find('span.text').html('ADD TO LIGHTBOX');
			$(this).find('img').attr('src', '/images/icon-add.png');
		}
	});

	$('.lbTools .lb_clear').click(function() {

		var dataString = '';
		$.ajax({
			type: "POST",
			url: "/classes/removeAllLightbox.php",
			data: dataString,
			success: function(response) {
				var newCount = response;
				$('.lightbox .grid-item').fadeTo(300,0);
				setTimeout(function() {
					$('.lightbox .grid-item').remove();
				},500)
				$(".lightboxQty").html(newCount);
				$("main section").html('<h1 style="text-align: center;">YOUR LIGHTBOX IS EMPTY</h1>');
			}
		});
		return false;

	});

	// open PDF selector
	$('.lbTools .lb_download').click(function() {
		$('body').addClass('pdfOpen');
	});

	// select PDF layout
	$('.pdf_select ul li').click(function() {
		$('.pdf_select ul li').removeClass('selected');
		var items = $(this).data('items');
		var slug = $(this).data('slug');
		$(this).addClass('selected');
		$('.downloadPDF').attr('href', "/createPDF.php?layout="+items+"&lightboxSlug="+slug);
	});


	// CREATE LIGHTBOX LINK
	$(".lbTools .lb_link").click(function() {

		$('body').addClass('linkOpen');
		$( ".pdf_link article" ).load( "/createLink.php" );
		return false;

	});

	$('body').on( "click", ".closeLB", function(e) {
		$('body').removeClass('pdfOpen linkOpen');
	});


  // FILTER
 	// =================================

  $('nav.filter ul').each(function() {

    var theList = $(this);
    var colsNeeded = 2;
    var liCount = $('li', theList).length;
    var colCount = Math.ceil(liCount / colsNeeded);
    var toWrap = $('li', theList);

    for(var i = 0; i < toWrap.length; i+=colCount) {
    toWrap.slice(i, i+colCount).wrapAll("<div class='filterCol'></div>");
    }

  });

  $('.toolbar .icon.filter, .toolbar p').click(function() {
    $('body').addClass('filterOpen');
  });

  $('.closeLB').click(function() {
    $('body').removeClass('filterOpen').removeClass('videoOpen');
	$('.video.popup nav').html('');
  });

  // VIDEO PROJECT CLICK

  $('.grid  li.grid-item a.playVideo').click(function(e) {

	  e.preventDefault();

	  var bWidth = $(window).width();
	  var theVideo = $(this).parent().find('.videoStorage').html();

	  $('.video.popup nav').html(theVideo);
	  var sizeVideo = $('.video.popup nav iframe');
	  videoSizeWidth(sizeVideo, (bWidth * .5));
	  $('body').addClass('videoOpen');
  });


	function videoSizeWidth(theVideo, theWidth) {

		var vidW = theVideo.attr('width');
		var vidH = theVideo.attr('height');
		var vidRatio = vidW / vidH;

		var newHeight = theWidth / vidRatio;

		theVideo.height(newHeight);

	}

	// LAYOUT
	// =================================
	function fluid() {

		var bHeight = $(window).height();
		var bWidth = $(window).width();

	/*
	// video lightbox
	var sizeVideo =  $('.video.popup nav iframe');
	videoSizeWidth(sizeVideo, (bWidth * .8));
	*/

    //home page
    $('.intro').height(bHeight);

		/* SKROLLR */
		if (bWidth > 768) {
			if ($('body').hasClass('home')) {
				var s = skrollr.init();
				s.refresh();
			}
		}

    //filter logo - has to match positioning of header logo
    $('.filter.popup img').hide();
    setTimeout(function() {
      var matchPosition = $('header nav ul li.desktopOnly').position();
      $('.filter.popup img').css({
        'top': matchPosition.top,
        'left': matchPosition.left
      });
      $('.filter.popup img').fadeTo(300,1);
    },500);

		//masonry grid margins
		var gutterSize = $('.masonry .gutter-sizer').width();
		$('.grid .grid-item').css('margin-bottom', gutterSize );

	}

	fluid();




	// WINDOW RESIZE
	// =================================
	$(window).resize(function() {

		var bHeight = $(window).height();
		var bWidth = $(window).width();

		if (bWidth <=768) {
			var isMobile = true;
			$('html').removeClass('desktop');
			$('html').addClass('mobile');
		} else {
			var isMobile = false;
			$('html').removeClass('mobile');
			$('html').addClass('desktop');
		}

		fluid();

	});


});
// END DOC READY
