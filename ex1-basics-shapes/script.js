'use strict';

// Creem un mapa centrat a Sant Pol i un zoom de 11
// a opcions treiem el control de zoom
const map = L.map('map', {
  zoomControl: false,
}).setView([41.60281747649918, 2.6245074122928997], 11);

// Canviem l'aspecte del mapa
// https://leaflet-extras.github.io/leaflet-providers/preview/
const tiles = L.tileLayer(
  'https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg',
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
).addTo(map);

// Creem un cercle centrat a Sant Pol amb opcions
const circle = L.circle([41.60281747649918, 2.6245074122928997], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 1000,
  weight: 5, // gruix del perímetre
})
  .addTo(map)
  .bindPopup('I am a circle.'); // hi afegim un popup

const polygon = L.polygon([
  [41.65281747649918, 2.55074122928997],
  [41.70281747649918, 2.7245074122928997],
  [41.62281747649918, 2.6245074122928997],
])
  .addTo(map)
  .bindPopup('I am a polygon.');

// Funció associada al clic en el mapa
// 1- Si estem desplaçats del centre centrem de nou
// 2- Mostra un popup amb les coordenades
// No poden funcionar tots dos
function onMapClick(e) {
  // centrem a Sant Pol
  // map.setView([41.60281747649918, 2.6245074122928997], 11);
  const popup = L.popup()
    .setLatLng(e.latlng)
    .setContent(`You clicked the map at ${e.latlng.toString()}`)
    .openOn(map);
}

map.on('click', onMapClick);
