$(document).ready(function(){
	/*$(.element).click(function(){
		$(this).getElementsByClassName("element_click");
		$(this).animate({
			height:'-=10px'
		});
	});*/
	document.body.style.backgroundColor = "#AA0000";
	$('div').mouseenter(function(){
		$(this).animate({
			height:'+=10px'
			});
	});

});
