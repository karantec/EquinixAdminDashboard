import { useState } from "react";

function CabinetUpdates() {
  const [updates] = useState([
    {
      id: 1,
      name: "Prudhvi raj",
      time: "12:23:11 PM",
      prevDate: "14-11-2025",
      prevEng: "Prudhvi",
      upDate: "15-11-2025",
      upEng: "Swasthik",
      isToday: true,
      isSelected: true,
    },
    {
      id: 2,
      name: "Prudhvi raj",
      time: "12:23:11 PM",
      prevDate: "14-11-205",
      prevEng: "Prudhvi",
      upDate: "15-11-205",
      upEng: "Swasthik",
      isToday: true,
    },
    {
      id: 3,
      name: "Prudhvi raj",
      time: "12:23:11 PM",
      prevDate: "14-11-205",
      prevEng: "Prudhvi",
      upDate: "15-11-205",
      upEng: "Swasthik",
      isToday: true,
    },
    {
      id: 4,
      name: "Prudhvi raj",
      time: "12:23:11 PM",
      prevDate: "14-11-205",
      prevEng: "Prudhvi",
      upDate: "15-11-205",
      upEng: "Swasthik",
      isToday: true,
    },
  ]);

  const renderCardGrid = (items) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8">
      {items.map((card) => (
        <div
          key={card.id}
          className={`bg-white rounded-lg p-5 border-[1.5px] ${
            card.isSelected ? "border-[#3B82F6]" : "border-gray-100 shadow-sm"
          }`}
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-[#333]">{card.name}</h3>
            <span className="text-[10px] text-gray-400 font-medium">
              {card.time}
            </span>
          </div>

          <div className="space-y-4">
            {/* Previous Section */}
            <div className="border-t border-gray-100 pt-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm text-gray-400">Previous:</span>
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-200">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                </span>
              </div>
              <p className="text-[14px] font-bold text-[#222]">
                Date: {card.prevDate}
              </p>
              <p className="text-[14px] font-bold text-[#222]">
                Engineer Name: {card.prevEng}
              </p>
            </div>

            {/* Updated Section */}
            <div className="border-t border-gray-100 pt-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm text-gray-400">Updated:</span>
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-200">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </span>
              </div>
              <p className="text-[14px] font-bold text-[#222]">
                Date: {card.upDate}
              </p>
              <p className="text-[14px] font-bold text-[#222]">
                Engineer Name: {card.upEng}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-8">
      {/* Top Header */}
      <div className="flex justify-between items-center px-8 mb-4">
        <h1 className="text-2xl font-semibold text-[#444]">Cabinet Updates</h1>
        <div className="flex gap-3">
          <button className="bg-[#EF4444] text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-md">
            View Excel File
          </button>
          <button className="bg-white text-[#EF4444] border border-[#EF4444] px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 shadow-sm">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.80065 5.54199H13.1923C13.7257 5.54199 14.159 5.97533 14.159 6.50866V7.57533C14.159 7.96699 13.9173 8.45033 13.6757 8.692L11.5923 10.5337C11.3007 10.7753 11.109 11.2587 11.109 11.6503V13.7337C11.109 14.0253 10.9173 14.4087 10.6757 14.5587L10.0007 14.9837C9.36732 15.3753 8.50065 14.9337 8.50065 14.1587V11.592C8.50065 11.2503 8.30898 10.817 8.10898 10.5753L6.26732 8.63367C6.02565 8.40033 5.83398 7.95866 5.83398 7.66699V6.55866C5.83398 5.97533 6.26732 5.54199 6.80065 5.54199Z"
                stroke="#E92B2E"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M7.50033 18.3337H12.5003C16.667 18.3337 18.3337 16.667 18.3337 12.5003V7.50033C18.3337 3.33366 16.667 1.66699 12.5003 1.66699H7.50033C3.33366 1.66699 1.66699 3.33366 1.66699 7.50033V12.5003C1.66699 16.667 3.33366 18.3337 7.50033 18.3337Z"
                stroke="#E92B2E"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Filter
          </button>
        </div>
      </div>

      {/* Date Divider (Today) */}
      <div className="relative mb-8 mt-12">
        <div className="relative flex justify-end px-8">
          <span className="bg-[#F9FAFB] pl-4 text-sm  text-gray-500">
            Today (15-11-2024)
          </span>
        </div>
      </div>
      {renderCardGrid(updates.filter((u) => u.isToday))}

      {/* Date Divider (Yesterday) */}
      <div className="relative mb-8 mt-16">
        <div
          className="absolute inset-0 flex items-center px-8"
          aria-hidden="true"
        >
          <div className="w-full border-t border-gray-300"></div>
        </div>
      </div>
      <span className="bg-[#F9FAFB] pl-6 pt-3 text-sm  text-gray-400 block text-right">
        Yesterday (14-11-2024)
      </span>
      {renderCardGrid(updates.filter((u) => !u.isToday))}
    </div>
  );
}

export default CabinetUpdates;
