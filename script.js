$(document).ready(function(){
	document.body.style.backgroundColor = "#CC0000";
	$('#red').click(function(){
			document.body.style.backgroundColor = "#AA0000";
			document.getElementById("element").src = "http://imgur.com/DiTkjLW.jpg";
			//div.src = "http://imgur.com/DiTkjLW.jpg";
	});
	   /*$('#element').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });*/

});

