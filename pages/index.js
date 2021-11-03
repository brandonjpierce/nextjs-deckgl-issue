import React from "react";
import { DeckGL } from "@deck.gl/react";
import { MapView } from "@deck.gl/core";
import { StaticMap } from "react-map-gl";
import { ExampleLayer } from "../components/example";

const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const MAP_VIEW = new MapView({
  repeat: true,
  controller: true,
});

export default function Home() {
  return (
    <DeckGL views={MAP_VIEW} useDevicePixels={false}>
      <ExampleLayer />
      <StaticMap
        reuseMaps={true}
        preventStyleDiffing={true}
        mapboxApiAccessToken={token}
      />
    </DeckGL>
  );
}
