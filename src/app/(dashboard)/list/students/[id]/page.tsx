import Image from "next/image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import BigCalendar from "@/components/BigCalendar";
import Anouncements from "@/components/Anouncements";
import Link from "next/link";
import Performance from "@/components/Performance";

const SingleStudentPage = () => {
  return (
    <div className="flex flex-1 flex-col xl:flex-row p-4 gap-4">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-timoPurple py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Avatar className="w-24 h-24">
                <AvatarImage
                  src="https://images.pexels.com/photos/1310461/pexels-photo-1310461.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="avatar"
                />
              </Avatar>
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h2 className="text-xl font-bold">Hettie Estrada</h2>
              <p className="text-sm text-gray-500">dug away calm results</p>
              <div className="flex items-center justify-between text-xs font-medium gap-2 flex-wrap">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="phone" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="phone" width={14} height={14} />
                  <span>Jan 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="phone" width={14} height={14} />
                  <span>user@mail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="phone" width={14} height={14} />
                  <span className="truncate">+1 23 456 789</span>
                </div>
              </div>
            </div>
          </div>

          {/* SMALL CARDS */}
          <div className="flex flex-1 gap-4 justify-between flex-wrap">
            {/* Card */}
            <div className="bg-white w-full flex p-4 rounded-md md:w-[48%] xl:w-[45%] 2xl:w-[48%] ">
              <Image
                src="/singleAttendance.png"
                alt="phone"
                width={24}
                height={24}
                className="w-6 h-6 mr-1"
              />
              <div className="">
                <h2 className="text-sm font-semibold">Attendance</h2>
                <p className="text-sm font-medium text-gray-500">90%</p>
              </div>
            </div>
            {/* Card */}
            <div className="bg-white w-full flex p-4 rounded-md md:w-[48%] xl:w-[45%] 2xl:w-[48%] ">
              <Image
                src="/singleBranch.png"
                alt="phone"
                width={24}
                height={24}
                className="w-6 h-6 mr-1"
              />
              <div className="">
                <h2 className="text-sm font-semibold">Grade</h2>
                <p className="text-sm font-medium text-gray-500">6th</p>
              </div>
            </div>
            {/* Card */}
            <div className="bg-white w-full flex p-4 rounded-md md:w-[48%] xl:w-[45%] 2xl:w-[48%] ">
              <Image
                src="/singleLesson.png"
                alt="phone"
                width={24}
                height={24}
                className="w-6 h-6 mr-1"
              />
              <div className="">
                <h2 className="text-sm font-semibold">Lessons</h2>
                <p className="text-sm font-medium text-gray-500">16</p>
              </div>
            </div>
            {/* Card */}
            <div className="bg-white w-full flex p-4 rounded-md md:w-[48%] xl:w-[45%] 2xl:w-[48%] ">
              <Image
                src="/singleClass.png"
                alt="phone"
                width={24}
                height={24}
                className="w-6 h-6 mr-1"
              />
              <div className="">
                <h2 className="text-sm font-semibold">Class</h2>
                <p className="text-sm font-medium text-gray-500">6A</p>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h2>Student&apos;s Schedule</h2>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h2 className="text-lg font-bold">Shortcuts</h2>
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-500">
            <Link href="/" className="p-3 rounded-md bg-timoPurpleLight">
              Student&apos;s Teachers
            </Link>
            <Link href="/" className="p-3 rounded-md bg-timoYellow ">
              Student&apos;s Lessons
            </Link>
            <Link href="/" className="p-3 rounded-md bg-timoPurple ">
              Student&apos;s Assigments
            </Link>
            <Link href="/" className="p-3 rounded-md bg-timoSky">
              Student&apos;s Exams
            </Link>
            <Link href="/" className="p-3 rounded-md bg-timoYellowLight">
              Student&apos;s Results
            </Link>
          </div>
        </div>
        <Performance />
        <Anouncements />
      </div>
    </div>
  );
};

export default SingleStudentPage;
