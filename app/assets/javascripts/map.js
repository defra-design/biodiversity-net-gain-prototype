import GeoJSON from 'ol/format/GeoJSON';
import Map from 'ol/Map';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';

new Map({
  target: 'map',
  layers: [
    new VectorLayer({
      source: new VectorSource({
        format: new GeoJSON(),
        url: window.jsonurl,
      }),
    }),
  ],
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
});
