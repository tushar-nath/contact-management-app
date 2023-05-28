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

  const formatYAxisTick = (value: number) => {
    return value.toLocaleString();
  };

  return (
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-md px-2 pb-4 pt-8 my-6 mx-auto">
      <div className="flex justify-center">
        <LineChart
          width={850}
          height={300}
          data={chartData}
          margin={{ top: 20, right: 20, bottom: 20, left: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis tickFormatter={formatYAxisTick} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="cases" stroke="#3498db" />
        </LineChart>
      </div>
      <p className="text-center pt-4 text-gray-600 text-xl">
        Cases Fluctuations
      </p>
    </div>
  );
};

export default LineGraph;
