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
                items: 3,
            },

            500: {
                items: 2,
            },

            0: {
                items: 1,
            },
        },
    });
});

$(".destination-items").slick({
    dots: false,
    arrows: false,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    variableWidth: true,
});

$(".adventure-items").slick({
    dots: false,
    arrows: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 676,
            settings: {
                arrows: false,
            },
        },
    ],
});

if ($(window).width() < 640) {
    $(".type-items").slick({
        dots: false,
        arrows: false,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
}

if ($(window).width() < 760) {
    $(".stay-items").slick({
        dots: false,
        arrows: false,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 401,
                settings: {
                    variableWidth: false,
                },
            },
        ],
    });
}

$(".book-img").slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
});

$(".stay-img").slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});

$(".comments-items").slick({
    loop: false,
    infinite: false,
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
    responsive: [
        {
            breakpoint: 676,
            settings: {
                centerMode: true,
            },
        },
    ],
});

window.onload = () => {
    const popout = document.getElementsByClassName("popout")[0];
    let box = document.querySelector(".popout-content");
    let popoutHead = document.querySelector(".popout-head");

    popoutHead.addEventListener("touchmove", (e) => {
        let touchLocation = e.targetTouches[0];
        let height = window.screen.height - touchLocation.clientY + 10;

        if (height < window.screen.height) {
            box.style.height = `${height}px`;
        }
    });

    popoutHead.addEventListener("touchend", (e) => {
        const pos = parseInt(box.style.height);
        if (pos < window.screen.height / 3) {
            popout.classList.add("hidden");
        }
    });
};

document.querySelector(".browse-btn").onmousemove = (e) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;

    e.target.style.setProperty("--x", `${x}px`);
    e.target.style.setProperty("--y", `${y}px`);
};

const button = document.querySelector(".footer-account");

const readout = document.querySelector("p");

button.addEventListener("mousemove", (e) => {
    const { x, y } = button.getBoundingClientRect();
    button.style.setProperty("--x", e.clientX - x);
    button.style.setProperty("--y", e.clientY - y);
});
