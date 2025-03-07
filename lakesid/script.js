let map;
let activeMarker = null;
let activeLink = '';

function initMap() {
    const centerCoords = { lat: 12.345, lng: 98.765 }; // Default map center
    map = new google.maps.Map(document.getElementById("map"), {
        center: centerCoords,
        zoom: 16,
        mapTypeId: "satellite"
    });
}

function selectLocation(name, lat, lng, link) {
    if (activeMarker) {
        activeMarker.setMap(null);
    }

    const position = { lat, lng };
    activeMarker = new google.maps.Marker({
        position,
        map,
        title: name
    });

    map.setCenter(position);
    activeLink = link;

    const btn = document.getElementById("directions-btn");
    btn.style.display = "block";
    btn.disabled = false;
}

function openDirections() {
    if (activeLink) {
        window.open(activeLink, "_blank");
    }
}
