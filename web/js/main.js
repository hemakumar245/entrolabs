(function($) {
    "use strict";

    //preloader
    $(window).on('load', function() {
        $('#loading-wrap').fadeOut('1000', function() {
            $(this).remove();
        });
    });

    /*--------------------------------------
        Fixed Header
     ----------------------------------------*/
    $(window).on("scroll", function() {
        if ($(window).scrollTop() >= 25) {
            $("#navigation").addClass("bg-navbar");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $("#navigation").removeClass("bg-navbar");
        }
    });

    //Sticky-navbar js
    // var lastScrollTop = 0;
    // var $navbar = $('#navigation');
    // $(window).on("scroll", function() {
    //     var st = $(this).scrollTop();
    //     if (st > lastScrollTop) {
    //         $navbar.fadeOut();
    //     } else {
    //         $navbar.fadeIn();
    //     }
    //     lastScrollTop = st;
    // });

    //Sticky-navbar js
    // $(window).on("scroll", function() {
    //     var bodyScroll = $(window).scrollTop(),
    //         navbar = $("#navigation"),
    //         logo = $(".navbar .entro-logo> img");
    //     if (bodyScroll > 0) {
    //         navbar.addClass("nav-scroll");
    //         logo.attr('src', 'images/entro-labs-logo.png');

    //     } else {
    //         navbar.removeClass("nav-scroll");
    //         logo.attr('src', 'images/entro-labs-logo.png');
    //     }
    // });


    // $(function() {
    //     $.material.init();
    // });

    //Animate js
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false
    });
    wow.init();

    //navbar dropdown
    $('.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(300);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(300);
    });

    // scroll down JS

    $("a.down").click(function() {
        $('html, body').animate({
            scrollTop: $("#about-us").offset().top
        }, 2000);
    });
/*Counter
------------------------------------------------*/
    (function($) {
        $.fn.countTo = function(options) {
            options = options || {};

            return $(this).each(function() {
                // set options for current element
                var settings = $.extend({}, $.fn.countTo.defaults, {
                    from: $(this).data('from'),
                    to: $(this).data('to'),
                    speed: $(this).data('speed'),
                    refreshInterval: $(this).data('refresh-interval'),
                    decimals: $(this).data('decimals')
                }, options);

                // how many times to update the value, and how much to increment the value on each update
                var loops = Math.ceil(settings.speed / settings.refreshInterval),
                    increment = (settings.to - settings.from) / loops;

                // references & variables that will change with each update
                var self = this,
                    $self = $(this),
                    loopCount = 0,
                    value = settings.from,
                    data = $self.data('countTo') || {};

                $self.data('countTo', data);

                // if an existing interval can be found, clear it first
                if (data.interval) {
                    clearInterval(data.interval);
                }
                data.interval = setInterval(updateTimer, settings.refreshInterval);

                // initialize the element with the starting value
                render(value);

                function updateTimer() {
                    value += increment;
                    loopCount++;

                    render(value);

                    if (typeof(settings.onUpdate) == 'function') {
                        settings.onUpdate.call(self, value);
                    }

                    if (loopCount >= loops) {
                        // remove the interval
                        $self.removeData('countTo');
                        clearInterval(data.interval);
                        value = settings.to;

                        if (typeof(settings.onComplete) == 'function') {
                            settings.onComplete.call(self, value);
                        }
                    }
                }

                function render(value) {
                    var formattedValue = settings.formatter.call(self, value, settings);
                    $self.html(formattedValue);
                }
            });
        };

        $.fn.countTo.defaults = {
            from: 0, // the number the element should start at
            to: 0, // the number the element should end at
            speed: 10000, // how long it should take to count between the target numbers
            refreshInterval: 100, // how often the element should be updated
            decimals: 0, // the number of decimal places to show
            formatter: formatter, // handler for formatting the value before rendering
            onUpdate: null, // callback method for every time the element is updated
            onComplete: null // callback method for when the element finishes updating
        };

        function formatter(value, settings) {
            return value.toFixed(settings.decimals);
        }
    }(jQuery));

    jQuery(function($) {
        // custom formatting example
        $('.count-number').data('countToOptions', {
            formatter: function(value, options) {
                return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
            }
        });

        // start all the timers
        $('.timer').each(count);

        function count(options) {
            var $this = $(this);
            options = $.extend({}, options || {}, $this.data('countToOptions') || {});
            $this.countTo(options);
        }
    });


    // scrollUp JS

    $('#scrollUp').fadeOut();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scrollUp').fadeIn();
        } else {
            $('#scrollUp').fadeOut();
        }
    });
    $('#scrollUp').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 700);
        return false;
    });


})(jQuery);