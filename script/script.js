$(document).ready(function() {
    $(".project-featured>a").click(function() {
        $(".project-featured>p").slideToggle();
    });

    $('.navbar-toggle').click(function() {
        $(this).toggleClass('open');
    });

    $('.parent').each(function() {
        $(this).children('.child').matchHeight({});
    });

    function swiperControl() {

        var swiper = new Swiper('.swiper-container', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 4,
            paginationClickable: true,
            spaceBetween: 20,
            simulateTouch: false,
            breakpoints: {
                640: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                1199: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                1366: {
                    slidesPerView: 4,
                    spaceBetween: 20
                },
                1500: {
                    slidesPerView: 4,
                    spaceBetween: 20
                },
                1920: {
                    slidesPerView: 5,
                    spaceBetween: 20
                }
            }
        });
    }
    swiperControl();

    function swiperHeight() {
        var swpperWapperHeight = $(".image-carousel").outerHeight();
        var navbarHeight = $(".navbar-primary").height();
        var advHeight = $(".powerfull").outerHeight();
        var windowHeight = $( window ).height();
        var calculatedHeight = navbarHeight + advHeight + swpperWapperHeight - 22;
        $(".hero-banner").css({"height": windowHeight - calculatedHeight})
        console.log("swpperWapperHeight::" + swpperWapperHeight+"navbarHeight::"+navbarHeight+"advHeight::"+advHeight+"windowHeight::"+windowHeight);
    }
    swiperHeight();

    $(window).resize(function() {
        swiperHeight();
    });
});
