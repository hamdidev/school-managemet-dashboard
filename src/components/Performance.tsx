"use client";
import Image from "next/image";
import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 92, fill: "#83a6ed" },
  { name: "Group B", value: 8, fill: "#fae27c" },
];

const Performance = () => {
  return (
    <div className="bg-white p-4 rounded-md h-80 relative ">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Performance</h2>
        <Image src="/moreDark.png" alt="logo" width={14} height={14} />
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="text-3xl font-semibold">9.2</h2>
        <p className="text-sm text-gray-400">of 10 max points</p>
      </div>
      <h3 className="font-medium text-[16px] absolute bottom-16 left-0 right-0 m-auto text-center">
        1st Semester - 2nd Semester
      </h3>
    </div>
  );
};

export default Performance;
