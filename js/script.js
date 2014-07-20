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

/* // - - Lightwindow - - // */
 
$(document).ready(function() {  

	var vidPopup = $('.vidWindow');
	
	
	/* // Video Playback // */
	
	$('#playVid').click(function() {
		$(vidPopup).fadeToggle('slow');
	});
	
	
	/* // YouTube Video Swap // */

	$('#playVid').click(function(){
		var playVid = $('#vid-load');
	
	    var video = '<iframe width="640" height="480" src="'+ $(playVid).attr('data-video') +' class="meet-realplayer"></iframe>';
	    $(playVid).replaceWith(video);
	    
	});
	
	/* // Close Window // */
	
	$('.icon-close').click(function() {
		$(vidPopup).fadeToggle('slow');
		
		if ($('.meet-realplayer').is(':visible')) {
		     $(this).hide();
	    } else {
		    $(this).show();
	    }
	});

});
