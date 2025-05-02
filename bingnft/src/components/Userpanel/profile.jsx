'use client';
import { useState } from 'react';

export default function EditProfile() {
  const [formData, setFormData] = useState({
    Username: '',
    PictureAddress: '',
    quote1: '',
    quote2: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFormData({
      Username: '',
      PictureAddress: '',
      quote1: '',
      quote2: '',
    });
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-1">Edit My Profile</h2>

      <label className="block mt-4 text-sm font-semibold">Username</label>
      <input
        name="Username"
        value={formData.Username}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2 mt-1"
      />

      <label className="block mt-4 text-sm font-semibold">Picture URL</label>
      <input
        name="PictureAddress"
        value={formData.PictureAddress}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2 mt-1"
      />

      <label className="block mt-4 text-sm font-semibold">Quote 1</label>
      <input
        name="quote1"
        value={formData.quote1}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2 mt-1"
      />

      <label className="block mt-4 text-sm font-semibold">Quote 2</label>
      <input
        name="quote2"
        value={formData.quote2}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2 mt-1"
      />

      <div className="flex justify-start gap-3 mt-6">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded">Save</button>
        <button
          onClick={handleReset}
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
        <button className="bg-gray-600 text-white px-4 py-2 rounded">Cancel</button>
      </div>
    </div>
  );
}
