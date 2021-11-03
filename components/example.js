import { CompositeLayer } from "@deck.gl/core";
import { BitmapLayer } from "@deck.gl/layers";
import { TileLayer } from "@deck.gl/geo-layers";

const urls = [
  "https://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/q2-hsr-900913/{z}/{x}/{y}.png",
  "https://mesonet1.agron.iastate.edu/cache/tile.py/1.0.0/q2-hsr-900913/{z}/{x}/{y}.png",
  "https://mesonet2.agron.iastate.edu/cache/tile.py/1.0.0/q2-hsr-900913/{z}/{x}/{y}.png",
  "https://mesonet3.agron.iastate.edu/cache/tile.py/1.0.0/q2-hsr-900913/{z}/{x}/{y}.png",
];

function renderer(props) {
  const { data, tile } = props;
  const { bbox } = tile;

  const bounds = [bbox.west, bbox.south, bbox.east, bbox.north];

  return new BitmapLayer(props, {
    data: null,
    image: data,
    bounds: bounds,
  });
}

export class ExampleLayer extends CompositeLayer {
  renderLayers() {
    return new TileLayer({
      id: "mrms",
      data: urls,
      renderSubLayers: renderer,
      maxRequests: 20,
      tileSize: 256,
    });
  }
}

ExampleLayer.componentName = "ExampleLayer";
