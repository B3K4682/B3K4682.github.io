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

document.addEventListener("DOMContentLoaded", () => {
    popout(), popout2(), popout3(), popout4();
});

function popout() {
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
            document.body.style.overflow = "auto";
            box.style.transition = "height 0.3s ease-in-out";
            setTimeout(() => {
                box.style.transition = "none";
            }, 300);
        }
    });

    const searchIcon = document.querySelector(".search-icon");

    searchIcon.addEventListener("click", () => {
        popout.classList.remove("hidden");
        box.style.height = "70%";
        document.body.style.overflow = "hidden";
        box.style.transition = "height 0.3s ease-in-out";
        setTimeout(() => {
            box.style.transition = "none";
        }, 300);
    });
}

function popout2() {
    const popout2 = document.getElementsByClassName("popout2")[0];
    let box2 = document.querySelector(".popout2-content");
    let popoutHead2 = document.querySelector(".popout2-head");

    popoutHead2.addEventListener("touchmove", (e) => {
        let touchLocation = e.targetTouches[0];
        let height = window.screen.height - touchLocation.clientY + 10;

        if (height < window.screen.height) {
            box2.style.height = `${height}px`;
        }
    });

    popoutHead2.addEventListener("touchend", (e) => {
        const pos = parseInt(box2.style.height);
        if (pos < window.screen.height / 3) {
            popout2.classList.add("hidden");
            document.body.style.overflow = "auto";
            box2.style.transition = "height 0.3s ease-in-out";
            setTimeout(() => {
                box2.style.transition = "none";
            }, 300);
        }
    });

    const heartIcon = document.querySelector(".heart-icon");

    heartIcon.addEventListener("click", () => {
        popout2.classList.remove("hidden");
        box2.style.height = "70%";
        document.body.style.overflow = "hidden";
        box2.style.transition = "height 0.3s ease-in-out";
        setTimeout(() => {
            box2.style.transition = "none";
        }, 300);
    });
}

function popout3() {
    const popout3 = document.getElementsByClassName("popout3")[0];
    let box3 = document.querySelector(".popout3-content");
    let popoutHead3 = document.querySelector(".popout3-head");

    popoutHead3.addEventListener("touchmove", (e) => {
        let touchLocation = e.targetTouches[0];
        let height = window.screen.height - touchLocation.clientY + 10;

        if (height < window.screen.height) {
            box3.style.height = `${height}px`;
        }
    });

    popoutHead3.addEventListener("touchend", (e) => {
        const pos = parseInt(box3.style.height);
        if (pos < window.screen.height / 3) {
            popout3.classList.add("hidden");
            document.body.style.overflow = "auto";
            box3.style.transition = "height 0.3s ease-in-out";
            setTimeout(() => {
                box3.style.transition = "none";
            }, 300);
        }
    });

    const notificationIcon = document.querySelector(".notification-icon");

    notificationIcon.addEventListener("click", () => {
        popout3.classList.remove("hidden");
        box3.style.height = "70%";
        document.body.style.overflow = "hidden";
        box3.style.transition = "height 0.3s ease-in-out";
        setTimeout(() => {
            box3.style.transition = "none";
        }, 300);
    });
}

function popout4() {
    const popout4 = document.getElementsByClassName("popout4")[0];
    let box4 = document.querySelector(".popout4-content");
    let popoutHead4 = document.querySelector(".popout4-head");

    const popout3 = document.getElementsByClassName("popout3")[0];
    let box3 = document.querySelector(".popout3-content");
    let popoutHead3 = document.querySelector(".popout3-head");

    popoutHead4.addEventListener("touchmove", (e) => {
        let touchLocation = e.targetTouches[0];
        let height = window.screen.height - touchLocation.clientY + 10;

        if (height < window.screen.height) {
            box4.style.height = `${height}px`;
        }
    });

    popoutHead4.addEventListener("touchend", (e) => {
        const pos = parseInt(box4.style.height);
        if (pos < window.screen.height / 3) {
            popout4.classList.add("hidden");
            document.body.style.overflow = "auto";
            box4.style.transition = "height 0.3s ease-in-out";
            setTimeout(() => {
                box3.style.transition = "none";
            }, 300);
        }
    });

    const searchButton = document.querySelector(".search-button");

    searchButton.addEventListener("click", () => {
        popout3.classList.add("hidden");
        document.body.style.overflow = "auto";
        box3.style.transition = "height 0.3s ease-in-out";
        setTimeout(() => {
            box3.style.transition = "none";
        }, 300);

        popout4.classList.remove("hidden");
        box4.style.height = "70%";
        document.body.style.overflow = "hidden";
        box4.style.transition = "height 0.3s ease-in-out";
        setTimeout(() => {
            box4.style.transition = "none";
        }, 300);
    });
}



// Callendar

// const date = new Date();

// const renderCalendar = () => {
//     date.setDate(1);

//     const monthDays = document.querySelector(".days");

//     const lastDay = new Date(
//         date.getFullYear(),
//         date.getMonth() + 1,
//         0
//     ).getDate();

//     const prevLastDay = new Date(
//         date.getFullYear(),
//         date.getMonth(),
//         0
//     ).getDate();

//     const firstDayIndex = date.getDay();

//     const lastDayIndex = new Date(
//         date.getFullYear(),
//         date.getMonth() + 1,
//         0
//     ).getDay();

//     const nextDays = 7 - lastDayIndex - 1;

//     const months = [
//         "January",
//         "February",
//         "March",
//         "April",
//         "May",
//         "June",
//         "July",
//         "August",
//         "September",
//         "October",
//         "November",
//         "December"
//     ];

//     document.querySelector(".date h1").innerHTML = months[date.getMonth()];

//     document.querySelector(".date p").innerHTML = new Date().toDateString();

//     let days = "";

//     for (let x = firstDayIndex; x > 0; x--) {
//         days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
//     }

//     for (let i = 1; i <= lastDay; i++) {
//         if (
//             i === new Date().getDate() &&
//             date.getMonth() === new Date().getMonth()
//         ) {
//             days += `<div class="today">${i}</div>`;
//         } else {
//             days += `<div>${i}</div>`;
//         }
//     }

//     for (let j = 1; j <= nextDays; j++) {
//         days += `<div class="next-date">${j}</div>`;
//         monthDays.innerHTML = days;
//     }
// };

// document.querySelector(".prev").addEventListener("click", () => {
//     date.setMonth(date.getMonth() - 1);
//     renderCalendar();
// });

// document.querySelector(".next").addEventListener("click", () => {
//     date.setMonth(date.getMonth() + 1);
//     renderCalendar();
// });

// renderCalendar();
