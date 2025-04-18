'use client'
import { useState } from "react";
import {
  FaHome,
  FaUser,
  FaCube,
  FaWpforms,
  FaUserFriends,
  FaAngleDown,
  FaAngleRight,
} from "react-icons/fa";
import Link from "next/link";

const Sidebar = () => {
  const [isUserOpen, setIsUserOpen] = useState(false);

  return (
    <aside className="w-64 h-screen bg-white shadow-md flex flex-col p-4">
      {/* Dashboard Link */}
      <Link href="/dashboard">
        <div className="flex items-center justify-between bg-indigo-600 text-white rounded-lg px-4 py-2 mb-4 cursor-pointer">
          <div className="flex items-center space-x-2">
            <FaHome />
            <span className="font-medium">Dashboard</span>
          </div>
          <span className="text-xs bg-rose-500 px-2 py-0.5 rounded-full">9</span>
        </div>
      </Link>

      {/* Template Header */}
      <div className="text-xs font-semibold text-gray-400 mb-2 px-1 uppercase">Manage</div>

      {/* Menu Items */}
      <nav className="flex flex-col space-y-2 font-sans">
        {/* Dropdown for Users */}
        <div>
          <div
            onClick={() => setIsUserOpen(!isUserOpen)}
            className="flex items-center justify-between px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            <div className="flex items-center space-x-2">
              <FaUser />
              <span>Users</span>
            </div>
            {isUserOpen ? <FaAngleDown className="text-sm" /> : <FaAngleRight className="text-sm" />}
          </div>
          {isUserOpen && (
            <ul className="ml-8 mt-1 text-sm text-gray-600 space-y-1">
              <li className="hover:text-black cursor-pointer">All Users</li>
              <li className="hover:text-black cursor-pointer">Add User</li>
              <li className="hover:text-black cursor-pointer">User Roles</li>
            </ul>
          )}
        </div>

        <SidebarItem icon={<FaCube />} label="NFT Collections" />
        <SidebarItem icon={<FaWpforms />} label="Events Forms" />
        <SidebarItem icon={<FaUserFriends />} label="Friends" />
      </nav>
    </aside>
  );
};

const SidebarItem = ({ icon, label }) => (
  <div className="flex items-center justify-between px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer">
    <div className="flex items-center space-x-2">
      {icon}
      <span>{label}</span>
    </div>
    <span className="text-gray-400">{'>'}</span>
  </div>
);

export default Sidebar;
