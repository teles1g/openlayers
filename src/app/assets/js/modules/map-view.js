import { View, Map } from 'ol';
import { OSM } from 'ol/source';
import { Tile } from 'ol/layer';
import { defaults, ScaleLine } from 'ol/control';

class MapView {
  constructor(view) {
    this.view = document.querySelector(view);
  }

  show() {
    const view = new View({
      center: [0, 0],
      zoom: 1,
    });

    const baseLayer = new Tile({
      source: new OSM(),
    });

    const map = new Map({
      target: this.view,
      controls: defaults().extend([new ScaleLine()]),
      renderer: 'canvas',
      layers: [baseLayer],
      view,
    });

    return map;
  }

  init() {
    if (this.view) {
      this.show();
    }

    return this;
  }
}

export default MapView;
