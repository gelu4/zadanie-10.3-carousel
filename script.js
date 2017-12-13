
$(function(){
	
var carouselList = $("#carousel ul");

setInterval(function changeSlide(){
	carouselList.animate({'margin-left':-400}, 1000, moveFirstSlide);
			
}, 3000);

	function moveFirstSlide(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	
	}

	
});
