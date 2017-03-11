//var i = 0;
//var images = ["img/bridge.jpg", "img/buckingham.jpg", "img/tower.jpg"];

function changeImage() {
	var currentImage = ("#gallery figure.active");
	var nextImage;
		if(currentImage.next().length == 0) {
			nextImage = $("gallery figure:first");
		}
		else {
			nextImage = currentImage.next();
		}

	currentImage.addClass("last-active");
	nextImage.css({opacity: 0.0}).addClass("active").animate({opacity: 1.0}, 1000,
		function(){currentImage.removeClass("active last-active");
	});
}

//$(document).ready(function() {	
	var arrowleft = document.getElementById("left");
	arrowleft.addEventListener("click", changeImage, false);
	var arrowright = document.getElementById("right");
	arrowright.addEventListener("click", changeImage, false);
//});
