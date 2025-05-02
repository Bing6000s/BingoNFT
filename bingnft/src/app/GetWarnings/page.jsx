'use client';

import { useEffect, useState } from 'react';
import { getContract, defineChain, readContract } from 'thirdweb';
import { client } from '../../app/client';
import { bingABI } from '../../../contracts/artifact/BING';
import { useActiveWallet } from 'thirdweb/react';

import Navbar from './../../components/Navbar';
import Sidebar from './../../components/Sidebar';

const bsc = defineChain({
  id: 56,
  name: 'BNB Smart Chain',
  nativeCurrency: {
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18,
  },
  rpc: ['https://bsc-dataseed1.binance.org'],
});

export default function Gallery() {
  const wallet = useActiveWallet();
  const [userAddress, setUserAddress] = useState('');
  const [warnings, setWarnings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWarnings = async () => {
      const address = wallet?.getAccount()?.address;
      if (!address) return;

      setUserAddress(address);
      setLoading(true);

      try {
        const contract = await getContract({
          client,
          address: '0x3Cfe67A81F41072c777F1D53f81162ADbC64A3D7',
          chain: bsc,
          abi: bingABI,
        });

        const result = await readContract({
          contract,
          method: 'getWarnings',
          params: [address],
        });

        setWarnings(result);
      } catch (err) {
        console.error('Failed to fetch warnings:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWarnings();
  }, [wallet]);

  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden">
      <div className="flex">
        <Sidebar />

        <main className="flex-1 flex flex-col">
          <Navbar />

          <div className="px-4 mt-6">
            <h1 className="text-indigo-800 text-2xl text-center font-thin mb-2 leading-relaxed">
              Check if{' '}
              <code className="font-mono">
                {userAddress
                  ? `${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`
                  : 'Not Connected'}
              </code>{' '}
              is flagged by admin.
            </h1>
          </div>

          <div className="flex justify-center mt-6">
            <div className="w-full max-w-xl bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-bold mb-3">Warnings for this address</h2>

              {loading ? (
                <p className="text-gray-600">Loading...</p>
              ) : warnings.length > 0 ? (
                <ul className="list-disc pl-5 text-left text-red-600 space-y-1">
                  {warnings.map((reason, i) => (
                    <li key={i}>{reason}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">No warnings found.</p>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
