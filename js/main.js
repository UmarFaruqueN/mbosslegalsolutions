jQuery(function($) {
    'use strict';

    (function() {
        $(window).on('load', function() {

            /*
            =========================================================================================
            1. Spinner 
            =========================================================================================
            */
            $(".outslider_loading").fadeOut("slow");

        });
    }());
    (function() {
        $(window).on('scroll', function() {
            /*
            =========================================================================================
            2. NAVBAR 
            =========================================================================================
            */

            if ($(window).scrollTop() > 10) {
                $(".header-area").addClass("ds_padding");
            } else {
                $(".header-area").removeClass("ds_padding");
            }

            var topHeight = $(".rev_slider_wrapper").outerHeight();
            var windowScroll = $(window).scrollTop();

            if (windowScroll > topHeight) {
                $(".onepage nav").addClass("navbar-fixed-top");
            } else {
                $(".onepage nav").removeClass("navbar-fixed-top");
            }

            var topHeight2 = $(".v3-header-top").outerHeight();
            var windowScroll2 = $(window).scrollTop();

            if (windowScroll2 > topHeight2) {
                $(".v3-header nav").addClass("navbar-fixed-top");
            } else {
                $(".v3-header nav").removeClass("navbar-fixed-top");
            }

            if ($(window).scrollTop() > topHeight2) {
                $(".v3-header-bg").addClass("ds_padding");
            } else {
                $(".v3-header-bg").removeClass("ds_padding");
            }
            var topHeight3 = $(".v3-header-top2").outerHeight();
            var windowScroll3 = $(window).scrollTop();


            if (windowScroll3 > topHeight3) {
                $(".v3-header nav").addClass("navbar-fixed-top");
            } else {
                $(".v3-header nav").removeClass("navbar-fixed-top");
            }

            if ($(window).scrollTop() > 10) {
                $(".v15-header").addClass("toogle_logo");
            } else {
                $(".v15-header").removeClass("toogle_logo");
            }

            $(".page").each(function() {
                var bb = $(this).attr("id");
                var hei = $(this).outerHeight();
                var grttop = $(this).offset().top - 80;
                if ($(window).scrollTop() > grttop - 1 && $(window).scrollTop() < grttop + hei - 1) {
                    var uu = $(".one-page > li >a[href='#" + bb + "']").parent().addClass("active");
                } else {
                    var uu = $(".one-page > li >a[href='#" + bb + "']").parent().removeClass("active");
                }
            });

            if ($(window).scrollTop() > 10) {
                $(".p-title-header-area").css("background-color", "#222");
            } else {
                $(".p-title-header-area").css("background-color", "transparent");
            }

            if ($(window).scrollTop() > 10) {
                $(".header-12-bg").addClass("menuzord-12");
            } else {
                $(".header-12-bg").removeClass("menuzord-12");
            }

            if ($(window).scrollTop() > 30) {
                $(".header-13").css("padding-top", "0px");
            } else {
                $(".header-13").css("padding-top", "30px");
            }

            /*
            =========================================================================================
            3. PROGRESS BAR
            =========================================================================================
            */

            $(".progress_cont").each(function() {
                var base = $(this);
                var windowHeight = $(window).height();
                var itemPos = base.offset().top;
                var scrollpos = $(window).scrollTop() + windowHeight - 100;
                if (itemPos <= scrollpos) {
                    var auptcoun = base.find(".progress-bar").attr("aria-valuenow");
                    base.find(".progress-bar").css({
                        "width": auptcoun + "%"
                    });
                    var str = base.find(".skill>span").text();
                    var res = str.replace("%", "");
                    if (res == 0) {
                        $({
                            countNumber: 0
                        }).animate({
                            countNumber: auptcoun
                        }, {
                            duration: 4000,
                            easing: 'linear',
                            step: function() {
                                base.find(".skill>span").text(Math.ceil(this.countNumber) + "%");
                            }
                        });
                    }
                }
            });

        });
    }());



    (function() {
        /*
        =========================================================================================
        3. TOOLTIP
        =========================================================================================
        */
        $('[data-toggle="tooltip"]').tooltip();
        /*
        =========================================================================================
        4. MEGA MENU
        =========================================================================================
        */
        $("#menuzord").menuzord();

        $(".menuzord-menu > li >a").click(function() {
            $(this).parent().addClass("active");
            $(".menuzord-menu > li >a").not(this).parent().removeClass("active");
            var TargetId = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(TargetId).offset().top - 50
            }, 1000, 'swing');
            return false;
        });
        /*
        =========================================================================================
        5. TESTIMONIAL SLIDER
        =========================================================================================
        */
        var owl_test = $("#testimonial-demo");

        owl_test.owlCarousel({
            items: 1, //10 items above 1000px browser width
            itemsDesktop: [1000, 1], //5 items between 1000px and 901px
            itemsDesktopSmall: [900, 1], // betweem 900px and 601px
            itemsTablet: [600, 1], //2 items between 600 and 0
            itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
        });

        // Custom Navigation Events
        $(".next").click(function() {
            owl_test.trigger('owl.next');
        })
        $(".prev").click(function() {
            owl_test.trigger('owl.prev');
        })


        // HOME 3 TESTIMONIAL SLIDER
        var client_testimonial = $("#home-3-testimonial-demo");

        client_testimonial.owlCarousel({
            items: 3, //10 items above 1000px browser width
            itemsDesktop: [1000, 3], //5 items between 1000px and 901px
            itemsDesktopSmall: [900, 2], // betweem 900px and 601px
            itemsTablet: [600, 1], //2 items between 600 and 0
            itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
        });


        // HOME 5 TESTIMONIAL SLIDER
        var home_5_client = $("#home-5-testimonial-demo");

        home_5_client.owlCarousel({
            items: 3, //10 items above 1000px browser width
            itemsDesktop: [1000, 3], //5 items between 1000px and 901px
            itemsDesktopSmall: [900, 3], // betweem 900px and 601px
            itemsTablet: [600, 2], //2 items between 600 and 0
            itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
        });

        // Custom Navigation Events
        $(".next").click(function() {
            home_5_client.trigger('owl.next');
        })
        $(".prev").click(function() {
            home_5_client.trigger('owl.prev');
        })

        // TESTIMONIAL DETAILS SLDIER ON TESTIMONIAL PAGE
        var testimonial_details = $("#testimonial-details-demo");

        testimonial_details.owlCarousel({
            dots: false,
            items: 2, //10 items above 1000px browser width
            itemsDesktop: [1000, 2], //5 items between 1000px and 901px
            itemsDesktopSmall: [900, 1], // betweem 900px and 601px
            itemsTablet: [600, 1], //2 items between 600 and 0
            itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
        });

        // Custom Navigation Events
        $(".next").click(function() {
            testimonial_details.trigger('owl.next');
        })
        $(".prev").click(function() {
            testimonial_details.trigger('owl.prev');
        })

        // TESTIMONIAL SLIDER HOME 9
        var left_slide = $("#left-slide-demo");

        left_slide.owlCarousel({
            dots: false,
            items: 1, //10 items above 1000px browser width
            itemsDesktop: [1000, 1], //5 items between 1000px and 901px
            itemsDesktopSmall: [900, 1], // betweem 900px and 601px
            itemsTablet: [600, 1], //2 items between 600 and 0
            itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
        });

        // Custom Navigation Events
        $(".next").click(function() {
            left_slide.trigger('owl.next');
        })
        $(".prev").click(function() {
            left_slide.trigger('owl.prev');
        })

        $(".history-panel-title a").on('click', function() {
            $(this).find('.arrow-minus').toggleClass();
        });



        /*
        =========================================================================================
        6. CLIENT SLIDER
        =========================================================================================
        */
        var owl_client = $("#client-demo");

        owl_client.owlCarousel({
            items: 6, //10 items above 1000px browser width
            itemsDesktop: [1000, 4], //5 items between 1000px and 901px
            itemsDesktopSmall: [900, 3], // betweem 900px and 601px
            itemsTablet: [600, 2], //2 items between 600 and 0
            itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
        });

        // Custom Navigation Events
        $(".next").click(function() {
            owl_client.trigger('owl.next');
        })
        $(".prev").click(function() {
            owl_client.trigger('owl.prev');
        })

        /*
        =========================================================================================
        7. HISTORY SLIDER
        =========================================================================================
        */
        var history_client = $("#history-demo");

        history_client.owlCarousel({
            items: 6, //10 items above 1000px browser width
            itemsDesktop: [1000, 4], //5 items between 1000px and 901px
            itemsDesktopSmall: [900, 3], // betweem 900px and 601px
            itemsTablet: [600, 2], //2 items between 600 and 0
            itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
        });

        // Custom Navigation Events
        $(".next").click(function() {
            history_client.trigger('owl.next');
        })
        $(".prev").click(function() {
            history_client.trigger('owl.prev');
        })



        /*
        =========================================================================================
        8. PRACTISE SLIDER
        =========================================================================================
        */
        var home_7_practice = $("#home-7-practice-demo");

        home_7_practice.owlCarousel({
            items: 4, //10 items above 1000px browser width
            itemsDesktop: [1000, 3], //5 items between 1000px and 901px
            itemsDesktopSmall: [900, 2], // betweem 900px and 601px
            itemsTablet: [600, 1], //2 items between 600 and 0
            itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
        });

        // Custom Navigation Events
        $(".next").click(function() {
            home_7_practice.trigger('owl.next');
        })
        $(".prev").click(function() {
            home_7_practice.trigger('owl.prev');
        })

        /*
        =========================================================================================
        9. QUOTE SLIDER SLIDER
        =========================================================================================
        */
        var home_9 = $("#home-9-demo");

        home_9.owlCarousel({
            items: 1, //10 items above 1000px browser width
            itemsDesktop: [1000, 1], //5 items between 1000px and 901px
            itemsDesktopSmall: [900, 1], // betweem 900px and 601px
            itemsTablet: [600, 1], //2 items between 600 and 0
            itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
        });

        // Custom Navigation Events
        $(".next").click(function() {
            home_9.trigger('owl.next');
        })
        $(".prev").click(function() {
            home_9.trigger('owl.prev');
        })
        /*
        =========================================================================================
        10. CONTACT  FORM VALIDATION   
        =========================================================================================
        */

        $("#Name").keyup(function() {
            "use strict";
            var value = $(this).val();
            if (value.length > 1) {
                $(this).parent().find(".error_message").remove();
                $(this).css({
                    "border": "1px solid rgba(0, 0, 0, 0.2)"
                })
            } else {
                $(this).parent().find(".error_message").remove();
                $(this).parent().append("<div class='error_message'>Name value should be at least 2</div>");
            }
        });
        $("#Email").keyup(function() {
            "use strict";
            var value = $(this).val();
            var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
            if (testEmail.test(value)) {
                $(this).parent().find(".error_message").remove();
                $(this).css({
                    "border": "1px solid rgba(0, 0, 0, 0.2)"
                })
            } else {
                $(this).parent().find(".error_message").remove();
                $(this).parent().append("<div class='error_message'>Please entire a valid email. </div>");
            }
        });
        $("#contact_submit").click(function() {
            "use strict";
            var nameValue = $("#Name").val();
            if (!nameValue.length) {
                $("#Name").css({
                    "border": "1px solid red"
                });
                $("#Name").parent().find(".error_message").remove();
                $("#Name").parent().append("<div class='error_message'>Name is required</div>");
                return false;
            }
            if (nameValue.length < 1) {
                $("#Name").css({
                    "border": "1px solid red"
                });
                $("#Name").parent().find(".error_message").remove();
                $("#Name").parent().append("<div class='error_message'>Name value should be at least 2</div>").show();
                return false;
            }
            var emailValue = $("#Email").val();
            var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
            if (!emailValue) {
                $("#Email").css({
                    "border": "1px solid red"
                });
                $("#Email").parent().find(".error_message").remove();
                $("#Email").parent().append("<div class='error_message'>Email is required</div>").show();
                return false;
            }
            if (!testEmail.test(emailValue)) {
                $("#Email").css({
                    "border": "1px solid red"
                });
                $("#Email").parent().find(".error_message").remove();
                $("#Email").parent().append("<div class='error_message'>Please entire a valid email.</div>").show();
                return false;
            }
            var subjectValue = $("#Subject").val();
            var messageValue = $("#Message").val();
            if (nameValue && emailValue) {
                $(".feedback_box").slideDown();
                $.ajax({
                    url: 'mail/mail.php',
                    data: {
                        name: nameValue,
                        email: emailValue,
                        subject: subjectValue,
                        message: messageValue
                    },
                    type: 'POST',
                    success: function(result) {
                        "use strict";
                        $(".show_result").append("<div class='result_message'>" + result + "</div>");
                        $(".result_message").slideDown();
                        $("#Name").val("");
                        $("#Email").val("");
                        $("#Subject").val("");
                        $("#Message").val("");
                    }
                });
            }
            return false;
        });

        /*
        =========================================================================================
        11. DATE COUNTDOWN
        =========================================================================================
        */
        var endDate = "January 26, 2016 20:39:00";
        $('.tk-countdown .row').countdown({
            date: endDate,
            render: function(data) {
                $(this.el).html('<div><div class="days"><span>' + this.leadingZeros(data.days, 2) + '</span><span>days</span></div><div class="hours"><span>' + this.leadingZeros(data.hours, 2) + '</span><span>hours</span></div></div><div class="tk-countdown-ms"><div class="minutes"><span>' + this.leadingZeros(data.min, 2) + '</span><span>minutes</span></div><div class="seconds"><span>' + this.leadingZeros(data.sec, 2) + '</span><span>seconds</span></div></div>');
            }
        });

        /*
        =========================================================================================
        12. SEARCH OVERLY
        =========================================================================================
        */
        $(".filter-search").click(function() {
            $(".full-page-search").addClass("open-search");
        });
        $(".sr-overlay").click(function() {
            $(".full-page-search").removeClass("open-search");
        });


        /*
        =========================================================================================
        13. COUNTER
        =========================================================================================
        */
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });


        /*
        =========================================================================================
        14. GALLERY SECTION
        =========================================================================================
        */

        $("#second").bootFolio({
            bfLayout: "bflayhover",
            bfFullWidth: "full-width",
            bfHover: "bfhoverCrafty",
            bfAnimation: "scale",
            bfSpace: "20",
            bfAniDuration: 500,
            bfCaptioncolor: "rgba(0, 0, 0, 0)",
            bfTextcolor: "#ffffff",
            bfTextalign: "center",
            bfNavalign: "center"
        });
        $('.image-link').magnificPopup({
            type: 'image'
        });



    }());

    (function() {
        /*
        =========================================================================================
        15. REMOVE SEARCH ON ESC PRESS
        =========================================================================================
        */
        $(document).on("keydown", function(e) {
            if (e.keyCode == 27) {
                $('.full-page-search').removeClass('open-search');
            }
        });
    }());

    $(function() {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 300,
            values: [50, 200],
            slide: function(event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));
    }());

    $(function() {
        $('.spinner .btn:last-of-type').on('click', function() {
            $('.spinner input').val(parseInt($('.spinner input').val(), 10) + 1);
        });
        $('.spinner .btn:first-of-type').on('click', function() {
            $('.spinner input').val(parseInt($('.spinner input').val(), 10) - 1);
        });
    }());

    $(function() {
        $('.add-to-cart').on('click', function() {
            $('.add-to-cart-content').toggleClass("open-cart");
            return false;
        });
        $(document).on("keydown", function(e) {
            if (e.keyCode == 27) {
                $('.add-to-cart-content').removeClass('open-cart');
            }
        });
    }());


});