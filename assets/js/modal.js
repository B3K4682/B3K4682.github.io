$("[data-modal]").each((index, modal) => {
    $(modal)
        .find(".close")
        .click(() => {
            $(modal).hide();
        });

    $(modal)
        .find(".overlay")
        .click(() => {
            $(modal).hide();
        });
});

$("[data-toggle-modal]").each((index, button) => {
    let modalId = $(button).attr("data-toggle-modal");
    $(button).on("click", () => {
        $("#" + modalId).css("display", "flex");
    });
});

$(".pass_visible_btn").click(() => {
    var passInput = $(".password_input");
    if (passInput.attr("type") === "password") {
        passInput.attr("type", "text");
    } else {
        passInput.attr("type", "password");
    }
});

$(".dropdown-menu").on("click", function (event) {
    // The event won't be propagated up to the document NODE and
    // therefore delegated events won't be fired
    event.stopPropagation();
});
