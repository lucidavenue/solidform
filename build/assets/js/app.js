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