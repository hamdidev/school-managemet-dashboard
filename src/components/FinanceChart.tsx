"use client";
import React, { PureComponent } from "react";
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
    name: "Jan",
    income: 4000,
    expenses: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expenses: 1398,
  },
  {
    name: "Mar",
    income: 2000,
    expenses: 9800,
  },
  {
    name: "Apr",
    income: 2780,
    expenses: 3908,
  },
  {
    name: "May",
    income: 1890,
    expenses: 4800,
  },
  {
    name: "Jun",
    income: 2390,
    expenses: 3800,
  },
  {
    name: "Jul",
    income: 3490,
    expenses: 4300,
  },
  {
    name: "Aug",
    income: 3490,
    expenses: 4300,
  },
  {
    name: "Sep",
    income: 3490,
    expenses: 4300,
  },
  {
    name: "Oct",
    income: 3490,
    expenses: 4300,
  },
  {
    name: "Nov",
    income: 3490,
    expenses: 4300,
  },
  {
    name: "Dec",
    income: 3490,
    expenses: 4300,
  },
];
import Image from "next/image";

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-3xl p-4 w-full h-full">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-lg">Finance</h2>
        <Image src="/moreDark.png" alt="more-icon" width={20} height={20} />
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            horizontal={false}
            stroke="#ddd"
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#d1d5db" }}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#d1d5db" }}
            tickMargin={20}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#8884d8"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="expenses"
            stroke="#82ca9d"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
