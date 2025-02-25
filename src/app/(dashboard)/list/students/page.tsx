import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { Button } from "@/components/ui/button";
import { role, studentsData, teachersData } from "@/lib/data";
import { Delete, Eye, Trash2, View } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const columns = [
  { header: "Info", accessor: "info" },
  {
    header: "Student Id",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  { header: "Phone", accessor: "phone", className: "hidden lg:table-cell" },
  { header: "Address", accessor: "address", className: "hidden lg:table-cell" },
  { header: "Actions", accessor: "actions" },
];
type Student = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  grade: number;
  class: string;
  phone?: string;
  photo: string;
  address: string;
  actions: string;
};

const StudentsList = () => {
  const renderRow = (item: Student) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-timoSkyLight"
    >
      <td className="flex gap-4 p-4 items-center">
        <Image
          src={item.photo}
          alt={item.name}
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 object-cover rounded-full"
        />
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-400">{item?.class}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.studentId}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex gap-2 items-center">
          {role === "admin" && (
            <>
              <FormModal table="student" type="update" data={item} />
              <FormModal table="student" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="p4 rounded-md bg-white m-4 mt-0 flex-1">
      {/* TOP */}
      <div className="flex justify-between items-center">
        <h2 className=" hidden md:block text-lg font-semibold">All Students</h2>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center self-end gap-4">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-timoYellow">
              <Image
                src="/filter.png"
                alt="filter-icon"
                width={14}
                height={14}
              />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-timoYellow">
              <Image src="/sort.png" alt="sort-icon" width={14} height={14} />
            </button>

            <FormModal table="student" type="create" />
          </div>
        </div>
      </div>

      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={studentsData} />

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default StudentsList;
