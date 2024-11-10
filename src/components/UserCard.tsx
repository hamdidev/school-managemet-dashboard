import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-timoPurple even:bg-timoYellow p-4 flex-1 min-w-[130px]">
      <div className=" flex items-center justify-between">
        <span className="text-[10px] text-green-500 bg-white px-2 p-1 rounded-full">
          2024/01/01
        </span>
        <Image src="/more.png" alt="more-icon" width={20} height={20} />
      </div>
      <div className="">
        <h1 className="text-2xl font-bold my-4">1,265</h1>
        <h2 className="capitalize text-sm font-medium text-gray-500">
          {type}s
        </h2>
      </div>
    </div>
  );
};

export default UserCard;
