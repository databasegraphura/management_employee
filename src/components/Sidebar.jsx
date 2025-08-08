import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaTasks, FaMoneyCheck, FaQuestionCircle, FaUserCircle } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";

export default function Sidebar() {
  const location = useLocation();
  const [employeeName, setEmployeeName] = useState("Name");

  useEffect(() => {
    const name = localStorage.getItem("employeeName");
    if (name) setEmployeeName(name);
  }, []);

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <FaHome /> },
    { name: "My Projects", path: "/my-projects", icon: <AiOutlineProject /> },
    { name: "Completed Projects", path: "/completed-projects", icon: <FaTasks /> },
    { name: "Pay out", path: "/payout", icon: <FaMoneyCheck /> },
    { name: "Help", path: "/help", icon: <FaQuestionCircle /> },
  ];

  return (
    <div className="w-64 h-screen bg-[#3474e0] text-white flex flex-col">
      {/* Logo */}
      <div className="bg-[#2356b6] p-4">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-full h-16 object-contain"
        />
      </div>

      {/* User Info */}
      <div className="flex flex-col items-center text-white py-6">
        <FaUserCircle className="text-4xl mb-2" />
        <p className="text-md font-semibold">{employeeName}</p>
        <p className="text-sm opacity-80">Employee</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm hover:bg-[#2356b6] transition ${
              location.pathname === item.path ? "bg-[#2356b6]" : ""
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
