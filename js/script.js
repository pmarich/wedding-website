/* Author:
	Patrick Marich
	pmarich@realnetworks.com
*/


/* // Header Stuff // */

$(document).ready(function() {
     
     var useVid = window.matchMedia("(min-width: 720px)");
     
     	if (useVid.matches) {
	 	    $("#feat-img").html(
	 	    '<video id="feat-vid" poster="img/bg-movie_katie-pat.jpg" autoplay loop>' +
	 	    '<source src="img/bg-movie_katie-pat.mp4" type="video/mp4">' +
	 	    '<source src="img/bg-movie_katie-pat.ogv" type="video/ogg"></video'
	 	    );
     	} else {
	     	$("feat-img").css('display','none');
     	}
     	
     
     /* // - - Scroll Function - - // */

     
     $(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top},'slow');
	 });
      
	/*
window.onscroll = function(event) {
		$("#feat-img").css('position','fixed');	
	}
*/	
		/* - - SVG Support - - */
		
		/*
if (!Modernizr.svg) {
			$("#logo").attr("src", "");
		}
*/
		
});


/* // - - Gallery Grid - - // */

$(document).ready(function() {  

$('.medium').height($('.large').width()/2);
$('.small').height(($('.large').width()/2));
$('.large').css('max-height',$('.large').height());

	
	$(window).on('resize', function() {
		$('.medium').height($('.large').width()/2);
		$('.small').height($('.large').width()/2);
		$('.large').css('max-height',$('.large').height());
	});

});
 
