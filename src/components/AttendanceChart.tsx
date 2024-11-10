"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
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
    presence: 56,
    absence: 8,
  },
  {
    name: "Tue",
    presence: 90,
    absence: 30,
  },
  {
    name: "Wed",
    presence: 75,
    absence: 15,
  },
  {
    name: "Thu",
    presence: 50,
    absence: 10,
  },
  {
    name: "Fri",
    presence: 89,
    absence: 35,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-3xl p-4 w-full h-full">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-lg">Attendance</h2>
        <Image src="/moreDark.png" alt="more-icon" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
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
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="presence"
            fill="#82ca9d"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absence"
            fill="#8884d8"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
