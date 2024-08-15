"use strict";

// Creem mapa
const map = L.map("map").setView([41.60281747649918, 2.6245074122928997], 11);

const tiles = L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg",
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
).addTo(map);

// geoJson creat amb geojson.io
const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {},
      geometry: {
        coordinates: [2.624824577043796, 41.602910121135864],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        coordinates: [2.698425397418305, 41.627821277435174],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        coordinates: [2.606111439966554, 41.657551613581006],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        coordinates: [
          [2.575903473206097, 41.61707528406984],
          [2.583009754919914, 41.638916876217706],
          [2.610933737772257, 41.64235298690738],
          [2.609909141185426, 41.624309675243296],
          [2.5901242235759128, 41.60607846580601],
          [2.637048885820633, 41.62494173285302],
        ],
        type: "LineString",
      },
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        coordinates: [
          [
            [2.6292705561699563, 41.64667302206121],
            [2.668415748463474, 41.61712018339759],
            [2.685945148255513, 41.63332452626926],
            [2.686314017952384, 41.651845118865594],
            [2.6292705561699563, 41.64667302206121],
          ],
        ],
        type: "Polygon",
      },
    },
  ],
};

// Definim icones
const treeIcon = L.icon({
  iconUrl: "./images/treeIcon.png",
  iconSize: [32, 37],
  iconAnchor: [16, 37],
  popupAnchor: [-3, -37],
});

// Afegim geojson al mapa
L.geoJSON(geojson, {
  // estil per línies i poligons
  style: function (feature) {
    return {
      fillColor: "magenta",
      color: "black",
      weight: 0.8,
      opacity: 0.8,
    };
  },
  // Funció on els punts generen capes
  pointToLayer: function (geoJsonPoint, latlng) {
    return L.marker(latlng, {
      icon: treeIcon,
    });
  },
  // Funció que es crida per cada Feature
  onEachFeature: function (feature, layer) {
    if (feature.geometry.type === "Point") {
      layer.bindPopup(
        `Hello from<br>lat: ${feature.geometry.coordinates[1].toFixed(3)}, 
        lon: ${feature.geometry.coordinates[0].toFixed(3)}`
      );
      console.log(feature.geometry.coordinates);
    }
  },
}).addTo(map);
