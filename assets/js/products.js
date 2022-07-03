$(".products-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    variableWidth: true,
    dots: true,
    arrows: true,
    centerMode: true,
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false,
                // centerMode: false,
            },
        },
    ],
});
