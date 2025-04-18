'use client';
import { useState } from 'react';

export default function EditProfile() {
  const [formData, setFormData] = useState({
    Username: '',
    MainNFTAddress: '',
    NFT1Address: '',
    NFT2Address: '',
    NFT3Address: '',
    Accomplishment1: '',
    Accomplishment2: '',
    Accopmlishment3: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFormData({
      Username: '',
      MainNFTAddress: '',
      NFT1Address: '',
      NFT2Address: '',
      NFT3Address: '',
      Accomplishment1: '',
      Accomplishment2: '',
      Accopmlishment3: '',
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

      <label className="block mt-4 text-sm font-semibold">Main NFT Address</label>
      <input
        name="MainNFTAddress"
        value={formData.MainNFTAddress}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2 mt-1"
      />

      <label className="block mt-4 text-sm font-semibold">NFT #1 Address</label>
      <input
        name="NFT1Address"
        value={formData.NFT1Address}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2 mt-1"
      />

      <label className="block mt-4 text-sm font-semibold">NFT #2 Address</label>
      <input
        name="NFT2Address"
        value={formData.NFT2Address}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2 mt-1"
      />

      <label className="block mt-4 text-sm font-semibold">NFT #3 Address</label>
      <input
        name="NFT3Address"
        value={formData.NFT3Address}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2 mt-1"
      />

      <label className="block mt-4 text-sm font-semibold">Accomplishment 1</label>
      <input
        name="Accomplishment1"
        value={formData.Accomplishment1}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2 mt-1"
      />

      <label className="block mt-4 text-sm font-semibold">Accomplishment 2</label>
      <input
        name="Accomplishment2"
        value={formData.Accomplishment2}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2 mt-1"
      />

      <label className="block mt-4 text-sm font-semibold">Accomplishment 3</label>
      <input
        name="Accopmlishment3"
        value={formData.Accopmlishment3}
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
