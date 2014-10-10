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
	 
	 /* // - - Menu Toggle - - // */
	 
	 var menu = $('nav ul');

	 $('.menu-toggle').click(function() {
	 	$(menu).slideToggle('slow');
	 });
	 
	 if ($(window).width() < 640) {
	 	$(menu).css('display','none');
	 } else {
	 	$(menu).css('display','block');
	 }
	 
	 $(window).on('resize', function() {
	         if ($(window).width() < 640) {
	 			$(menu).css('display','none');
	 		} else {
	 			$(menu).css('display','block');
	 		}
	 });
	 
	 
	/* // - - Lightwindow - - // */
	
	var vidPopup = $('.pop-up');
	
	/* // Video Playback // */
	
	$('.trigger-window').click(function() {
		$(vidPopup).fadeToggle('slow');
	});
	
	/* // Close Window // */
	
	$('.icon-close').click(function() {
		$(vidPopup).fadeToggle('slow');
	});
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



 
