'use client';

import { useState } from 'react';
import { useActiveWallet } from 'thirdweb/react';
import { getContract, defineChain, readContract } from 'thirdweb';
import { client } from './../../app/client';
import { bingABI } from '../../../contracts/artifact/BING';
import NftProfileCardGeneric from './../../components/NFTCardGenerator';
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

export default function ViewProfilePage() {
  const wallet = useActiveWallet();

  const [tokenId, setTokenId] = useState('');
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetch = async () => {
    if (!wallet) {
      alert('Connect your wallet first.');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const contract = await getContract({
        client,
        address: '0x3Cfe67A81F41072c777F1D53f81162ADbC64A3D7',
        chain: bsc,
        abi: bingABI,
      });

      const data = await readContract({
        contract,
        method: 'getMetadata',
        params: [BigInt(tokenId)],
      });

      setProfile(data);
    } catch (err) {
      console.error('Fetch failed:', err);
      setError(err);
      setProfile(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden">
      <div className="flex">
        <Sidebar />

        <main className="flex-1 flex flex-col">
          {/* Navbar */}
          <div>
            <Navbar />
          </div>

          <section className="text-center px-4 mt-6 text-indigo-800">
            <p className="text-lg leading-relaxed font-medium">
              Enter your token ID to view your card on the blockchain.
            </p>
            <p className="text-l leading-relaxed">
              You must be connected to a wallet on <span className="font-bold">BNB Chain.</span>
            </p>
          </section>

          <div className="flex justify-center mt-8 max-width-lg">
            <div className="w-full max-w-xl bg-white shadow rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-1">View My Profile</h2>

              <label className="block mt-4 text-sm font-semibold">Token ID</label>
              <input
                name="tokenId"
                value={tokenId}
                onChange={(e) => setTokenId(e.target.value)}
                className="w-full border rounded px-3 py-2 mt-1"
              />

              <div className="flex justify-start gap-3 mt-6">
                <button
                  onClick={handleFetch}
                  className="bg-indigo-600 text-white px-4 py-2 rounded"
                  disabled={isLoading}
                >
                  {isLoading ? 'Loading...' : 'Fetch'}
                </button>
              </div>

              {error && <p className="text-red-500 mt-4">Error: {error.message}</p>}

              {profile && (
                <div className="mt-6 space-y-2 text-left">
                  <p><strong>Name:</strong> {profile.name}</p>
                  <p><strong>Main Image:</strong> {profile.mainIMG}</p>
                  <p><strong>Sentence 1:</strong> {profile.quote1}</p>
                  <p><strong>Sentence 2:</strong> {profile.quote2}</p>
                </div>
              )}
            </div>
          </div>
          <div className='flex justify-center'>
              {profile && (
                <div className="flex max-w-xl mt-4 mb-12">
                  <NftProfileCardGeneric
                    username={profile.name}
                    imageUrl={profile.mainIMG}
                    quote1={profile.quote1}
                    quote2={profile.quote2}
                  />
                </div>
              )}
          </div>
        </main>
      </div>
    </div>
  );
}

