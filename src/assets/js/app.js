// Navbar scrolling
$(function () {
	$(document).scroll(function () {
	  var $nav = $(".navbar-fixed-top");
	  $nav.toggleClass('scrolling', $(this).scrollTop() > $nav.height() / 2);
	});
});



//   Card flip
// $('.no-touch .card-container').on('mouseenter mouseleave', function () {
// 	$(this).toggleClass('is-flipped');
// });



// Scroll into view
function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height() / 2;

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function () {
    $('.fade-in').each(function () {
        if (isScrolledIntoView(this) === true) {
            $(this).addClass('visible')
        }
    });
});



// Paroller
$('.page-image').paroller(); 



// Navbar
$(".navbar-toggler").click(function() {
	$(".navbar-fixed-top").toggleClass("navbar-open");
});







// --- [ SCROLL TO TOP ]
// init controller
var controller = new ScrollMagic.Controller();
// build tween
var tween = TweenMax.from("#animate", 0.5, {autoAlpha: 0, scale: 0.7});
// build scene
var scene = new ScrollMagic.Scene({
	triggerElement: "a#top",
	duration: 200,
	triggerHook: "onLeave"
})
.setTween(tween)
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);

controller.scrollTo(function(target) {

	TweenMax.to(window, 0.5, {
	  scrollTo : {
		y : target, // scroll position of the target along y axis
		autoKill : true // allows user to kill scroll action smoothly
	  },
	  ease : Cubic.easeInOut
	});
  
  });

// bind scroll to anchor links
$(document).on("click", ".scroll-to[href^='#']", function (e) {
	var id = $(this).attr("href");
	if ($(id).length > 0) {
		e.preventDefault();
		// trigger scroll
		controller.scrollTo(id);
		// if supported by the browser we can even update the URL.
		if (window.history && window.history.pushState) {
			history.pushState("", document.title, id);
		}
	}
});