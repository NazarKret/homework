$(function(){
//************************************** DROPDOWN ****************************************\\
$("li").has(".dropdown").hover(
	function(){
		$(this).find(".dropdown").slideDown();	
	},
	
	function(){
		$(this).find(".dropdown").slideUp();	
	}
);

//************************************** THUMBNAILS ***************************************\\
$(".thumbnails li img").hover(
	function(){
		$(this).animate({
			width: "90px",
			height: "90px"
		}, 500);	
	},
	function(){
		$(this).animate({
			width: "50px",
			height: "50px"
		}, 500);	
	}
);

//************************************** VIDEOS *********************************************\\
$(".column-two h2").click(function(e){
	$(this).next().slideToggle();
});

//************************************* WEATHER **********************************************\\


});