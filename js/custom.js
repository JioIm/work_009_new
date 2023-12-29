$(function () {
    $('.main_visual_slide').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        arrows: false,
        dots: true,
    });

    $('.MainVisual .arrows .left').on('click', function () {
        $('.main_visual_slide').slick('slickPrev')
    });

    $('.MainVisual .arrows .right').on('click', function () {
        $('.main_visual_slide').slick('slickNext')
    });

    $('.mopen').on('click', function () {
        $('.Gnb').toggleClass('on');
        $(this).find('.hamburger').toggleClass('is-active');
    })

})