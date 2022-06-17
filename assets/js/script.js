$('#burger-btn').on('click', () => {
    $('.navigation-body').css('right', '0%');
});

$('#navigation-close-btn').on('click', () => {
    $('.navigation-body').css('right', '100%');
});

$(".top-picker-item").click(function(){
    $(this).toggleClass('picker-active');
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        // autoplay: true,
        // autoWidth: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            980: {
                items: 4,
            },

            770: {
                items: 3
            },
            
            500: {
                items: 2
            },
            
            0: {
                items: 1
            }
        }
    });

});