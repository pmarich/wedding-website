/* Author:
	Patrick Marich
	pmarich@realnetworks.com
*//* // Header Stuff // */$(document).ready(function(){$(".scroll").click(function(e){e.preventDefault();$("html,body").animate({scrollTop:$(this.hash).offset().top},"slow")});Modernizr.svg||$("#logo").attr("src","")});$(document).ready(function(){$(".medium").height($(".large").width()/2);$(".small").height($(".large").width()/2);$(window).on("resize",function(){$(".medium").height($(".large").width()/2);$(".small").height($(".large").width()/2)})});