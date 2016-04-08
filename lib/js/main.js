//==============================================================
// CUSTOM SCRIPTS
// Author: Last Door Solutions (http://lastdoorsolutions.com)
// 2011
// ==============================================================

$(document).ready(function() {
	$('#animation-slider .slides li').css({height:$(window).height()-0+"px"});
//==============================================================
// flexslider
// ==============================================================
// The slider being synced must be initialized first
              $('#secondary-nav').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                itemWidth: 150,
                asNavFor: '#animation-slider'
              });
              
              $('#animation-slider').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                video: true, 
                sync: "#secondary-nav"     
              });
 //==============================================================
// video pop up
// ==============================================================
// slide on hover of direction nav
var prev, next;
$("#animation-slider .flex-direction-nav li .flex-prev").hover(
			function () {
				$('#animation-slider').flexslider("prev");
				prev= setInterval(function(){$('#animation-slider').flexslider("prev");},2000);
				},
              function () {
			   clearTimeout(prev);
              }
        );
$("#animation-slider .flex-direction-nav li .flex-next").hover(
			function () {
			
				next= setInterval(function(){$('#animation-slider').flexslider("next");},2000);
				},
              function () {
			   clearTimeout(next);
              }
        );
//hide video wherever it is clicked
$(document).bind('click',function(){
	$('.image-description').removeClass("show");
});
//close the video when close button is clicked
$('.close').click(function(){
	$(this).parent().toggleClass("show");
});
//show the video pop up when watch link is clicked
$('.infobutton').click(function(e){
	e.stopPropagation();
	$(this).parent().find('.flex-active-slide > .image-description').toggleClass("show");
});

// show corresponding gif on click 
/*var original_image =$('.flex-active-slide').css('background-image');
	$('#animation-slider li').click(function(){
	$(this).find('img').css({'width':'100%','height':$(this).height()});
	$(this).find('img').attr('src',$(this).attr('title'));
});*/
//resize window 
$(window).resize(function(){
	resizeWindow();
});

/*$(".fullscreen").on('click', function(){
	$(this).toggleClass("entered");
});*/
});
// end ready function here.


function resizeWindow(){
	var new_width = $(document).width();
	var new_height = $(window).height()-0;
	$('#animation-slider .slides li').css({height:new_height+"px"});
	$('#animation-slider .slides li>img').css({'width':'100%','height':new_height+"px"});//.attr('src','images/blank.gif');
}
//==========================================================
function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
    resizeWindow();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
    resizeWindow();
  }
}