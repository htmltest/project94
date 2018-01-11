var orderForm;
var orderProgramm;

$(document).ready(function() {

    $('nav a').click(function(e) {
        if ($($(this).attr('href')).length > 0) {
            $.scrollTo($($(this).attr('href')), {duration : 500, offset: {top: -100}});
            e.preventDefault();
        }
    });

    $('.slider-list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        pauseOnFocus: false,
        fade: true,
        speed: 1000,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false
                }
            }
        ]
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

    $('.menu-type-block').click(function(e) {
        var curItem = $(this).parents().filter('.menu-type');
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

    $(window).on('load resize scroll', function() {
        if ($(window).scrollTop() > 0) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });

    $('.header-nav-link').click(function(e) {
        if ($('html').hasClass('mobile-menu-open')) {
            $('html').removeClass('mobile-menu-open');
        } else {
            $('html').addClass('mobile-menu-open');
        }
        e.preventDefault();
    });

    $('.mobile-menu-scroll').click(function(e) {
        if ($($(this).attr('href')).length > 0) {
            $('html').removeClass('mobile-menu-open');
            $.scrollTo($($(this).attr('href')), {duration : 500, offset: {top: -100}});
            e.preventDefault();
        }
    });

    $.validator.addMethod('maskPhone',
        function(value, element) {
            if (value == '') {
                return true;
            }
            return /^\+7 \(\d{3}\) \d{3}\-\d{2}\-\d{2}$/.test(value);
        },
        'Не соответствует формату'
    );

    $('form').each(function() {
        initForm($(this));
    });

    $('body').on('click', '.window-link', function(e) {
        orderForm = null;
        if (typeof ($(this).data('programm')) != 'undefined') {
            orderProgramm = $(this).data('programm');
        }
        windowOpen($(this).attr('href'), null, orderSelects);
        e.preventDefault();
    });

    $('body').on('keyup', function(e) {
        if (e.keyCode == 27) {
            windowClose();
            $('.cabinet-profile-item-value.open').removeClass('open');
        }
    });

    $(document).click(function(e) {
        if ($(e.target).hasClass('window')) {
            windowClose();
        }
    });

    $('.cabinet-block').each(function() {
        var curBlock = $(this);
        if (curBlock.find('.cabinet-block-row:hidden').length > 0) {
            curBlock.find('.cabinet-block-ctrl').show();
        }
    });

    $('.cabinet-block-more').click(function(e) {
        var curBlock = $(this).parents().filter('.cabinet-block');
        var count = curBlock.find('.cabinet-block-row:visible').length;
        count += 3;
        curBlock.find('.cabinet-block-row:lt(' + count + ')').show();
        curBlock.addClass('open');
        if (curBlock.find('.cabinet-block-row:hidden').length == 0) {
            curBlock.addClass('max');
        }
        e.preventDefault();
    });

    $('.cabinet-block-hide').click(function(e) {
        var curBlock = $(this).parents().filter('.cabinet-block');
        var count = curBlock.find('.cabinet-block-row:visible').length;
        count -= 3;
        curBlock.find('.cabinet-block-row:gt(' + (count - 1) + ')').hide();
        curBlock.removeClass('max');
        if (count <= 3) {
            curBlock.removeClass('open');
        }
        e.preventDefault();
    });

    if (window.location.hash != '') {
        $('a[href="' + window.location.hash + '"]').click();
    }

    $('.cabinet-profile-item-edit').click(function(e) {
        $('.cabinet-profile-item-value.open').removeClass('open');
        $(this).parents().filter('.cabinet-profile-item-value').addClass('open');
        e.preventDefault();
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.cabinet-profile-item-value').length == 0) {
            $('.cabinet-profile-item-value.open').removeClass('open');
        }
    });

    $('.cabinet-block-row-item-9 a').click(function(e) {
        $(this).parents().filter('.cabinet-block-row').toggleClass('detail-open');
        e.preventDefault();
    });

});

$(window).on('resize', function() {
    $('.form-select select').chosen('destroy');
    $('.form-select select').chosen({disable_search: true, placeholder_text_multiple: ' ', no_results_text: 'Нет результатов'});
});

function initForm(curForm) {
    curForm.find('input.maskPhone').mask('+7 (999) 999-99-99');

    var dateFormat = 'dd.mm.yy';
    curForm.find('.form-input-date input').datepicker({
        dateFormat: dateFormat,
        minDate: 0
    });

    $('.window #programmSelect').change(function() {
        var curValue = $(this).val();
        var daysHTML = '<option value=""></option>';
        for (var i = 0; i < programms.length; i++) {
            var curEl = programms[i];
            if (curValue == curEl.value) {
                var daysList = curEl.list;
                for (var j = 0; j < daysList.length; j++) {
                    var curSubEl = daysList[j];
                    daysHTML += '<option value="' + curSubEl.value + '">' + curSubEl.title + '</option>';
                }
            }
        }
        $('.window #daysSelect').html(daysHTML);
        $('.window #daysSelect').trigger('chosen:updated');
    });

    curForm.find('.form-select select').chosen({disable_search: true, no_results_text: 'Нет результатов'});

    if (curForm.hasClass('window-form')) {
        curForm.validate({
            ignore: '',
            submitHandler: function(form) {
                orderForm = $(form);
                windowOpen($(form).attr('action'), $(form).serialize(), orderSelects);
            }
        });
    } else if (curForm.hasClass('cabinet-form')) {
        curForm.validate({
            ignore: '',
            submitHandler: function(form) {
                var curValue = $(form).parents().filter('.cabinet-profile-item-value')
                curValue.removeClass('open');
                curValue.find('.cabinet-profile-item-value-text').html(curValue.find('.form-input input').val());
                $.ajax({
                    type: 'POST',
                    url: $(form).attr('action'),
                    dataType: 'html',
                    data: $(form).serialize(),
                    cache: false
                });
            }
        });
    } else {
        if (!curForm.hasClass('novalidate')) {
            curForm.validate({
                ignore: ''
            });
        }
    }
}

function orderSelects() {
    var curProgramm = null;
    var curDays = null;
    if (orderForm != null) {
        curProgramm = orderForm.find('input[name="programm"]').val();
        curDays = orderForm.find('input[name="days"]:checked').val();
    }
    if (orderProgramm != null) {
        curProgramm = orderProgramm;
    }
    if (typeof (programms) != 'undefined') {
        var programmHTML = '<option value=""></option>';
        for (var i = 0; i < programms.length; i++) {
            var curEl = programms[i];
            var programmSelected = '';
            if (curProgramm == curEl.value) {
                programmSelected = ' selected="selected"';

                var daysHTML = '<option value=""></option>';
                var daysList = curEl.list;
                for (var j = 0; j < daysList.length; j++) {
                    var curSubEl = daysList[j];
                    var daysSelected = '';
                    if (curDays == curSubEl.value) {
                        daysSelected = ' selected="selected"';
                    }
                    daysHTML += '<option value="' + curSubEl.value + '"' + daysSelected + '>' + curSubEl.title + '</option>';
                }
                $('.window #daysSelect').html(daysHTML);
            }
            programmHTML += '<option value="' + curEl.value + '"' + programmSelected + '>' + curEl.title + '</option>';
        }
        $('.window #programmSelect').html(programmHTML);
    }
}

function windowOpen(linkWindow, dataWindow, callbackWindow) {
    if (!$('html').hasClass('window-open')) {
        var curScroll = $(window).scrollTop();
        $('.wrapper').data('curScroll', curScroll);
        $('.wrapper-inner').css({'top': -curScroll});
    }

    $('html').addClass('window-open');

    if ($('.window').length == 0) {
        $('body').append('<div class="window"><div class="window-loading"></div></div>')
    }

    $.ajax({
        type: 'POST',
        url: linkWindow,
        dataType: 'html',
        data: dataWindow,
        cache: false
    }).done(function(html) {
        if ($('.window').length > 0) {
            $('.window').remove();
        }
        $('body').append('<div class="window"><div class="window-loading"></div></div>')

        $('.window').append('<div class="window-container window-container-load"><div class="window-content">' + html + '<a href="#" class="window-close"></a></div></div>')

        if ($('.window-container img').length > 0) {
            $('.window-container img').each(function() {
                $(this).attr('src', $(this).attr('src'));
            });
            $('.window-container').data('curImg', 0);
            $('.window-container img').one('load', function() {
                var curImg = $('.window-container').data('curImg');
                curImg++;
                $('.window-container').data('curImg', curImg);
                if ($('.window-container img').length == curImg) {
                    $('.window-container').removeClass('window-container-load');
                    windowPosition();
                }
            });
        } else {
            $('.window-container').removeClass('window-container-load');
            windowPosition();
        }

        if (typeof (callbackWindow) != 'undefined') {
            callbackWindow.call();
        }

        $(window).resize(function() {
            windowPosition();
        });

        $('.window-close').click(function(e) {
            windowClose();
            e.preventDefault();
        });

        $('.window form').each(function() {
            initForm($(this));
        });
    });
}

function windowPosition() {
    if ($('.window').length > 0) {
        $('.window-container').css({'left': '50%', 'margin-left': -$('.window-container').width() / 2});

        $('.window-container').css({'top': '50%', 'margin-top': -$('.window-container').height() / 2, 'padding-bottom': 0});
        if ($('.window-container').height() > $('.window').height() - 60) {
            $('.window-container').css({'top': '30px', 'margin-top': 0, 'padding-bottom': 30});
        }
    }
}

function windowClose() {
    if ($('.window').length > 0) {
        $('.window').remove();
        $('html').removeClass('window-open');
        $(window).scrollTop($('.wrapper').data('curScroll'));
        $('.wrapper-inner').css({'top': 'auto'});
    }
}

$(window).on('load resize', function() {
    if ($('.cabinet').length > 0) {
        if ($(window).height() - $('.wrapper').height() > 0) {
            $('.cabinet').css({'min-height': $(window).height() - $('footer').outerHeight()});
        }
    }
});