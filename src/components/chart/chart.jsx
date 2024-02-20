"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    Sales: 3612,
  },
  {
    name: "Tue",
    Sales: 3265,
  },
  {
    name: "Wed",
    Sales:2153,
  },
  {
    name: "Thu",
    Sales: 2780,
  },
  {
    name: "Fri",
    Sales: 1890,
  },
  {
    name: "Sat",
    Sales: 2390,
  },
  {
    name: "Sun",
    Sales: 3490,
  },
];

const Chart = ({title}) => {
  return (
    <div className="chartCont rounded-md">
      <h1 className="font-bold text-xl">{title}</h1>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 50,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Line
            type="monotone"
            dataKey="Sales"
            stroke="#2563eb"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
