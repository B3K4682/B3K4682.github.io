$("#burger-btn").on("click", () => {
    $(".navigation-body").css("right", "0%");
    $("#body").css("overflow", "hidden");
    console.log("zd");
});

$("#navigation-close-btn").on("click", () => {
    $(".navigation-body").css("right", "100%");
    $("#body").css("overflow", "auto");
});
