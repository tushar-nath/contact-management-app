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
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-4 my-6 mx-auto">
      <div className="flex justify-center">
        <LineChart width={800} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis dataKey="cases" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="cases" stroke="#8884d8" />
        </LineChart>
      </div>
      <p className="text-center pt-4 text-gray-600 text-2xl">
        Cases Fluctuations
      </p>
    </div>
  );
};

export default LineGraph;
