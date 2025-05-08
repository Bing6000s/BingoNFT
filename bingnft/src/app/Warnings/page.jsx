'use client';

import { useState } from 'react';
import { useActiveWallet } from 'thirdweb/react';
import { getContract, defineChain, prepareContractCall, sendTransaction } from 'thirdweb';
import { client } from '../../app/client';
import { bingABI } from '../../../contracts/artifact/BING';

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

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

export default function WarnUserPage() {
  const wallet = useActiveWallet();

  const [warnAddress, setWarnAddress] = useState('');
  const [warnReason, setWarnReason] = useState('');
  const [warnLoading, setWarnLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState(null);

  const handleWarn = async () => {
    if (!wallet) {
      alert('Connect your wallet first.');
      return;
    }

    try {
      setWarnLoading(true);
      setSuccessMessage('');
      setError(null);

      const contract = await getContract({
        client,
        address: '0x3Cfe67A81F41072c777F1D53f81162ADbC64A3D7',
        chain: bsc,
        abi: bingABI,
      });

      const tx = prepareContractCall({
        contract,
        method: 'warnUser',
        params: [warnAddress, warnReason],
      });

      await sendTransaction({
        transaction: tx,
        account: wallet.getAccount(),
      });

      setSuccessMessage('User warned successfully.');
    } catch (err) {
      console.error('Warn failed:', err);
      setError('Failed to warn user.');
    } finally {
      setWarnLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="flex-1 overflow-y-auto p-8 space-y-12">
          {/* Page Header */}
          <section className="text-center text-indigo-800">
            <h1 className="text-3xl font-bold mb-2">Warn a User</h1>
            <p className="text-gray-600">Only the contract owner can issue warnings.</p>
          </section>

          {/* Warning Form */}
          <section className="flex justify-center">
            <div className="w-full max-w-xl bg-white shadow rounded-lg p-6">
              <label className="block text-sm font-semibold">Wallet Address</label>
              <input
                className="w-full border rounded px-3 py-2 mt-1 mb-4"
                value={warnAddress}
                onChange={(e) => setWarnAddress(e.target.value)}
                placeholder="0x..."
              />

              <label className="block text-sm font-semibold">Reason</label>
              <input
                className="w-full border rounded px-3 py-2 mt-1 mb-4"
                value={warnReason}
                onChange={(e) => setWarnReason(e.target.value)}
                placeholder="Reason for warning"
              />

              <button
                onClick={handleWarn}
                disabled={warnLoading}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                {warnLoading ? 'Submitting...' : 'Warn User'}
              </button>

              {successMessage && (
                <p className="text-green-600 mt-4">{successMessage}</p>
              )}
              {error && <p className="text-red-500 mt-4">{error}</p>}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
