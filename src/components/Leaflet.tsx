import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const icon = new L.Icon({
  iconUrl: "./marker.png",
  iconSize: new L.Point(25, 41),
  iconAnchor: [13, 41],
});

export function DetailPage() {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://disease.sh/v3/covid-19/countries"
        );
        const data = await response.json();
        setMarkers(data);
      } catch (error) {
        console.log("Error fetching marker data:", error);
      }
    };

    fetchData();
  }, []);

  const location: LatLngExpression = [47.2154556, -1.5644531];

  return (
    <>
      <MapContainer
        center={location}
        zoom={2}
        style={{ width: "100%", height: 500 }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markers.map((marker: any, index) => (
          <Marker
            key={index}
            position={[marker.countryInfo.lat, marker.countryInfo.long]}
            icon={icon}
          >
            <Popup>
              <div>
                <h3>{marker.country}</h3>
                <p>Total Active Cases: {marker.active}</p>
                <p>Total Recovered Cases: {marker.recovered}</p>
                <p>Total Deaths: {marker.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}
