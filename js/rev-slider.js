$(document).ready(function(){
        /*
        =========================================================================================
        11. REVOLUTION SLIDER
        =========================================================================================
        */
        $("#slider1").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 1000,
            gridwidth: 1230,
            gridheight: 720,
            dottedOverlay: "twoxtwo",
            navigation: {
                keyboardNavigation: "on",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "on",
                touch: {
                    touchenabled: "off",
                    swipe_treshold: 75,
                    swipe_min_touches: 1,
                    drag_block_vertical: false,
                    swipe_direction: "horizontal"
                },
                arrows: {
                    style: "",
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: false,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    hide_under: 0,
                    hide_over: 9999,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0,
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    }
                },
                bullets: {
                    style: "",
                    enable: true,
                    hide_onmobile: true,
                    hide_onleave: false,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    hide_under: 0,
                    hide_over: 9999,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    space: 5,
                    h_offset: 20,
                    v_offset: 50,
                    tmp: '<span class="tp_bullet"></span>'
                }
            },
            responsiveLevels: [1240, 1024, 778, 480],
            gridwidth: [1140, 1140, 778, 480],
            gridheight: [670, 670, 960, 720],
            lazyType: "none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 2000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });



        /*ONE PAGE FULLSCREEN*/
        $("#slider2").revolution({
            sliderType: "standard",
            sliderLayout: "fu",
            dottedOverlay: "twoxtwo",
            delay: 9000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    style: "",
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 600,
                    hide_onleave: false,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 600,
                    style: "",
                    hide_onleave: false,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 274,
                    space: 10,
                    tmp: ''
                }
            },
            responsiveLevels: [1240, 1024, 778, 480],
            gridwidth: [1140, 1140, 778, 480],
            gridheight: [830, 670, 960, 720],
            lazyType: "none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 2000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            fullScreenAutoWidth: "off",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });        
}); 

