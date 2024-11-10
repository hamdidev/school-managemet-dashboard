"use client";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);
  const [date, setDate] = useState(new Date());

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  const handleOnNavigate = (date: Date, view: View) => {
    if (view === Views.WORK_WEEK) {
      setDate(new Date(date.setDate(date.getDate() + 7)));
    }
  };

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents.map((event) => ({
        ...event,
        start: new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          event.start.getDate(),
          event.start.getHours(),
          event.start.getMinutes()
        ),
        end: new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          event.end.getDate(),
          event.end.getHours(),
          event.end.getMinutes()
        ),
      }))}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      onView={handleOnChangeView}
      onNavigate={handleOnNavigate}
      date={date}
      style={{ height: "100%" }}
      min={
        new Date(new Date().getFullYear(), new Date().getMonth(), 1, 8, 0, 0)
      }
      max={
        new Date(
          new Date().getFullYear(),
          new Date().getMonth() + 1,
          0,
          17,
          0,
          0
        )
      }
    />
  );
};

export default BigCalendar;
