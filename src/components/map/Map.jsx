import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
  const position = [41.3123, 69.2796];

  return (
    <div
      style={{
        width: "640px",
        height: "400px",
        margin: "0 auto",
        borderRadius: "40px",
        overflow: "hidden",
      }}
    >
      <MapContainer
        center={position}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={position}>
          <Popup>Amir Timur Square, Tashkent, Uzbekistan</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
