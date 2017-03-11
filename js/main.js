var headerColor = "rgba(240, 240, 240,";

var i = 0;
var images = ["img/bridge.jpg", "img/buckingham.jpg", "img/tower.jpg"];
var currentImage = images[0];

//function changeImage() {

//$(document).ready(function() {	
	// var arrowleft = document.getElementById("left");
	// arrowleft.addEventListener("click", changeImage, false);
	// var arrowright = document.getElementById("right");
	// arrowright.addEventListener("click", changeImage, false);
//});

checkScroll();

$(window).scroll(checkScroll);
function checkScroll() {
	var top = $(window).scrollTop();
	if(top > 0) {
		$("nav").css("backgroundColor", headerColor + "0)", 500);
	}
	if(top > 80) {
		$("nav").css("backgroundColor", headerColor + ".05", 500);
	}
	if(top > 100) {
		$("nav").css("backgroundColor", headerColor + ".1", 500);
	}
	if(top > 110) {
		$("nav").css("backgroundColor", headerColor + ".15", 500);
	}
	if(top > 120) {
		$("nav").css("backgroundColor", headerColor + ".3", 500);
	}
	if(top > 130) {
		$("nav").css("backgroundColor", headerColor + ".35", 500);
	}
	if(top > 140) {
		$("nav").css("backgroundColor", headerColor + ".4", 500);
	}
	if(top > 150) {
		$("nav").css("backgroundColor", headerColor + ".45", 500);
	}
	if(top > 160) {
		$("nav").css("backgroundColor", headerColor + ".5", 500);
	}
	if(top > 170) {
		$("nav").css("backgroundColor", headerColor + ".55", 500);
	}
	if(top > 180) {
		$("nav").css("backgroundColor", headerColor + ".6", 500);
	}
	if(top > 190) {
		$("nav").css("backgroundColor", headerColor + ".65", 500);
	}
	if(top > 200) {
		$("nav").css("backgroundColor", headerColor + ".7", 500);
	}
	if(top > 210) {
		$("nav").css("backgroundColor", headerColor + ".75", 500);
	}
	if(top > 220) {
		$("nav").css("backgroundColor", headerColor + ".8", 500);
	}
	if(top > 230) {
		$("nav").css("backgroundColor", headerColor + ".85", 500);
	}
	if(top > 240) {
		$("nav").css("backgroundColor", headerColor + ".9", 500);
	}
	if(top > 250) {
		$("nav").css("backgroundColor", headerColor + ".95", 500);
	}
	if(top > 260) {
		$("nav").css("backgroundColor", headerColor + "1", 500);
	}
}
