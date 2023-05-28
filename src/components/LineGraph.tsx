import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface LineGraphProps {
  data: { [date: string]: number };
}

const LineGraph: React.FC<LineGraphProps> = ({ data }) => {
  const chartData = Object.entries(data).map(([date, cases]) => ({
    date,
    cases,
  }));

  return (
    <LineChart width={600} height={300} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="cases" stroke="#8884d8" />
    </LineChart>
  );
};

export default LineGraph;
