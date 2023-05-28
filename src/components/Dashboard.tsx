import React from "react";
import { useQuery } from "react-query";
import { FadeLoader } from "react-spinners";
import LineGraph from "./LineGraph";
import { DetailPage } from "./Leaflet";

const fetchHistoricalData = async () => {
  const response = await fetch(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  );
  return response.json();
};

const fetchCountriesData = async () => {
  const response = await fetch("https://disease.sh/v3/covid-19/countries");
  return response.json();
};

const Dashboard: React.FC = () => {
  const historicalDataQuery = useQuery("historicalData", fetchHistoricalData);
  const countriesDataQuery = useQuery("countriesData", fetchCountriesData);

  if (historicalDataQuery.isLoading || countriesDataQuery.isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <FadeLoader color="#131313" />
      </div>
    );
  }

  if (historicalDataQuery.isError || countriesDataQuery.isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow">
        <LineGraph data={historicalDataQuery.data?.cases || {}} />
      </div>
      <div className="flex-grow">
        <DetailPage markers={countriesDataQuery.data || []} />
      </div>
    </div>
  );
};

export default Dashboard;
