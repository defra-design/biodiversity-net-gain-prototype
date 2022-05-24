// Map support is based on https://github.com/DEFRA/fmfp-prototype as this service is in a more advanced state.
// For example, polygon styling considers accessibility.

import Map from 'ol/Map';

// Projection
import {fromLonLat} from 'ol/proj';

// Formatting and styling
import {Style, Fill, Stroke} from 'ol/style';
import Icon from 'ol/style/Icon';

// Sources
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';

// Layers
import {Tile as TileLayer} from 'ol/layer';
import VectorLayer from 'ol/layer/Vector';

// Views
import View from 'ol/View';

// Controls and coordinates
import MousePosition from 'ol/control/MousePosition';
import {FullScreen, ScaleLine, defaults as defaultControls} from 'ol/control';
import {createStringXY} from 'ol/coordinate';

// Interactions
import Draw from 'ol/interaction/Draw';
import Modify from 'ol/interaction/Modify';
import Snap from 'ol/interaction/Snap';

// Define styles

const gainSiteDevelopmentPolygonStyle = new Style({
  fill: new Fill({
    color: 'rgba(255, 255, 255, 0.5)'
  }),
  stroke: new Stroke({
    color: '#B10E1E',
    width: 3
  }),
  image: new Icon({
    opacity: 1,
    size: [32, 32],
    scale: 0.5,
    src: '/public/images/map-draw-cursor-2x.png'
  })
});

const gainSiteDevelopmentPolygonVertexStyle = new Style({
  image: new Icon({
    opacity: 1,
    size: [32, 32],
    scale: 0.5,
    src: '/public/images/map-draw-cursor-2x.png'
  })
});

const drawStyle = new Style({
  fill: new Fill({
    color: 'rgba(255, 255, 255, 0.5)'
  }),
  stroke: new Stroke({
    color: '#005EA5',
    width: 3
  }),
  image: new Icon({
    opacity: 1,
    size: [32, 32],
    scale: 0.5,
    src: '/public/images/map-draw-cursor-2x.png'
  })
});

const modifyStyle = new Style({
  fill: new Fill({
    color: 'rgba(255, 255, 255, 0.5)'
  }),
  stroke: new Stroke({
    color: '#FFBF47',
    width: 3
  }),
  image: new Icon({
    opacity: 1,
    size: [32, 32],
    scale: 0.5,
    src: '/public/images/map-draw-cursor-2x.png'
  })
});


// Define sources and layers
const osmSource = new OSM();
const osmLayer = new TileLayer({
  source: osmSource  
})

const gainSiteDevelopmentSource = new VectorSource({
  wrapX: false
});

const gainSiteDevelopmentLayer = new VectorLayer({
  source: gainSiteDevelopmentSource,
  style: [gainSiteDevelopmentPolygonStyle, gainSiteDevelopmentPolygonVertexStyle]
});

// Controls for:
// - full screen display
// - scale bar display
// - displaying coordinates on the screen as the mouse moves
const fullScreenControl = new FullScreen();

const scaleBarControl = new ScaleLine({
  bar: true,
  steps: 4,
  text: true,
  minWidth: 140,
});

const mousePositionControl = new MousePosition({
  coordinateFormat: createStringXY(4),
  projection: 'EPSG:4326',
  className: 'custom-mouse-position',
  target: document.getElementById('map-coordinates')
});

// Create the map
const map = new Map({
  controls: defaultControls().extend([fullScreenControl, scaleBarControl, mousePositionControl]),
  target: 'map',
  layers: [
    osmLayer,
    gainSiteDevelopmentLayer
  ],
  view: new View({
    center: fromLonLat([ -1.4622600, 52.564470]),
    zoom: 18,
    minZoom: 14,
    maxZoom: 20,
  }),
});

// Create the map offsite
const offsite = new Map({
  controls: defaultControls().extend([fullScreenControl]),
  target: 'offsite',
  layers: [
    osmLayer,
    gainSiteDevelopmentLayer
  ],
  view: new View({
    center: fromLonLat([ -1.768670, 53.877750]),
    zoom: 18,
    minZoom: 14,
    maxZoom: 20,
  }),
});

// Add interactions

map.addInteraction(
  new Draw({
    type: 'Polygon',
    source: gainSiteDevelopmentSource,
    style: drawStyle
  })
);

map.addInteraction(
  new Modify({
    source: gainSiteDevelopmentSource,
    style: modifyStyle
  })
);

map.addInteraction(
  new Snap({
    source: gainSiteDevelopmentSource
  })
);

const deleteBoundary = document.getElementById('deleteBoundary');
deleteBoundary.addEventListener('click', function () {
  gainSiteDevelopmentSource.clear()
});

