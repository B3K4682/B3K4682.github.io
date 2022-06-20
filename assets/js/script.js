$('#burger-btn').on('click', () => {
    $('.navigation-body').css('right', '0%');
    $('#body').css('overflow', 'hidden');
    console.log("zd")
});

$('#navigation-close-btn').on('click', () => {
    $('.navigation-body').css('right', '100%');
    $('#body').css('overflow', 'auto');
});

$(".top-picker-item").click(function () {
    $(this).toggleClass('picker-active');
});

document.querySelector('.browse-btn').onmousemove = (e) => {

	const x = e.pageX - e.target.offsetLeft
	const y = e.pageY - e.target.offsetTop

	e.target.style.setProperty('--x', `${ x }px`)
	e.target.style.setProperty('--y', `${ y }px`)
	
}

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        autoplay: true,
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

$('.destination-items').slick({
    dots: false,
    arrows: false,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    variableWidth: true
});

$('.comments-items').slick({
    loop: false,
    infinite: false,
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    responsive: [
        {
          breakpoint: 676,
          settings: {
            centerMode: true,
          }
        }
      ]
});

$(document).ready(function() {
    const comments_items = $('.comments-item');
    for(let i = 0; i < comments_items.length; i++) {
        if(comments_items[i].hasAttribute("data-slick-index")) {
            let CommentItem = comments_items[i].getAttribute("data-slick-index");
            console.log(CommentItem);
        }
    }
});