
function changeImage(picture) {
	$(".active").css("opacity", "0");
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
		$(".active-caption").html("<p>Tower Bridge</p>");
		$(".thumbnail").each(function() {
		 	$( this ).addClass("inactive");
		})
		$("#bridge").removeClass("inactive");
	}
	$(".active").animate({opacity: "1"}, 1000);
}

$(document).ready(function() {
	$("#bridge").click(function(){changeImage(bridge)});
	$("#buckingham").click(function(){changeImage(buckingham)});
	$("#tower").click(function(){changeImage(tower)});
	$("#market").click(function(){changeImage(market)});
});



var headerColor = "rgba(240, 240, 240,";

// media query event handler
if (matchMedia) {
  var mq = window.matchMedia("(min-width: 594px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    $(window).scroll(checkScroll);
	function checkScroll() {
		checkScroll();
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
}
	else {
	    $("nav").css("backgroundColor", "rgba(240,240,240,1)");
	}

}




function initMap() {
		var twr = {lat:51.508293, lng: -0.075992};
        var centr = {lat: 51.510042, lng: -0.128070};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: centr
        });
        var marker = new google.maps.Marker({
          position: twr,
          map: map
        });
        var bigben = new google.maps.Marker({
        	position: {lat:51.500896, lng:-0.124615},
        	map: map
        });
        var buck = new google.maps.Marker({
        	position: {lat:51.501564, lng:-0.141954},
        	map: map
        });
        var portobello = new google.maps.Marker({
        	position: {lat:51.516072, lng:-0.205036},
        	map: map
        });
        var twrbridge = new google.maps.Marker({
        	position: {lat:51.505790, lng:-0.075389},
        	map: map
        });
        var park = new google.maps.Marker({
        	position: {lat:51.507008, lng:-0.165934},
        	map: map
        });
        var tate = new google.maps.Marker({
        	position: {lat:51.507762, lng:-0.099367},
        	map: map
        });
      }


// shout out to https://css-tricks.com/snippets/jquery/smooth-scrolling/ for this scrolling help
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 100}, 1000);
        return false;
      }
    }
  });
});



