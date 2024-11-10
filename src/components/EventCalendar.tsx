"use client";
import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;
const events = [
  {
    id: 1,
    title: "Cultural Day",
    time: "10:00 AM - 12:30 PM",
    description:
      "Students celebrate diversity by sharing traditional clothing, food, and performances from various cultures.",
  },
  {
    id: 2,
    title: "STEM Fair",
    time: "1:00 PM - 3:30 PM",
    description:
      "An interactive fair with hands-on science and tech experiments to spark students’ interest in STEM fields.",
  },
  {
    id: 3,
    title: "Book Character Day",
    time: "9:00 AM - 11:00 AM",
    description:
      "Students dress as favorite book characters and participate in a parade, storytime, and costume contest.",
  },
];

type Value = ValuePiece | [ValuePiece, ValuePiece];
const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <>
      <div className="bg-white p-4 rounded-md">
        <Calendar onChange={onChange} value={value} />
      </div>
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold">Upcoming Events</h2>
        <Image src="/moreDark.png" alt="more-icon" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-5 rounded-md border-2 border-gray-200 border-t-4 odd:border-t-timoSky even:border-t-timoPurple"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium">{event.title}</h2>
              <span className="text-[12px] text-gray-500">{event.time}</span>
            </div>
            <p className="text-sm mt-2">{event.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default EventCalendar;
