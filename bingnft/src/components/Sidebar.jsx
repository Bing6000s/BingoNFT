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
    <aside className="w-64 h-screen bg-[#cdcadb] flex flex-col">

      {/**
       * LOGO
       */}
      <div className="w-full mb-4">
        <Link href="/">
          <img src="/BingoNFT.jpg" alt="Logo" className="w-full h-auto" />
        </Link>
      </div>

      {/* Dashboard Link */}
      <Link href="/">
        <div className="flex items-center justify-between bg-indigo-600 text-white rounded-lg px-4 py-2 mb-4 cursor-pointer">
          <div className="flex items-center space-x-2">
            <FaHome />
            <span className="font-medium">Landing Page</span>
          </div>
        </div>
      </Link>

      {/* Template Header */}
      <div className="text-xs font-semibold text-black mb-2 px-1 uppercase">Manage</div>

      {/* Menu Items */}
      <nav className="flex flex-col space-y-5 font-sans">
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
