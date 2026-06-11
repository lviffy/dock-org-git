'use client';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default marker icons not resolving in bundled environments
const markerIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Kothari Centrum, Kondapur, Hyderabad
const POSITION: [number, number] = [17.4622, 78.3568];

export default function LeafletMap() {
  return (
    <MapContainer
      center={POSITION}
      zoom={15}
      scrollWheelZoom={false}
      className="h-full w-full"
      aria-label="Map showing our office location in Kondapur, Hyderabad"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={POSITION} icon={markerIcon}>
        <Popup>
          <strong>Dock Foundation</strong>
          <br />
          Regus, Level 4, Kothari Centrum,
          <br />
          Kondapur, Hyderabad 500084
        </Popup>
      </Marker>
    </MapContainer>
  );
}
