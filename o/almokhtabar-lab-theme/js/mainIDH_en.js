jQuery(function() {
    $(".faq-accordion .tab_content").hide();
    $(".faq-accordion .tab_content:first").show();
    $(".faq-tabs ul.tabs li a").click(function() {
        $(".faq-accordion .tab_content").hide();
        var activeTab = $(this).attr("rel");
        $(".faq-accordion #" + activeTab).fadeIn();
        $(".faq-tabs ul.tabs li a").removeClass("active");
        $(this).addClass("active");
        $(".faq-accordion .tab_drawer_heading").removeClass("d_active");
        $(".faq-accordion .tab_drawer_heading [rel^='" + activeTab + "']").addClass("d_active");
    });
    $(".faq-accordion .tab_container").css("min-height", function() {
        return $(".faq-tabs .tabs").outerHeight() + 50;
    });
    $(".tab_drawer_heading").click(function() {
        $(".faq-accordion .tab_content").hide();
        var d_activeTab = $(this).attr("rel");
        $(".faq-accordion #" + d_activeTab).fadeIn();
        $(".faq-accordion .tab_drawer_heading").removeClass("d_active");
        $(this).addClass("d_active");
        var id = $(this).attr('id');
        $('html, body').animate({
            scrollTop: $('#' + id).offset().top - 70
        }, 300);
        $(".faq-tabs ul.tabs li a").removeClass("active");
        $(".faq-tabs ul.tabs li a [rel^='" + d_activeTab + "']").addClass("active");
    });
    $('.accordion .collapse').on('shown.bs.collapse', function() {
        $(this).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        var id = $(this).attr('id');
        $('html, body').animate({
            scrollTop: $('#' + id).offset().top - 230
        }, 300);
    }).on('hidden.bs.collapse', function() {
        $(this).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    });
    $('.notif-icon-click').click(function() {
        $('.notification-dropdown').slideToggle();
    });
    $(document).mouseup(function(e) {
        var container = $(".notification-dropdown");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.hide(300);
        }
    });
    $('.search-container').hide();
    $('#search').click(function() {
        $('.search-container').slideToggle('slow');
        $('#searched').val("");
    });
    $('.srch-close').click(function() {
        $('.search-container').slideUp('slow');
        $('#searched').val("");
    });
    $('#search-mob').click(function() {
        $('.search-container').slideToggle('slow');
        $('#searched').val("");
    });
    $(document).bind("load", function() {
        $(".page").show();
        $(".loader-container").hide();
        $(window).resize();
    });
    $(document).ready(function() {
        $('.button-accept').on('click', function(event) {
            var id = $(this).attr('id');
            console.log(" id value ", id);
            $(".notification-popup").show(500);
            $('body').addClass('notif-open');
        });
        $('.button-cancel').on('click', function(event) {
            $(".notification-popup").hide(500);
            $('body').removeClass('notif-open');
        });
        $('.button-submit').on('click', function(event) {
            $(".notification-popup").hide(500);
            $('body').removeClass('notif-open');
        });
        $('#triggerWebchat').click(function() {
            $('.iframe-container').toggleClass('open');
            $('body').toggleClass('chat-open');
        })
        $(".services-item-title-ell").dotdotdot({
            height: 70,
            fallbackToLetter: true,
            watch: true,
        });
        $(".services-item-brief-ell").dotdotdot({
            height: 50,
            fallbackToLetter: true,
            watch: true,
        });
        $(".packages-item-title-ell").dotdotdot({
            height: 80,
            fallbackToLetter: true,
            watch: true,
        });
        $(".packages-item-brief-ell").dotdotdot({
            height: 50,
            fallbackToLetter: true,
            watch: true,
        });
        if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
            var tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            window.onYouTubeIframeAPIReady = function() {
                onYoutubeIframe();
            };
        } else {
            onYoutubeIframe();
        }
        setTimeout(function() {
            $(".page").show();
            $(".loader-container").hide();
            $(window).resize();
        }, 0);
        $(".header-responsive-open").on("click", function() {
            $('.header-responsive-menu-container').toggleClass("active");
            $("body").toggleClass("menu-active");
            $(this).children(".icon-burger").toggleClass('open');
            var x = window.scrollX;
            var y = window.scrollY;
            window.onscroll = function() {
                window.scrollTo(x, y);
            };
        });
        $(".header-responsive-close").on("click", function() {
            $('.header-responsive-menu-container').toggleClass("active");
            $("body").toggleClass("menu-active");
            $(".header-responsive-open .icon-burger").toggleClass('open');
            window.onscroll = function() {};
        });
        $('input, select').focus(function() {
            $(this).parents('.form-input').addClass('focused');
            $(this).prev(".form-label").addClass("show");
        });
        $("select").on("change", function() {
            if ($(this).val() === "") {
                $(this).prev(".form-label").removeClass("show");
                $(this).parent(".form-input").removeClass("focused");
                $(this).blur();
            }
        });
        $('input, select').blur(function() {
            var inputValue = $(this).val();
            if (inputValue === "") {
                $(this).removeClass('filled');
                $(this).parents('.form-input').removeClass('focused');
                $(this).prev(".form-label").removeClass("show");
            } else {
                $(this).addClass('filled');
            }
        });
        $("input, select").each(function() {
            if ($(this).val()) {
                $(this).parents('.form-input').addClass('focused');
                $(this).prev(".form-label").addClass("show");
            }
        });
        $(".search-container input").attr("placeholder", "Search");
        new WOW({
            offset: 100
        }).init();
        $(".banner").ready(function() {
            $(".banner").css("height", ($(window).height() - $("header").outerHeight()) + "px");
        });
        var st, lastScrollTop = 0,
            headerHeight, pageHeaderHeight;
        $(".header-container").ready(function() {
            headerHeight = $(".header-container").outerHeight();
            pageHeaderHeight = $(".page-header-container").outerHeight();
        });
        $(document).on("scroll", function(event) {
            st = $(this).scrollTop();
            $(".dropdown-menu").hide();
            if (st > lastScrollTop) {
                if (st > headerHeight) {
                    if (!$(".page-content").hasClass("reservation-visit")) {
                        $("body").css("margin-top", headerHeight + "px");
                        $(".header-top").hide();
                        $('.header-container').addClass("sticky");
                    } else if (st > headerHeight + pageHeaderHeight) {
                        $("body").css("margin-top", headerHeight + "px");
                        $(".header-top").hide();
                        $('.header-container').addClass("sticky");
                        $(".reservation-visit .page-header-container").addClass("sticky");
                    }
                }
            } else if (st < lastScrollTop) {
                if (st < headerHeight) {
                    $("body").css("margin-top", "0px");
                    $(".header-top").show();
                    $('.header-container').removeClass("sticky");
                    $(".reservation-visit .page-header-container").removeClass("sticky");
                }
            }
            lastScrollTop = st;
        });
        $('.scroll-top').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
        });
        if (document.documentMode || /Edge/.test(navigator.userAgent)) {
            $('.object-fit').each(function() {
                var imgHieght = $(this).outerHeight();
                var t = $(this),
                    s = 'url(' + t.attr('src') + ')',
                    p = t.parent(),
                    d = $('<div></div>');
                t.hide();
                p.append(d);
                d.css({
                    height: imgHieght,
                    'background-size': 'cover',
                    'background-repeat': 'no-repeat',
                    'background-position': 'center',
                    'background-image': s
                });
            });
        }
        $('.home-services-slider.slick').slick({
            rtl: false,
            slidesToShow: 3,
            slidesToScroll: 2,
            dots: true,
            prevArrow: null,
            nextArrow: null,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
        $('.home-packages-slider.slick').slick({
            rtl: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            prevArrow: null,
            nextArrow: null,
            autoplay: true,
            autoplaySpeed: 5000
        });
        var slider = $('.banner-slider.slick').slick({
            rtl: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: true
        });
        slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            var frame;
            var vid = $(slick.$slides[currentSlide]).find('iframe');
            if (vid.attr("id")) {
                frame = document.getElementById(vid.attr("id"));
                if (vid.length > 0) {
                    frame.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                }
            }
        });
        slider.on('afterChange', function(event, slick, currentSlide) {
            var vid = $(slick.$slides[currentSlide]).find('iframe');
            var frame;
            if (vid.attr("id")) {
                frame = document.getElementById(vid.attr("id"));
                if (vid.length > 0) {
                    frame.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                }
            }
        });
        var players;

        function onYoutubeIframe() {
            players = [];
            $('.myiframeclass').each(function() {
                var frame = $(this);
                var player = new YT.Player(frame.attr('id'), {
                    playerVars: {
                        html5: 1
                    },
                    events: {
                        'onReady': onPlayerReady,
                        'onStateChange': onPlayerStateChange
                    }
                });
                players.push(player);
                var firstCurrentSlide = $('.banner-slider.slick .slick-current');
                var video = firstCurrentSlide.find('iframe');
                var vidFrame;
                if (video) {
                    vidFrame = document.getElementById(video.attr("id"));
                    vidFrame.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                }
            });
        }

        function onPlayerReady(event) {}

        function onPlayerStateChange(event) {
            switch (event.data) {
                case YT.PlayerState.UNSTARTED:
                    console.log('unstarted');
                    break;
                case YT.PlayerState.ENDED:
                    console.log('ended');
                    slider.slick('slickPlay');
                    break;
                case YT.PlayerState.PLAYING:
                    console.log('playing: ');
                    slider.slick('slickPause');
                    break;
                case YT.PlayerState.PAUSED:
                    console.log('paused');
                    slider.slick('slickPlay');
                    break;
                case YT.PlayerState.BUFFERING:
                    console.log('buffering');
                    slider.slick('slickPause');
                    break;
                case YT.PlayerState.CUED:
                    console.log('video cued');
                    break;
            }
        }
        $('.packages-details-slider.slick').slick({
            rtl: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            prevArrow: null,
            nextArrow: null,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
        $('.services-presenters-list-slider.slick').slick({
            rtl: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            prevArrow: null,
            nextArrow: null,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
        $('.services-devices-slider.slick').slick({
            rtl: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            prevArrow: null,
            nextArrow: null
        });
        $(window).resize(function() {
            headerHeight = $(".header-container").outerHeight();
            if (screen.width > 991) {
                $('.header-responsive').removeClass("active");
                $("body").removeClass("menu-active");
            }
        });
    });
});
$(document).on('click', '.edit-profile', function() {
    $('html,body').animate({
        scrollTop: $(".row.pad-85").offset().top - 100
    }, 'slow');
});
$(document).mouseup(function(e) {
    var container = $(".notification-popup");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
        $('body').removeClass('notif-open');
    }
});
$(document).on('click', '.header-responsive-menu-container .header-responsive-menu ul li .dropdown-menu a.dropdown-item', function() {
    $(this).parent('.dropdown-menu').parent('li').parent('ul').parent('.header-responsive-menu').parent('.header-responsive-menu-container').removeClass('active');
    $('body').removeClass('menu-active');
    $('.icon-burger').removeClass('open');
});