import { useEffect, useState, useRef } from "react";

const visitorData = [
  {
    name: "Karna",
    company: "Avocado Tech",
    idNumber: "AVC793-34",
    email: "prudhvirajkudmula@gmail.com",
    status: "Active",
  },
  {
    name: "Arjuna",
    company: "Designverse",
    idNumber: "DSV578-32",
    email: "prudhvirajkudmula@gmail.com",
    status: "Active",
  },
  {
    name: "Krishna",
    company: "Pixelperfekt",
    idNumber: "PXP343-24",
    email: "prudhvirajkudmula@gmail.com",
    status: "Checked Out",
  },
  {
    name: "Krishna",
    company: "Pixelperfekt",
    idNumber: "PXP343-24",
    email: "prudhvirajkudmula@gmail.com",
    status: "Active",
  },
  {
    name: "Krishna",
    company: "Pixelperfekt",
    idNumber: "PXP343-24",
    email: "prudhvirajkudmula@gmail.com",
    status: "Pending",
  },
  {
    name: "Krishna",
    company: "Pixelperfekt",
    idNumber: "PXP343-24",
    email: "prudhvirajkudmula@gmail.com",
    status: "Checked Out",
  },
  {
    name: "Krishna",
    company: "Pixelperfekt",
    idNumber: "PXP343-24",
    email: "prudhvirajkudmula@gmail.com",
    status: "Active",
  },
  {
    name: "Krishna",
    company: "Pixelperfekt",
    idNumber: "PXP343-24",
    email: "prudhvirajkudmula@gmail.com",
    status: "Pending",
  },
];

const timeLabels = ["09:00 am", "12:00 pm", "03:00 pm", "06:00 pm", "12:00 am"];

const analyticsPoints = [
  { x: 0, y: 78 },
  { x: 50, y: 58 },
  { x: 100, y: 68 },
  { x: 150, y: 28 },
  { x: 200, y: 48 },
  { x: 250, y: 18 },
  { x: 300, y: 52 },
  { x: 350, y: 32 },
  { x: 400, y: 42 },
];

function buildSmoothPath(points) {
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const cpx = (points[i].x + points[i + 1].x) / 2;
    d += ` C ${cpx} ${points[i].y}, ${cpx} ${points[i + 1].y}, ${points[i + 1].x} ${points[i + 1].y}`;
  }
  return d;
}

const statusStyles = {
  Active: "bg-emerald-50 text-emerald-600 border border-emerald-200",
  "Checked Out": "bg-gray-50 text-gray-500 border border-gray-200",
  Pending: "bg-amber-50 text-amber-600 border border-amber-200",
};

function TotalVisitorsCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
      <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className="w-12 h-11 sm:w-16 sm:h-14 bg-[#e8fbf3] rounded-2xl flex items-center justify-center flex-shrink-0">
          <svg
            className="w-7 h-7 sm:w-10 sm:h-10 text-[#00c853]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <span className="text-[#333] text-xl sm:text-2xl font-semibold">
          Total Visitors
        </span>
      </div>
      <div className="flex items-end justify-between">
        <div className="text-5xl sm:text-6xl font-bold text-[#2d2d2d] tracking-tight">
          243
        </div>
        <div className="flex items-end gap-[3px] h-16 sm:h-20 pb-1">
          {[30, 45, 60, 80, 95, 100, 85, 70, 55, 40].map((height, idx) => (
            <div
              key={idx}
              className={`w-[8px] sm:w-[10px] rounded-full transition-all ${idx === 5 ? "bg-[#2d2d2d]" : "bg-gray-200"}`}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AverageVisitorsCard() {
  const [count, setCount] = useState(0);
  const targetCount = 35;
  const canvasRef = useRef(null);

  useEffect(() => {
    let start = 0;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / 1200, 1);
      setCount(Math.floor(progress * targetCount));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const size = canvas.width;
    const cx = size / 2,
      cy = size / 2;
    const radius = size / 2 - 14;
    const startAngle = Math.PI * 0.75;
    const endAngle = Math.PI * 2.25;

    ctx.clearRect(0, 0, size, size);
    ctx.beginPath();
    ctx.arc(cx, cy, radius, startAngle, endAngle);
    ctx.strokeStyle = "#fee2e2";
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.stroke();

    const grad = ctx.createLinearGradient(0, 0, size, 0);
    grad.addColorStop(0, "rgba(255, 100, 100, 0.3)");
    grad.addColorStop(1, "#e8302a");

    const fillEnd = startAngle + (endAngle - startAngle) * 0.72;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, startAngle, fillEnd);
    ctx.strokeStyle = grad;
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.stroke();
  }, []);

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <h3 className="font-bold text-gray-600 text-lg sm:text-[24px] text-center w-full">
        Today Average Visitors
      </h3>
      <div className="flex flex-col mt-4 items-center justify-center flex-1">
        <div className="relative" style={{ width: "150px", height: "150px" }}>
          <canvas
            ref={canvasRef}
            width={150}
            height={150}
            className="absolute top-0 left-0"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="7" r="4" stroke="#e8302a" strokeWidth="1.8" />
              <path
                d="M4 20c0-4 3.582-7 8-7s8 3 8 7"
                stroke="#e8302a"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-3xl font-extrabold text-red-500 leading-none tracking-tight">
              {count}
            </span>
            <p className="text-[11px] text-gray-400 font-medium mt-1">
              Average Usage
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsCard() {
  const linePath = buildSmoothPath(analyticsPoints);
  const areaPath = linePath + ` L 400 100 L 0 100 Z`;

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          <span className="font-semibold text-gray-600 text-sm">
            Today Analytics
          </span>
        </div>
        <div className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-2.5 py-1 text-[11px] text-gray-400 cursor-pointer hover:border-red-200 transition-colors">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
          Jan 2024 ▾
        </div>
      </div>
      <svg
        viewBox="0 0 400 100"
        className="w-full h-20 sm:h-24 block"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF4D4D" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FF4D4D" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill="url(#areaGrad)" />
        <path
          d={linePath}
          fill="none"
          stroke="#FF4D4D"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="250" cy="18" r="4" fill="#FF4D4D" />
        <circle cx="250" cy="18" r="7" fill="#FF4D4D" fillOpacity="0.15" />
      </svg>
      <div className="flex justify-between mt-2">
        {timeLabels.map((t) => (
          <span
            key={t}
            className="text-[8px] sm:text-[9px] text-gray-300 uppercase tracking-wide hidden xs:block first:block last:block sm:block"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* Mobile visitor card for xs/sm screens */
function VisitorCard({ visitor }) {
  return (
    <div className="bg-gray-50/50 rounded-xl p-4 border border-gray-100">
      <div className="flex justify-between items-start mb-2">
        <span className="font-semibold text-gray-800 text-sm">
          {visitor.name}
        </span>
        <span
          className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${statusStyles[visitor.status]}`}
        >
          {visitor.status}
        </span>
      </div>
      <p className="text-xs text-gray-500 mb-1">{visitor.company}</p>
      <p className="text-xs text-gray-400 mb-1">{visitor.idNumber}</p>
      <p className="text-xs text-gray-400 truncate">{visitor.email}</p>
    </div>
  );
}

export default function VisitorDashboard() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50/30 font-sans text-gray-700">
      <div className="w-full sm:w-4/5 p-4 sm:p-6 lg:p-8">
        {/* ── Stats Section ── */}
        {/* Mobile: stack all cards vertically */}
        {/* Tablet (md): 2-col grid */}
        {/* Desktop (lg): 3-col side-by-side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-5 sm:mb-6">
          <TotalVisitorsCard />
          <AnalyticsCard />
          <AverageVisitorsCard />
        </div>

        {/* ── Table Section ── */}
        <div className="bg-white rounded-3xl shadow-sm p-4 sm:p-6 lg:p-8 w-full">
          {/* Desktop / Tablet table */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-0">
              <thead>
                <tr className="bg-gray-50/80">
                  <th className="text-left py-3 sm:py-4 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm font-semibold text-red-500 rounded-l-2xl whitespace-nowrap">
                    Visitor Name
                  </th>
                  <th className="text-left py-3 sm:py-4 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm font-semibold text-red-500 whitespace-nowrap">
                    Company Name
                  </th>
                  <th className="text-left py-3 sm:py-4 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm font-semibold text-red-500 whitespace-nowrap">
                    ID Number
                  </th>
                  <th className="text-left py-3 sm:py-4 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm font-semibold text-red-500 rounded-r-2xl whitespace-nowrap">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody>
                {visitorData.map((visitor, idx) => (
                  <tr
                    key={idx}
                    className="group hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-3 sm:py-4 lg:py-5 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm text-gray-800 font-medium whitespace-nowrap">
                      {visitor.name}
                    </td>
                    <td className="py-3 sm:py-4 lg:py-5 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                      {visitor.company}
                    </td>
                    <td className="py-3 sm:py-4 lg:py-5 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                      {visitor.idNumber}
                    </td>
                    <td className="py-3 sm:py-4 lg:py-5 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm text-gray-600">
                      <span className="block truncate max-w-[160px] sm:max-w-[200px] lg:max-w-none">
                        {visitor.email}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile card list */}
          <div className="sm:hidden">
            <h3 className="text-sm font-semibold text-red-500 mb-3 px-1">
              Visitors
            </h3>
            <div className="flex flex-col gap-3">
              {visitorData.map((visitor, idx) => (
                <VisitorCard key={idx} visitor={visitor} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
