'use client';

import { useState } from 'react';
import Navbar from "./../../components/Navbar";
import Sidebar from "./../../components/Sidebar";
import { useActiveWallet} from "thirdweb/react";
import {defineChain} from "thirdweb"
import { client } from "../client";
import { bingABI } from "../../../contracts/artifact/BING";
import { getContract, prepareContractCall, sendTransaction } from "thirdweb";

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

export default function Gallery() {
  const wallet = useActiveWallet();
  const [tokenId, setTokenId] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleBurn = async () => {
    if (!wallet || !tokenId) return;

    try {
      setLoading(true);
      setMessage('');

      const contract = await getContract({
        client,
        address: "0x3Cfe67A81F41072c777F1D53f81162ADbC64A3D7", // your contract
        chain: bsc,
        abi: bingABI,
      });

      const tx = prepareContractCall({
        contract,
        method: "adminBurn",
        params: [BigInt(tokenId)],
      });

      const receipt = await sendTransaction({
        transaction: tx,
        account: wallet.getAccount(),
      });

      setMessage(`Token #${tokenId} burned successfully.`);
    } catch (err) {
      console.error('Burn failed:', err);
      setMessage('Error: Only contract owner can burn.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 overflow-hidden min-h-screen">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 flex flex-col">
          <Navbar />

          <section className="text-center px-4 mt-6">
            <h1 className="text-indigo-800 text-2xl text-center font-bold my-2 mb-2 leading-relaxed">
              Delete a card on the blockchain. Admin Only!
            </h1>
          </section>

          <section className="flex justify-center mt-8">
            <div className="w-full max-w-md bg-white shadow rounded-lg p-6">
              <label className="block text-sm font-semibold mb-1">Token ID</label>
              <input
                className="w-full border rounded px-3 py-2 mb-4"
                type="number"
                placeholder="Enter token ID"
                value={tokenId}
                onChange={(e) => setTokenId(e.target.value)}
              />

              <button
                onClick={handleBurn}
                disabled={loading || !tokenId}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                {loading ? "Burning..." : "Delete Token"}
              </button>

              {message && (
                <p className="mt-4 text-sm text-center text-gray-700">{message}</p>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
