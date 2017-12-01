$(document).ready(function() {

    $('nav a').click(function(e) {
        $.scrollTo($($(this).attr('href')), {duration : 500});
        e.preventDefault();
    });

    $('.slider-list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        pauseOnFocus: false,
        fade: true,
        speed: 1000,
        autoplaySpeed: 5000
    });

    $('.reviews-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        dots: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false
                }
            }
        ]
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.reviews-preview-item.active').removeClass('active');
        $('.reviews-preview-item').eq(nextSlide).addClass('active');
    });

    $('.reviews-preview-item a').click(function(e) {
        var curLink = $(this);
        var curItem = curLink.parent();
        if (!curItem.hasClass('active')) {
            $('.reviews-preview-item.active').removeClass('active');
            curItem.addClass('active');
            var curIndex = $('.reviews-preview-item').index(curItem);
            $('.reviews-slider').slick('slickGoTo', curIndex);
        }
        e.preventDefault();
    });

    $('.reviews-next a').click(function(e) {
        $('.reviews-slider').slick('slickNext');
        e.preventDefault();
    });

    $('.menu-type a').click(function(e) {
        var curItem = $(this).parent();
        if (!curItem.hasClass('active')) {
            $('.menu-type.active').removeClass('active');
            curItem.addClass('active');
            var curIndex = $('.menu-type').index(curItem);
            $('.menu-tab.active').removeClass('active');
            $('.menu-tab').eq(curIndex).addClass('active');

            $('.menu-types-mobile-select-list ul li.active').removeClass('active');
            $('.menu-types-mobile-select-list ul li').eq(curIndex).addClass('active');
            $('.menu-types-mobile-select-value').html($('.menu-types-mobile-select-list ul li').eq(curIndex).html());
        }
        e.preventDefault();
    });

    $('.menu-types-mobile-select-value').click(function() {
        $(this).parent().toggleClass('open');
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.menu-types-mobile-select').length == 0) {
            $('.menu-types-mobile-select').removeClass('open');
        }
    });

    $('.menu-types-mobile-select-list ul li').click(function() {
        var curLi = $(this);
        $('.menu-types-mobile-select-list ul li.active').removeClass('active');
        curLi.addClass('active');
        $('.menu-types-mobile-select-value').html(curLi.html());
        $('.menu-types-mobile-select').removeClass('open');
        var curIndex = $('.menu-types-mobile-select-list ul li').index(curLi);

        $('.menu-type.active').removeClass('active');
        $('.menu-type').eq(curIndex).addClass('active');
        $('.menu-tab.active').removeClass('active');
        $('.menu-tab').eq(curIndex).addClass('active');
    });

    $('.menu-days ul li a').click(function(e) {
        var curItem = $(this).parent();
        var curTab = curItem.parents().filter('.menu-tab');
        if (!curItem.hasClass('active')) {
            curTab.find('.menu-days ul li.active').removeClass('active');
            curItem.addClass('active');
            var curIndex = curTab.find('.menu-days ul li').index(curItem);
            curTab.find('.menu-day.active').removeClass('active');
            curTab.find('.menu-day').eq(curIndex).addClass('active');

            curTab.find('.menu-days-mobile-select-list ul li.active').removeClass('active');
            curTab.find('.menu-days-mobile-select-list ul li').eq(curIndex).addClass('active');
            curTab.find('.menu-days-mobile-select-value').html(curTab.find('.menu-days-mobile-select-list ul li').eq(curIndex).html());
        }
        e.preventDefault();
    });

    $('.menu-days-mobile-select-value').click(function() {
        $(this).parent().toggleClass('open');
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.menu-days-mobile-select').length == 0) {
            $('.menu-days-mobile-select').removeClass('open');
        }
    });

    $('.menu-days-mobile-select-list ul li').click(function() {
        var curLi = $(this);
        var curTab = curLi.parents().filter('.menu-tab');
        curTab.find('.menu-days-mobile-select-list ul li.active').removeClass('active');
        curLi.addClass('active');
        curTab.find('.menu-days-mobile-select-value').html(curLi.html());
        curTab.find('.menu-days-mobile-select').removeClass('open');
        var curIndex = curTab.find('.menu-days-mobile-select-list ul li').index(curLi);

        curTab.find('.menu-days ul li.active').removeClass('active');
        curTab.find('.menu-days ul li').eq(curIndex).addClass('active');
        curTab.find('.menu-day.active').removeClass('active');
        curTab.find('.menu-day').eq(curIndex).addClass('active');
    });

    $(window).on('load resize', function() {
        if ($(window).width() > 767 && $(window).width() < 1200) {
            if (!$('.menu-types').hasClass('slick-slider')) {
                $('.menu-types').slick({
                    infinite: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    prevArrow: '<button type="button" class="slick-prev"></button>',
                    nextArrow: '<button type="button" class="slick-next"></button>',
                    adaptiveHeight: true,
                    dots: false
                });
            }
        } else {
            if ($('.menu-types').hasClass('slick-slider')) {
                $('.menu-types').slick('unslick');
            }
        }
    });

});