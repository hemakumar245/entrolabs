$(window).on('load', function() {
    /*Product Slider JS*/
    $("#products-slider").owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 1200,
        loop: true,
        nav: false,
        navText: false,
        dots: false,
        mouseDrag: true,
        touchDrag: true,
        center: true,
        responsive: {
            1280: {
                items: 3
            },
            1000: {
                items: 3
            },
            900: {
                items: 3,
            },
            768: {
                items: 3,
            },
            320: {
                items: 1,
                dots: true
            },
        }
    });
    $("#projects-slider").owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 1200,
        loop: true,
        nav: false,
        navText: false,
        dots: false,
        mouseDrag: true,
        touchDrag: true,
        center: true,
        responsive: {
            1280: {
                items: 5,
            },
            1000: {
                items: 5,
            },
            900: {
                items: 5,
            },
            768: {
                items: 5,
            },
            320: {
                items: 1,
                dots: true
            },
        }
    });
    $("#home-testimonial-slider").owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 1200,
        loop: false,
        nav: false,
        //navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
        dots: true,
        mouseDrag: true,
        touchDrag: true,
        center: true,
        responsive: {
            2560:{
                items: 1,
                dots:true
            },
            1400:{
                items: 1,
                dots: true
            },
            1280: {
                items: 1,
                dots: true
            },
            1000: {
                items: 1,
                dots: true
            },
            900: {
                items: 1,
                dots: true
            },
            768: {
                items: 1,
                dots: true
            },
            310: {
                items: 1,
                dots: true
            },
        }
    });

    /*sponsors Slider JS*/
    $("#sponsors-slider").owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 1200,
        items: 5,
        margin: 30,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
        loop: true,
        responsive: {
            1280: {
                items: 4,
            },
            600: {
                items: 3,
            },
            320: {
                items: 1,
            },
        }
    });

    /*Partner Slider JS*/
    $("#partner-slider").owlCarousel({
        items: 5,
        margin: 30,
        dots: true,
        nav: false,
        loop: true,
        responsive: {
            1280: {
                items: 5,
            },
            600: {
                items: 2,
            },
            320: {
                items: 1,
            },
        }
    });

    /*Partner Slider JS*/
    $("#management-says-slider").owlCarousel({
        items: 1,
        margin: 30,
        dots: true,
        nav: false,
        loop: true,
        responsive: {
            1280: {
                items: 1,
            },
            600: {
                items: 1,
            },
            320: {
                items: 1,
            },
        }
    });

    /*START TESTIMONIAL JS*/
    $("#testimonial-slider").owlCarousel({
        items: 3,
        margin: 30,
        dots: false,
        nav: false,
        pagination: true,
        slideSpeed: 1000,
        autoPlay: false,
        responsive: {
            1280: {
                items: 3,
            },
            600: {
                items: 2,
            },
            320: {
                items: 1,
            },
        }

    });
});