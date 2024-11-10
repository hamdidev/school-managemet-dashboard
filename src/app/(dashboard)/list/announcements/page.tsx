import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { Button } from "@/components/ui/button";
import { announcementsData, eventsData, role } from "@/lib/data";
import { Edit, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const columns = [
  { header: "Title", accessor: "title" },
  { header: "Class", accessor: "class" },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },

  { header: "Actions", accessor: "actions" },
];
type Announcement = {
  id: number;
  title: string;
  class: string;
  date: string;
};

const AnnouncementsList = () => {
  const renderRow = (item: Announcement) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-timoSkyLight"
    >
      <td className="flex gap-4 p-4 items-center">
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold">{item.title}</h3>
        </div>
      </td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>

      <td>
        <div className="flex gap-2 items-center">
          {role === "admin" && (
            <>
              <FormModal table="announcement" type="update" data={item} />
              <FormModal table="announcement" type="delete" id={item.id} />
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
        <h2 className=" hidden md:block text-lg font-semibold">
          All Announcements
        </h2>
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
            {role === "admin" && (
              <FormModal table="announcement" type="create" />
            )}
          </div>
        </div>
      </div>

      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={announcementsData} />

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default AnnouncementsList;
