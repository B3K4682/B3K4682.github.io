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


function popouts() {
    const popouts = document.querySelectorAll(".popout");

    popouts.forEach((popout) => {
        let box = popout.querySelector(".popout-content");
        let popoutHead = popout.querySelector(".popout-head");
    
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

        let popoutId = popout.getAttribute("data-popout");
        let popoutButton = document.querySelector(`[data-toggle-popout="${popoutId}"]`);
        if(popoutButton) {
            popoutButton.addEventListener("click", (e) => {
                e.preventDefault();
                popout.classList.remove("hidden");
                box.style.height = "70%";
                document.querySelector("body").style.overflow = "hidden";
                box.style.transition = "height 0.3s ease-in-out";
                setTimeout(() => {
                    box.style.transition = "none";
                }, 300);
            });
        }
    });
}

popouts();