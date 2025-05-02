'use client';

import { useState } from 'react';
import { useActiveWallet } from 'thirdweb/react';
import { getContract, defineChain } from 'thirdweb';
import { client } from "./../../app/client"; // Make sure this has "use client"
import { bingABI } from '../../../contracts/artifact/BING';
import { prepareContractCall, sendTransaction } from 'thirdweb';
const bsc = defineChain({
  id: 56,
  name: "BNB Smart Chain",
  nativeCurrency: {
    name: "BNB",
    symbol: "BNB",
    decimals: 18,
  },
  rpc: ["https://bsc-dataseed1.binance.org"],
});

export default function EditProfile() {
  const wallet = useActiveWallet();

  const [formData, setFormData] = useState({
    Username: '',
    PictureAddress: '',
    quote1: '',
    quote2: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
const handleSubmit = async () => {
  if (!wallet) {
    alert("Connect your wallet first.");
    return;
  }

  try {
    setIsLoading(true);
    setError(null);

    const contract = await getContract({
      client,
      address: "0x3Cfe67A81F41072c777F1D53f81162ADbC64A3D7",
      chain: bsc,
      abi: bingABI
    });

    const tx = prepareContractCall({
      contract,
      method: "Usermint",
      params: [
        wallet.getAccount().address,
        formData.Username,
        formData.PictureAddress,
        formData.quote1,
        formData.quote2,
      ],
      value: 1n,
    });

    const receipt = await sendTransaction({
       transaction: tx,
       account: wallet.getAccount(),
       gas:{
        price: 3n,
        limit: 300000n
       }
      });

    alert("NFT minted successfully!");
    console.log("Transaction receipt:", receipt);
  } catch (err) {
    console.error("Mint failed:", err);
    setError(err);
  } finally {
    setIsLoading(false);
  }
};


  return (
    <div className="max-w-xl mx-auto bg-white shadow rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-1">Edit My Profile</h2>

      <label className="block mt-4 text-sm font-semibold">Username</label>
      <input name="Username" value={formData.Username} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1" />

      <label className="block mt-4 text-sm font-semibold">Picture URL</label>
      <input name="PictureAddress" value={formData.PictureAddress} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1" />

      <label className="block mt-4 text-sm font-semibold">Quote 1</label>
      <input name="quote1" value={formData.quote1} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1" />

      <label className="block mt-4 text-sm font-semibold">Quote 2</label>
      <input name="quote2" value={formData.quote2} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1" />

      <div className="flex justify-start gap-3 mt-6">
        <button
          onClick={handleSubmit}
          className="bg-indigo-600 text-white px-4 py-2 rounded"
          disabled={isLoading}
        >
          {isLoading ? "Minting..." : "Save"}
        </button>
        <button onClick={handleReset} className="bg-gray-400 text-white px-4 py-2 rounded">Reset</button>
        <button className="bg-gray-600 text-white px-4 py-2 rounded">Cancel</button>
      </div>

      {error && <p className="text-red-500 mt-4">Error: {error.message}</p>}
    </div>
  );
}
