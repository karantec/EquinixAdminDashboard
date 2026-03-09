/** Icons are imported separately to reduce build time */
import { LuGlobe } from "react-icons/lu";

const iconClasses = `h-6 w-6`;

const routes = [
  {
    path: "/app/dashboard",
    icon: (
      <svg
        className={iconClasses}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_48_1093)">
          <path
            d="M9.02 2.84016L3.63 7.04016C2.73 7.74016 2 9.23016 2 10.3602V17.7702C2 20.0902 3.89 21.9902 6.21 21.9902H17.79C20.11 21.9902 22 20.0902 22 17.7802V10.5002C22 9.29016 21.19 7.74016 20.2 7.05016L14.02 2.72016C12.62 1.74016 10.37 1.79016 9.02 2.84016Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 17.9902V14.9902"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    ),
    name: "Dashboard",
  },
  {
    path: "",
    icon: (
      <svg
        className={iconClasses}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="6"
          width="18"
          height="13"
          rx="2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="8.5" cy="12.5" r="1.5" strokeWidth="1.5" />
        <path d="M11 12.5h6" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 15h4" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M8 6V4.5C8 3.67 8.67 3 9.5 3h5c.83 0 1.5.67 1.5 1.5V6"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    name: "Credentials Management",
    submenu: [
      {
        path: "/app/receptionist",
        icon: <LuGlobe className={iconClasses} />,
        name: "Reception Credentials",
      },
      {
        path: "/app/internal-engineer",
        icon: <LuGlobe className={iconClasses} />,
        name: "Internal Engineer",
      },
    ],
  },
  {
    path: "/app/cabinetUpdates",
    icon: <LuGlobe className={iconClasses} />,
    name: "Cabinet Updates",
  },
];

export default routes;
