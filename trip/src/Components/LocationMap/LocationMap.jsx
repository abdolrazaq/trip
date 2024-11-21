import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './LocationMap.scss';
import L from 'leaflet';

const locations = [
  { name: 'ائل گلی', coords: [38.015, 46.336] },
  { name: 'کاخ شهرداری', coords: [38.080, 46.290] },
  { name: 'مقبره الشعرا', coords: [38.073, 46.300] },
  { name: 'کوه عینالی', coords: [38.096, 46.276] },
  { name: 'موزه عصر آهن', coords: [38.066, 46.293] },
];

// Fix leaflet's default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
});

const LocationMap = () => {
  const handleMarkerClick = (name, coords) => {
    alert(`${name}\nLat: ${coords[0]}\nLon: ${coords[1]}`);
  };

  return (
    <MapContainer center={[38.067, 46.291]} zoom={13} id="map">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, idx) => (
        <Marker
          key={idx}
          position={location.coords}
          eventHandlers={{
            click: () => handleMarkerClick(location.name, location.coords),
          }}
        >
          <Popup>
            <div className="popup-content">
              <b>{location.name}</b><br />
              Lat: {location.coords[0]}<br />
              Lon: {location.coords[1]}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default LocationMap;
