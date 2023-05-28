import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const icon = new L.Icon({
  iconUrl: "./marker.png",
  iconSize: new L.Point(25, 41),
  iconAnchor: [13, 41],
});

interface DetailPageProps {
  markers: any[]; // Update the type as per your marker data structure
}

export function Maps({ markers }: DetailPageProps) {
  const calculateMapCenter = (): LatLngExpression => {
    if (markers.length > 0) {
      const latSum = markers.reduce(
        (accumulator, marker: any) => accumulator + marker.countryInfo.lat,
        0
      );
      const lngSum = markers.reduce(
        (accumulator, marker: any) => accumulator + marker.countryInfo.long,
        0
      );
      const avgLat = latSum / markers.length;
      const avgLng = lngSum / markers.length;
      return [avgLat, avgLng];
    }
    // Default center if no markers
    return [47.2154556, -1.5644531];
  };

  const mapOptions = {
    zoomSnap: 0.5, // Increment at which the zoom level changes
    zoomDelta: 0.5, // Zoom level change when zooming in/out
  };

  return (
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-4 my-6 mx-auto">
      <div className="w-full h-fit">
        <MapContainer
          center={calculateMapCenter()}
          zoom={2}
          style={{ width: "100%", height: 500 }}
          {...mapOptions}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {markers.map((marker: any, index) => (
            <Marker
              key={index}
              position={[marker.countryInfo.lat, marker.countryInfo.long]}
              icon={icon}
            >
              <Popup>
                <div style={{ textAlign: "center" }}>
                  <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                    {marker.country}
                  </h3>
                  <p>
                    <span style={{ fontWeight: "bold" }}>
                      Total Active Cases:
                    </span>{" "}
                    {marker.active}
                  </p>
                  <p>
                    <span style={{ fontWeight: "bold" }}>
                      Total Recovered Cases:
                    </span>{" "}
                    {marker.recovered}
                  </p>
                  <p>
                    <span style={{ fontWeight: "bold" }}>Total Deaths:</span>{" "}
                    {marker.deaths}
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
        <p className="text-center pt-4 mt-2 text-gray-600 text-xl">
          Country Specific Data
        </p>
      </div>
    </div>
  );
}
