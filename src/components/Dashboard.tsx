import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LineGraph from "./LineGraph";
import { DetailPage } from "./Leaflet";

const Dashboard: React.FC = () => {
  const [historicalData, setHistoricalData] = useState<{
    [date: string]: number;
  }>({});
  const [countriesData, setCountriesData] = useState([]);
  const position = [51.505, -0.09];

  useEffect(() => {
    const fetchHistoricalData = async () => {
      try {
        const response = await fetch(
          "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
        );
        const data = await response.json();
        setHistoricalData(data.cases);
      } catch (error) {
        console.error("Error fetching historical data:", error);
      }
    };

    const fetchCountriesData = async () => {
      try {
        const response = await fetch(
          "https://disease.sh/v3/covid-19/countries"
        );
        const data = await response.json();
        setCountriesData(data);
      } catch (error) {
        console.error("Error fetching countries data:", error);
      }
    };

    fetchHistoricalData();
    fetchCountriesData();
  }, []);

  return (
    <div className="flex h-screen">
      <div className="w-1/2 h-full">
        <LineGraph data={historicalData} />
      </div>
      <div className="w-1/2 h-full">
        <DetailPage />
      </div>
    </div>
  );
};

export default Dashboard;
