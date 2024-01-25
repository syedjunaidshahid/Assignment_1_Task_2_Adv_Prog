//Initiating a map centering at San Francisco with Zoom level 12
var map = L.map('map').setView([37.7596331,-122.4990817], 12);

//Set basemap 
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

  // Load icon to change symbology of the marker
var ratgif = L.icon({
    iconUrl: 'http://maptimeboston.github.io/leaflet-intro/rat.gif',
    iconSize: [30, 30]
});

$.getJSON("https://raw.githubusercontent.com/orhuna/WebGIS_SLU_M1/main/Module%201/Assignment%201/data/sf_crime.geojson", function(data) {
    L.geoJson(data, {
        pointToLayer: function(feature, latlng) {
            return L.marker(latlng, {icon: ratgif});
        }
    }).addTo(map);
});
