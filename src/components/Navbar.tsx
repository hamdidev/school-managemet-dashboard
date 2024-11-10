import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* Search bar */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="logo" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none w-[200px] p-2"
        />
      </div>
      {/* icons and user */}
      <div className="flex items-center gap-4 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="logo" width={14} height={14} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src="/announcement.png" alt="logo" width={20} height={20} />
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-purple-500 text-white text-xs flex items-center justify-center">
            1
          </div>
        </div>
        <div className="flex flex-col ">
          <span className="text-sm leading-3 font-medium">John Doe</span>
          <span className="text-xs text-gray-400 text-right">Admin</span>
        </div>
        <Image
          src="/avatar.png"
          alt="user avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
