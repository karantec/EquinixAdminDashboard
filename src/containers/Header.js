import { themeChange } from "theme-change";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BellIcon from "@heroicons/react/24/outline/BellIcon";
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon";
import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon";
import { openRightDrawer } from "../features/common/rightDrawerSlice";
import { RIGHT_DRAWER_TYPES } from "../utils/globalConstantUtil";
import { NavLink, Routes, Link, useLocation } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const { noOfNotifications, pageTitle } = useSelector((state) => state.header);
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme")
  );

  useEffect(() => {
    themeChange(false);
    if (currentTheme === null) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setCurrentTheme("dark");
      } else {
        setCurrentTheme("light");
      }
    }
  }, []);

  const openNotification = () => {
    dispatch(
      openRightDrawer({
        header: "Notifications",
        bodyType: RIGHT_DRAWER_TYPES.NOTIFICATION,
      })
    );
  };

  function logoutUser() {
    localStorage.clear();
    window.location.href = "/";
  }

  return (
    <>
      <div className="navbar sticky top-0 bg-white z-10 shadow-sm border-b border-gray-200 px-6 h-16">
        {/* Left Section - Menu toggle and Search */}
        <div className="flex-1 flex items-center gap-4">
          {/* Mobile menu toggle */}
          <label
            htmlFor="left-sidebar-drawer"
            className="btn btn-ghost btn-circle lg:hidden"
          >
            <Bars3Icon className="h-6 w-6 text-gray-600" />
          </label>

          {/* Search Bar */}
          <div className="relative hidden md:block">
            <div className="flex items-center bg-gray-50 rounded-lg px-4 py-2 w-80">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 w-full"
              />
            </div>
          </div>
        </div>

        {/* Right Section - Icons and Profile */}
        <div className="flex-none">
          <div className="flex items-center gap-2">
            {/* Grid Icon */}
            <button className="btn btn-ghost btn-circle">
              <Squares2X2Icon className="h-6 w-6 text-gray-600" />
            </button>

            {/* Notification Bell */}
            <button
              className="btn btn-ghost btn-circle relative"
              onClick={() => openNotification()}
            >
              <BellIcon className="h-6 w-6 text-gray-600" />
              {noOfNotifications > 0 ? (
                <span className="absolute top-2 right-2 flex h-4 w-4 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 text-[8px] text-white items-center justify-center font-bold">
                    {noOfNotifications}
                  </span>
                </span>
              ) : null}
            </button>

            {/* Profile Dropdown */}
            <div className="dropdown dropdown-end ml-2">
              <label
                tabIndex={0}
                className="btn btn-ghost rounded-lg px-3 py-2 h-auto min-h-0 hover:bg-gray-50"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold text-sm">
                    V
                  </div>
                  <span className="text-sm font-medium text-gray-700 hidden lg:block">
                    Vasudevdas
                  </span>
                  <ChevronDownIcon className="h-4 w-4 text-gray-500 hidden lg:block" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-white rounded-lg w-52 border border-gray-200"
              >
                <li>
                  <Link
                    to={"/app/settings-profile"}
                    className="text-gray-700 hover:bg-gray-50"
                  >
                    Profile Settings
                    <span className="badge badge-sm bg-blue-500 text-white border-none">
                      New
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/app/settings-billing"}
                    className="text-gray-700 hover:bg-gray-50"
                  >
                    Bill History
                  </Link>
                </li>
                <div className="divider my-1"></div>
                <li>
                  <a
                    onClick={logoutUser}
                    className="text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
