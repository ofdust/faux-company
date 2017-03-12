//$(document).ready(function() {


//});

function changeImage(picture) {
	$(".active-img").css("opacity", "0");
	if (picture == buckingham) {
		$(".active-img").attr("src", "img/buckingham.jpg");
		$(".active-caption").html("<p>Buckingham Palace</p>");
		$(".thumbnail").each(function() {
		 	$( this ).addClass("inactive");
		})
		$("#buckingham").removeClass("inactive");
	}
	if (picture == tower) {
		$(".active-img").attr("src", "img/tower.jpg");

		$(".active-caption").html("<p>The Tower of London</p>");

		$(".thumbnail").each(function() {
		 	$( this ).addClass("inactive");
		});
		$("#tower").removeClass("inactive");
	}
	if (picture == market) {
		$(".active-img").attr("src", "img/market.jpg");
		$(".active-caption").html("<p>The Portobello Market</p>");
		$(".thumbnail").each(function() {
		 	$( this ).addClass("inactive");
		});
		$("#market").removeClass("inactive");
	}
	if (picture == bridge) {
		$(".active-img").attr("src", "img/bridge.jpg");
		$(".active-caption").html("<p>London Bridge</p>");
		$(".thumbnail").each(function() {
		 	$( this ).addClass("inactive");
		})
		$("#bridge").removeClass("inactive");
	}
	$(".active-img").animate({opacity: "1"}, 1000);
}

$(document).ready(function() {
	$("#bridge").click(function(){changeImage(bridge)});
	$("#buckingham").click(function(){changeImage(buckingham)});
	$("#tower").click(function(){changeImage(tower)});
	$("#market").click(function(){changeImage(market)});
});



var headerColor = "rgba(240, 240, 240,";

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
