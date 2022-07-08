$(".slider-items").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    variableWidth: true,
    dots: true,
    arrows: true,
    centerMode: true,
    prevArrow: $(".product-prev"),
    nextArrow: $(".product-next"),
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // variableWidth: false,
                centerMode: true,
            },
        },
    ],
});

$(".book-img").slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
});

// if ($(window).width() < 760) {
//     $(".book-items").slick({
//         dots: true,
//         arrows: false,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//     });

// }