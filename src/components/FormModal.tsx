"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => <p>Loading...</p>,
});
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => <p>Loading...</p>,
});
const forms: {
  [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />,
};
const FormModal = ({
  table,
  data,
  id,
  type,
}: {
  table:
    | "teacher"
    | "class"
    | "event"
    | "exam"
    | "result"
    | "parent"
    | "student"
    | "subject"
    | "attendance"
    | "assignment"
    | "lesson"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-timoYellow"
      : type === "update"
      ? "bg-timoSky"
      : "bg-timoPurple";
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);
  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="flex flex-col gap-4 p-4">
        <span className="text-center font-medium">
          All data will be deleted. <br /> Are you sure you want to delete{" "}
          {table}?
        </span>
        <button className="bg-red-500 text-white py-2 px-4 rounded-md border-none w-max self-center">
          Delete
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](type, data)
    ) : (
      "Form not found."
    );
  };
  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setIsOpen(true)}
      >
        <Image src={`/${type}.png`} alt="create" width={16} height={16} />
      </button>
      {isOpen && (
        <div className="w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div className="absolute top-4 right-4 cursor-pointer">
              <Image
                src="/close.png"
                alt="close"
                width={16}
                height={16}
                onClick={() => setIsOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
