import { FaSearch, FaBell, FaCog } from "react-icons/fa";
import Link from "next/link";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
      {/* Left: Logo */}
      <div className="flex items-center space-x-6">
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <img src="/bingo.ico" alt="Logo" className="w-6 h-6" />
            <span className="text-blue-600 font-bold text-xl">BingNFT</span>
          </div>
        </Link>
      </div>

      {/* Right: Icons + Avatar */}
      <div className="flex items-center space-x-6">
        <FaBell className="text-gray-500 hover:text-gray-700" />
        <FaCog className="text-gray-500 hover:text-gray-700" />
        <div className="flex items-center space-x-2">
          <img
            src="https://i.pravatar.cc/32"
            alt="Admin"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm font-semibold text-gray-700">Admin</span>
          <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">13</span>
        </div>
      </div>
    </header>
  );
}
