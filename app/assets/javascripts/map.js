import {Style, Fill, Stroke} from 'ol/style';

import GeoJSON from 'ol/format/GeoJSON';
import Map from 'ol/Map';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';

// Drag and drop functionality
import DragAndDrop from 'ol/interaction/DragAndDrop'
// Drawing new features
import Draw from 'ol/interaction/Draw';
import Snap from 'ol/interaction/Snap';


const source = new VectorSource();

const map = new Map({
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

const layer = new VectorLayer({
  source: source,
});
map.addLayer(layer);

map.addInteraction(
  new DragAndDrop({
    source: source,
    formatConstructors: [GeoJSON],
  })
);

map.addInteraction(
  new Draw({
    type: 'Polygon',
    source: source,
  })
);

map.addInteraction(
  new Snap({
    source: source,
  })
);

const clear = document.getElementById('clear');
clear.addEventListener('click', function () {
  source.clear();
});

const format = new GeoJSON({featureProjection: 'EPSG:3857'});
const download = document.getElementById('download');
source.on('change', function () {
  const features = source.getFeatures();
  const json = format.writeFeatures(features);
  download.href =
    'data:application/json;charset=utf-8,' + encodeURIComponent(json);
});
