var map  = L.map('map',{
    measureControl: true
}).setView([40.515,  22.2],13)

// Initialise the FeatureGroup to store editable layers
var editableLayers = new L.FeatureGroup();
map.addLayer(editableLayers);

//TILELAYERS
googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
})

googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map)

//MARKERS
var marker = L.marker([40.52,22.2],{
    draggable: true,
    title: 'Veria city'
}).addTo(map)

//control tilelayers
var baseMaps = {
    "googleStreets":googleStreets,
    "googleSat":googleSat
}

var overlayMaps = {
    "Veria": marker
}

L.control.scale().addTo(map);
L.control.layers(baseMaps, overlayMaps).addTo(map)

map.on('mousemove',function(e){
    $('.coordinate').html(`Lat: ${e.latlng.lat} Lng: ${e.latlng.lng}`)
})

//Leaflet measure 
L.control.measure().addTo(map);