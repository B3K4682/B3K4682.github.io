$(".modal-vv").each((index, modal) => {
    $(modal).find('.close').click(() => {
        $(modal).hide();
    })
})

$("[data-toggle-modal]").each((index, button) => {
    let modalId = $(button).attr('data-toggle-modal');
    $(button).on('click', () => {
        $('#'+modalId).css("display", "flex");
    })
})

$('.pass_visible_btn').click(() => {
    var passInput = $('.password_input');
    if (passInput.attr('type') === 'password') {
        passInput.attr('type', 'text');
    } else {
        passInput.attr('type', 'password');
    }
});