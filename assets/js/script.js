$("#burger-btn").on("click", () => {
    $(".navigation-body").css("right", "0%");
    $("#body").css("overflow", "hidden");
});

$("#navigation-close-btn").on("click", () => {
    $(".navigation-body").css("right", "100%");
    $("#body").css("overflow", "auto");
});

$(".top-picker-item").click(function () {
    $(this).toggleClass("picker-active");
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