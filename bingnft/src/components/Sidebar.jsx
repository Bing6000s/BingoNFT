'use client'
import { useState } from "react";
import {
  FaHome,
  FaCube,
  FaWpforms,
  FaUserFriends,
} from "react-icons/fa";
import Link from "next/link";
import UserPanel from "./Userpanel/userpanel";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-white shadow-md flex flex-col p-4">
      {/* Dashboard Link */}
      <Link href="/">
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
        <UserPanel />
        <SidebarItem icon={<FaCube />} label="NFT Collections" />
        <SidebarItem icon={<FaWpforms />} label="Events Forms" />
        <SidebarItem icon={<FaUserFriends />} label="Friends" />
      </nav>
    </aside>
  );
};

const SidebarItem = ({ icon, label }) => (
  <div className="flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer">
    <div className="flex items-center space-x-2">
      {icon}
      <span>{label}</span>
    </div>
  </div>
);

export default Sidebar;
