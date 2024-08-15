'use strict';

// Creem mapa
const map = L.map('map', {
  zoomControl: false,
}).setView([41.60281747649918, 2.6245074122928997], 11);

const tiles = L.tileLayer(
  'https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg',
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
).addTo(map);

// Definim icona
const blackIcon = L.icon({
  iconUrl: './images/blackIcon.svg',
  iconSize: [48, 56],
  iconAnchor: [24, 56],
  popupAnchor: [0, -32],
});

// Primera part de l'exercici:

// const addedGeoJson = L.geoJSON(geojson, {
//     style: function(feature) {
//         return {
//             color: 'black',
//             weight: 0.5,
//         }
//     },

//     pointToLayer: function(geoJsonPoint, latlng) {
//         return L.marker(latlng, {
//             icon: treeIcon
//         });
//     },

//     onEachFeature: function(feature, layer) {
//         if (feature.geometry.type === 'Point') {
//             layer.bindPopup(`Hello from lat: ${feature.geometry.coordinates[1].toFixed(3)}, lon: ${feature.geometry.coordinates[0].toFixed(3)}`);
//             console.log(feature.geometry.coordinates)
//         }
//     }
// }).addTo(map);

// map.fitBounds(addedGeoJson.getBounds(), {
//     padding: [20, 20]
// });

// Segona part de l'exercici:

// Definim 3 markers amb una icona a opcions
const marker1 = L.marker([41.67290208452616, 2.653398092871811], {
  icon: blackIcon,
});
const marker2 = L.marker([41.60281747649918, 2.6245074122928997], {
  icon: blackIcon,
});
const marker3 = L.marker([41.661948893411534, 2.5588822471796107], {
  icon: blackIcon,
});

// Afegim els markers al mapa amb un popup
const markers = [marker1, marker2, marker3];
const featureGroup = L.featureGroup(markers)
  .bindPopup('Hello from a Point!!!')
  .addTo(map);

// console.log(marker1.getLatLng());

// Limitem el mapa als punts definits, afegim padding a opcions
map.fitBounds(featureGroup.getBounds(), {
  padding: [50, 50],
});
