$(".close").click(() => {
    $(".modal-vv").hide();
});

$(".join_btn").click(() => {
    $("#signup_modal").css("display", "flex");
})

$('.pass_visible_btn').click(() => {
    var passInput = $('.password_input');
    if (passInput.attr('type') === 'password') {
        passInput.attr('type', 'text');
    } else {
        passInput.attr('type', 'password');
    }
});