import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const ArrowConnector = () => (
  <svg
    width="19"
    height="21"
    viewBox="0 0 19 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
  >
    <path
      d="M18.5 17.5L13.5 14.6132V20.3868L18.5 17.5ZM0.5 0H0V12.5H0.5H1V0H0.5ZM5.5 17.5V18H14V17.5V17H5.5V17.5ZM0.5 12.5H0C0 15.5376 2.46243 18 5.5 18V17.5V17C3.01472 17 1 14.9853 1 12.5H0.5Z"
      fill="#2D2D2D"
      fillOpacity="0.6"
    />
  </svg>
);

function SidebarSubmenu({ name, icon, submenu }) {
  const location = useLocation();

  const isAnyChildActive = submenu?.some((s) => s.path === location.pathname);

  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isAnyChildActive) setIsOpen(true);
  }, [location.pathname]);

  return (
    <div className="mt-2">
      {/* Parent Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full flex items-center justify-between gap-3 px-3 py-3 rounded-md text-sm font-medium transition-all duration-150 ${
          isAnyChildActive
            ? "bg-red-600 text-white shadow-md"
            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
        }`}
        style={{ fontFamily: "sans-serif" }}
      >
        <span className="flex items-center gap-3">
          <span className="h-5 w-5 flex-shrink-0">{icon}</span>
          <span className="mt-[2px]">{name}</span>
        </span>
        {/* Chevron */}
        <svg
          className={`h-4 w-4 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          } ${isAnyChildActive ? "text-white" : "text-gray-400"}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M6 9l6 6 6-6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Submenu Items */}
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="ml-4 mt-1 space-y-0.5 py-1">
          {submenu.map((sub, i) => (
            <NavLink
              key={i}
              to={sub.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-2 rounded-md text-md transition-all duration-150 ${
                  isActive
                    ? "bg-red-600 text-white font-semibold"
                    : "text-gray-800 font-normal hover:bg-gray-100 hover:text-gray-900"
                }`
              }
              style={{ fontFamily: "sans-serif", textDecoration: "none" }}
            >
              {({ isActive }) => (
                <>
                  {/* Arrow connector only on first item, spacer for rest */}
                  {i === 0 ? (
                    <ArrowConnector />
                  ) : (
                    <span style={{ width: "25px", flexShrink: 0 }} />
                  )}
                  <span className="flex items-center gap-2.5 flex-1 min-w-0">
                    <span
                      className={`h-5 w-5 flex-shrink-0 ${isActive ? "text-white" : "text-gray-600"}`}
                    >
                      {sub.icon}
                    </span>

                    <span className="truncate block">{sub.name}</span>
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SidebarSubmenu;
