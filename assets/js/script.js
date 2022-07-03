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
