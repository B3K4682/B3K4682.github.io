$('#burger-btn').on('click', () => {
    $('.navigation-body').css('right', '0%');
});

$('#navigation-close-btn').on('click', () => {
    $('.navigation-body').css('right', '100%');
});

$(".top-picker-item").click(function(){
    $(this).toggleClass('picker-active');
});