'use client';
import { useState } from 'react';

export default function UserTable() {
  const [users] = useState([
    { hash: '0xAbC123...def', role: 'user' },
    { hash: '0xF00Ba7...789', role: 'moderator' },
    { hash: '0xDeadBe...ef1', role: 'admin' },
  ]);

  const handleView = (hash) => {
    alert(`Viewing ${hash}`);
  };

  const handleAlert = (hash) => {
    alert(`Alert for ${hash}`);
  };

  const handleDelete = (hash) => {
    alert(`Deleting ${hash}`);
  };

  return (
    <div className="max-w-6xl mx-auto bg-white shadow rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">Users</h2>

      <table className="min-w-full table-auto">
        <thead>
          <tr className="text-left text-sm text-gray-600 uppercase border-b">
            <th className="py-2 px-4">Hash Address</th>
            <th className="py-2 px-4">Role</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4 font-mono">{user.hash}</td>
              <td className="py-2 px-4 capitalize">{user.role}</td>
              <td className="py-2 px-4 flex gap-2">
                <button
                  onClick={() => handleView(user.hash)}
                  className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                >
                  View
                </button>
                <button
                  onClick={() => handleAlert(user.hash)}
                  className="bg-green-500 text-white px-3 py-1 rounded text-sm"
                >
                  Alert
                </button>
                <button
                  onClick={() => handleDelete(user.hash)}
                  className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
