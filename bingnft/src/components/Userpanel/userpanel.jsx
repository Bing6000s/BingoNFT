'use client'
import { useState } from "react";
import { FaUser, FaAngleDown, FaAngleRight } from "react-icons/fa";
import Link from "next/link";

export default function UserPanel() {
  const [isUserOpen, setIsUserOpen] = useState(false);

  return (
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
          <li>
            <Link href="/Users/AllUsers" className="block hover:text-black cursor-pointer">
              All Users
            </Link>
          </li>
          <li>
            <Link href="/Users/AddUsers" className="block hover:text-black cursor-pointer">
              Add User
            </Link>
          </li>
          <li>
            <Link href="/Users/UserRoles" className="block hover:text-black cursor-pointer">
              User Roles
            </Link>
          </li>
          <li>
            <Link href="/Profile" className="block hover:text-black cursor-pointer">
              Profile
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
