"use client";
import Image from "next/image";
import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 100,
    fill: "white",
  },
  {
    name: "Girls",
    count: 44,
    fill: "#F33A86",
  },
  {
    name: "Boys",
    count: 56,
    fill: "#83a6ed",
  },
];
const CountChart = () => {
  return (
    <div className="bg-white rounded-3xl p-4 w-full h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-semibold text-lg">Students</h2>
        <Image src="/moreDark.png" alt="more-icon" width={20} height={20} />
      </div>
      <div className="w-full h-[100%] md:h-[75%] relative">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="40%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={30}
            data={data}
          >
            <RadialBar
              label={{ position: "insideStart", fill: "#fff" }}
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt="maleFemale icon"
          width={50}
          height={50}
          className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16 mt-4">
        <div className="flex flex-col  gap-1">
          <div className="w-5 h-5 bg-timoSky rounded-full"></div>
          <h2 className="font-bold">1,296</h2>
          <h3 className="text-xs text-gray-400">Boys (56%)</h3>
        </div>
        <div className="flex flex-col  gap-1">
          <div className="w-5 h-5 bg-timoPink rounded-full"></div>
          <h2 className="font-bold">902</h2>
          <h3 className="text-xs text-gray-400">Girls (44%)</h3>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
