import React from "react";

function Dashboard() {
  // Sample visitor data
  const visitorData = [
    {
      name: "Karne",
      company: "Avocado Tech",
      idNumber: "AWC793-34",
      email: "prindivrajkundnani@gmail.com",
    },
    {
      name: "Arjuna",
      company: "Designerso",
      idNumber: "DSV878-32",
      email: "prindivrajkundnani@gmail.com",
    },
    {
      name: "Krishna",
      company: "Pearlperfast",
      idNumber: "PXP543-24",
      email: "prindivrajkundnani@gmail.com",
    },
    {
      name: "Krishna",
      company: "Pearlperfast",
      idNumber: "PXP543-24",
      email: "prindivrajkundnani@gmail.com",
    },
    {
      name: "Krishna",
      company: "Pearlperfast",
      idNumber: "PXP543-24",
      email: "prindivrajkundnani@gmail.com",
    },
    {
      name: "Krishna",
      company: "Pearlperfast",
      idNumber: "PXP543-24",
      email: "prindivrajkundnani@gmail.com",
    },
    {
      name: "Krishna",
      company: "Pearlperfast",
      idNumber: "PXP543-24",
      email: "prindivrajkundnani@gmail.com",
    },
    {
      name: "Krishna",
      company: "Pearlperfast",
      idNumber: "PXP543-24",
      email: "prindivrajkundnani@gmail.com",
    },
  ];

  const chartData = [
    20, 30, 25, 35, 30, 40, 35, 45, 40, 50, 45, 55, 50, 60, 55, 65,
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 ">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-8 ">
        {/* Today Visitors Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <span className="text-gray-600 text-sm">Today Visitors</span>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div className="text-4xl font-bold text-gray-800">243</div>
            <div className="flex items-end gap-0.5 h-12 mb-1">
              {chartData.map((height, idx) => (
                <div
                  key={idx}
                  className={`w-1.5 ${
                    idx === chartData.length - 1 ? "bg-gray-800" : "bg-gray-300"
                  } rounded-sm`}
                  style={{ height: `${(height / 65) * 100}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Today Analytics Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
              <span className="text-gray-800 text-sm font-medium">
                Today Analytics
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-red-400 rounded-sm"></div>
                <span className="text-gray-600">Jan 2025</span>
              </div>
            </div>
          </div>
          <div className="h-32 relative">
            <svg viewBox="0 0 400 100" className="w-full h-full">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "#fca5a5", stopOpacity: 0.3 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#fca5a5", stopOpacity: 0 }}
                  />
                </linearGradient>
              </defs>
              <path
                d="M 0 80 L 50 70 L 100 75 L 150 60 L 200 65 L 250 50 L 300 55 L 350 45 L 400 50"
                fill="none"
                stroke="#f87171"
                strokeWidth="2"
              />
              <path
                d="M 0 80 L 50 70 L 100 75 L 150 60 L 200 65 L 250 50 L 300 55 L 350 45 L 400 50 L 400 100 L 0 100 Z"
                fill="url(#gradient)"
              />
            </svg>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>Jan20</span>
            <span>Feb20</span>
            <span>Mar20</span>
            <span>Apr20</span>
            <span>May20</span>
            <span>Jun20</span>
          </div>
        </div>

        {/* Today Average Visitors Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="mb-4">
            <span className="text-gray-800 text-sm font-medium">
              Today Average Visitors
            </span>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="#fee2e2"
                  strokeWidth="12"
                  fill="none"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="#ef4444"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 56 * 0.35} ${
                    2 * Math.PI * 56
                  }`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500">35</div>
                  <div className="text-xs text-gray-400">Average</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visitor Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-4 text-sm font-medium text-red-500">
                  Visitor Name
                </th>
                <th className="text-left p-4 text-sm font-medium text-red-500">
                  Company Name
                </th>
                <th className="text-left p-4 text-sm font-medium text-red-500">
                  ID Number
                </th>
                <th className="text-left p-4 text-sm font-medium text-red-500">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {visitorData.map((visitor, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="p-4 text-sm text-gray-800">{visitor.name}</td>
                  <td className="p-4 text-sm text-gray-800">
                    {visitor.company}
                  </td>
                  <td className="p-4 text-sm text-gray-800">
                    {visitor.idNumber}
                  </td>
                  <td className="p-4 text-sm text-gray-600">{visitor.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
