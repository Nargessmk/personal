jQuery(document).ready(function($){
    function pageScroll() {
        window.scrollBy(0,50); 
        scrolldelay = setTimeout('pageScroll()',100);
    }
        
    $('body').on( 'load', pageScroll())
    
})

// scroll navabr
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide up script
    $('.scroll-up-btn').click(function () {
        $("html").animate({
            scrollTop: 0
        })
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    var typpe = new Typed(".typing", {
        strings: ["طراح ", "برنامه نویس", "فریلنسر ", "بلاگر"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    // owlcarousel script
    $('.carousel').owlCarousel({
        loop: true,
        rtl: true,
        items: 5,
        margin: 20,
        autoplayHoverPause: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});




