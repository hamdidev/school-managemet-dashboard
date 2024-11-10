const data = [
  {
    id: 1,
    title: "Art & Craft Exhibition",
    time: "Nov 15, 2024",
    description:
      "Students celebrate diversity by sharing traditional clothing, food, and performances from various cultures.",
  },
  {
    id: 2,
    title: "Career Day",
    time: "Dec 2, 2024",
    description:
      "An interactive fair with hands-on science and tech experiments to spark students’ interest in STEM fields.",
  },
  {
    id: 3,
    title: "Science Discovery Day",
    time: "Jan 25, 2025",
    description:
      "Students dress as favorite book characters and participate in a parade, storytime, and costume contest.",
  },
];
const Anouncements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Anouncements</h2>
        <span className="text-[12px] text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-3">
        <div className="bg-timoSkyLight p-4 rounded-md">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col"
              style={{ backgroundColor: item.color }}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium mt-4 mb-1">{item.title}</h2>
                <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                  {item.time}
                </span>
              </div>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Anouncements;
