import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation();
  
  const Menus = [
    { title: "Dashboard", src: "Chart_fill", path: "/dashboard" },
    { title: "Inbox", src: "Chat", path: "/inbox" },
    { title: "Accounts", src: "User", gap: true, path: "/accounts" },
    { title: "Schedule", src: "Calendar", path: "/schedule" },
    { title: "Search", src: "Search", path: "/search" },
    { title: "Analytics", src: "Chart", path: "/analytics" },
    { title: "Files", src: "Folder", gap: true, path: "/files" },
    { title: "Setting", src: "Setting", path: "/setting" },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } bg-dark-purple h-screen p-5 pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Name Page
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer ${
                location.pathname === Menu.path ? "bg-light-white" : "hover:bg-light-white"
              } text-gray-300 text-sm items-center gap-x-4 ${
                Menu.gap ? "mt-9" : "mt-2"
              }`}
            >
              <Link to={Menu.path} className="flex items-center gap-x-4 w-full">
                <img src={`./src/assets/${Menu.src}.png`} />
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {Menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1">
        <Outlet />
      </div>
    </div>
  );
}
