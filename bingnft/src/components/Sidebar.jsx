'use client';
import Link from "next/link";
import {
  FaBookOpen,
  FaPlusCircle,
  FaImages,
  FaSearch,
  FaExclamationTriangle,
  FaUserSlash,
  FaEye
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-[#cdcadb] flex flex-col p-4 space-y-3">

      {/* Logo */}
      <Link href="/">
        <img src="/BingoNFT.jpg" alt="Logo" className="w-full h-auto mb-6" />
      </Link>

      {/* Sidebar Links */}
      <SidebarItem icon={<FaBookOpen />} label="Introduction" href="/" />
      <SidebarItem icon={<FaPlusCircle />} label="Add New Card" href="/Profile" />
      <SidebarItem icon={<FaImages />} label="Browse Gallery" href="/Gallery" />
      <SidebarItem icon={<FaSearch />} label="Search by Card Token" href="/Search" />
      <SidebarItem icon={<FaExclamationTriangle />} label="Browse Warnings" href="/GetWarnings" />
      <SidebarItem icon={<FaEye />} label="Sent Warning (Admin)" href="/Warnings" />
      <SidebarItem icon={<FaUserSlash />} label="Delete (Admin Only)" href="/Delete" />

    </aside>
  );
};

const SidebarItem = ({ icon, label, href }) => (
  <Link href={href}>
    <div className="flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer">
      <div className="flex items-center space-x-2">
        {icon}
        <span className="font-medium">{label}</span>
      </div>
    </div>
  </Link>
);

export default Sidebar;
