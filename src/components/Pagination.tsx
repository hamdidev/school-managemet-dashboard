import { Button } from "./ui/button";

const Pagination = () => {
  return (
    <div className="p-4 text-gray-500 flex justify-between items-center">
      <Button
        disabled
        className="p-2 px-3 rounded-md bg-slate-200 text-xs text-gray-500 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Prev
      </Button>
      <div className="flex items-center gap-2 text-sm">
        <button className="px-2 rounded-sm bg-timoSky">1</button>
        <button className="px-2 rounded-sm ">2</button>
        <button className="px-2 rounded-sm ">3</button>
        <button className="px-2 rounded-sm ">4</button>
        <button className="px-2 rounded-sm ">...</button>
        <button className="px-2 rounded-sm ">10</button>
      </div>
      <Button className="p-2 px-3 rounded-md bg-slate-200 text-xs text-gray-500 font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
        Next
      </Button>
    </div>
  );
};

export default Pagination;
