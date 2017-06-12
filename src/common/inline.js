// Scroll to Top of Page
$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop:hidden').stop(true, true).fadeIn();
    } else {
        $('#toTop').stop(true, true).fadeOut();
    }
    if ($(document).width() > 767) {
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
            $("header").addClass("scrolled");
        } else {
            $("header").removeClass("scrolled");
        }
    }
});
