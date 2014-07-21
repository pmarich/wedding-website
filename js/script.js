/* Author:
	Patrick Marich
	pmarich@realnetworks.com
*/


/* // Header Stuff // */

$(document).ready(function() {
     
     /* // - - Scroll Function - - // */

     
     $(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top},'slow');
	});
      
			
		/* - - SVG Support - - */
		
		if (!Modernizr.svg) {
			$("#logo").attr("src", "");
		}
		
});


/* // - - Gallery Grid - - // */

$(document).ready(function() {  

/* $('.large').height(($('.large img').width()/1.2)); */
$('.medium').height($('.large').width()/2);
$('.small').height(($('.large').width()/2));

	
	$(window).on('resize', function() {
		$('.medium').height($('.large').width()/2);
		$('.small').height($('.large').width()/2);
	});

});
 
/*
$(document).ready(function() {  

$('.mod').height($('.mod').width());
	
	$(window).on('resize', function() {
		$('.mod').height($('.mod').width());
	});

});
*/