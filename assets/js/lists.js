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

window.initMap = initMap;