const initMap = () => {
  // The location of Uluru
  const uluru = { lat: 42.3154, lng: 43.3569 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: uluru,
    disableDefaultUI: true,
  });

  const topLeftControlsDiv = topLeftControls(map);

  const searchToggleControlDiv = searchToggleControl(map);

  map.controls[google.maps.ControlPosition.TOP_LEFT].push(topLeftControlsDiv);
  map.controls[google.maps.ControlPosition.TOP].push(searchToggleControlDiv);
}

const topLeftControls = (map) => {
    const controlUI = document.getElementsByClassName("top-left-controls")[0];

    const zoomUI = document.getElementsByClassName("top-left-controls")[0]
                           .getElementsByClassName("zoom-controls")[0];

    const zoomInUI = zoomUI.children[0];
    const zoomOutUI = zoomUI.children[1];

    zoomInUI.addEventListener("click", () => {
        if (map.getZoom() < 18) {
            map.setZoom(map.getZoom() + 1);
        }
    });

    zoomOutUI.addEventListener("click", () => {
        if (map.getZoom() > 3) {
            map.setZoom(map.getZoom() - 1);
        }
    });

    const xUI = document.getElementsByClassName("top-left-controls")[0]
                        .getElementsByClassName("x-controls")[0];

    return controlUI;
}

const searchToggleControl = (map) => {
    const controlUI = document.getElementsByClassName("search-toggle-control")[0];

    return controlUI;
}

// function popout() {
//     const popout = document.getElementsByClassName("popout")[0];
//     let box = document.querySelector(".popout-content");
//     let popoutHead = document.querySelector(".popout-head");

//     popoutHead.addEventListener("touchmove", (e) => {
//         let touchLocation = e.targetTouches[0];
//         let height = window.screen.height - touchLocation.clientY + 10;

//         if (height < window.screen.height) {
//             box.style.height = `${height}px`;
//         }
//     });

//     popoutHead.addEventListener("touchend", (e) => {
//         const pos = parseInt(box.style.height);
//         if (pos < window.screen.height / 3) {
//             popout.classList.add("hidden");
//             document.body.style.overflow = "auto";
//             box.style.transition = "height 0.3s ease-in-out";
//             setTimeout(() => {
//                 box.style.transition = "none";
//             }, 300);
//         }
//     });

//     const filterBtn = document.querySelector(".filterBtn");

//     filterBtn.addEventListener("click", () => {
//         popout.classList.remove("hidden");
//         box.style.height = "70%";
//         document.body.style.overflow = "hidden";
//         box.style.transition = "height 0.3s ease-in-out";
//         setTimeout(() => {
//             box.style.transition = "none";
//         }, 300);
//     });
// }

// popout();

// const mapBtn = document.querySelector(".map-btn");


// mapBtn.addEventListener("click", () => {
//     if(!document.getElementsByClassName("map-btn")[0].classList.contains("disabled")) {
//         const listsRight = document.querySelector(".lists-right");

//         if(window.getComputedStyle(listsRight).display === "none") {
//             listsRight.style.display = "block";
//             setTimeout(() => {
//                 listsRight.classList.add("show");
//             }, 150)   
//         } else {
//             listsRight.style.display = "none";
//             setTimeout(() => {
//                 listsRight.classList.remove("show");
//             }, 150)   
//         }
//     }
// });

$('.map-results').slick();

window.initMap = initMap;