


$(window).scroll(function() {  var navbarColor = "62,195,246";
                             //color attr for navbar  var smallLogoHeight = $('.small-logo').height();  var bigLogoHeight = $('.big-logo').height();  var navbarHeight = $('.navbar').height();     var smallLogoEndPos = (navbarHeight - smallLogoHeight) / 2;    var ratio = (smallLogoHeight / bigLogoHeight);  var ySmall = ($(window).scrollTop() * ratio);   var smallPadding = navbarHeight - ySmall;    if (smallPadding > navbarHeight) { smallPadding = navbarHeight; }  if (smallPadding < smallLogoEndPos) { smallPadding = smallLogoEndPos; }  if (smallPadding < 0) { smallPadding = 0; }    $('.small-logo-container ').css({ "padding-top": smallPadding});    var navOpacity = ySmall / smallLogoHeight;   if  (navOpacity > 1) { navOpacity = 1; }  if (navOpacity < 0 ) { navOpacity = 0; }  var navBackColor = 'rgba(' + navbarColor + ',' + navOpacity + ')';  $('.navbar').css({"background-color": navBackColor});    var shadowOpacity = navOpacity / 2;  if ( ySmall > 1) {    $('.navbar').css({"box-shadow": "0 2px 3px rgba(0,0,0," + shadowOpacity + ")"});  } else {    $('.navbar').css({"box-shadow": "none"});  }      });



