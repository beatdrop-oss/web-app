"use client";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Marker from "./marker";
import { Pin } from "@/types/pin";

const pins: Pin[] = [
  {
    latitude: 37.66585,
    longitude: -122.41879,
    image: "https://i.scdn.co/image/ab67616d0000b273f5c2500543eb399b44b0cdab",
    song: "Touch it",
    artist: "VVS",
  },

  {
    latitude: 37.54844,
    longitude: -121.96592,
    image: "https://i.scdn.co/image/ab67616d0000b2736f8c557438166423240df9e5",
    song: "Freestyle",
    artist: "Young Posse",
  },
  {
    latitude: 37.71693,
    longitude: -122.10407,
    image: "https://i.scdn.co/image/ab67616d0000b273b56e502cd5ff7cf0d2884a3c",
    song: "Cliche",
    artist: "Viviz",
  },
  {
    latitude: 37.50253,
    longitude: -122.30042,
    image: "https://i.scdn.co/image/ab67616d0000b2736eb604294f8f58c9078f58b1",
    song: "Whiplash",
    artist: "Aespa",
  },
];

const Map = () => {
  return (
    <MapContainer
      center={[37.62104, -122.17515]}
      zoom={11}
      scrollWheelZoom={false}
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />

      {pins.map((pin, index) => (
        <Marker pin={pin} key={index} />
      ))}
    </MapContainer>
  );
};

export default Map;
