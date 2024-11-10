import Anouncements from "@/components/Anouncements";
import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalendar";

const StudentPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/* Left */}
      <div className="w-full xl:w-2/3">
        <div className="h-full rounded-md bg-white p-4">
          <h2 className="text-xl font-semibold">Timetable (4A)</h2>
          <BigCalendar />
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <div className="">
          <EventCalendar />
          <Anouncements />
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
