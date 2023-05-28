import React, { useEffect, useState } from "react";
import LineGraph from "./LineGraph";
import { DetailPage } from "./Leaflet";

const Dashboard: React.FC = () => {
  const [historicalData, setHistoricalData] = useState<{
    [date: string]: number;
  }>({});
  const [countriesData, setCountriesData] = useState([]);

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
    <div className="flex flex-col h-screen">
      <div className="flex-grow">
        <LineGraph data={historicalData} />
      </div>
      <div className="flex-grow">
        <DetailPage markers={countriesData} />
      </div>
    </div>
  );
};

export default Dashboard;
