'use client';

import { useEffect, useState } from 'react';
import { getContract, readContract, defineChain } from 'thirdweb';
import { bingABI } from '../../../contracts/artifact/BING';
import { client } from './../../app/client';
import Navbar from './../../components/Navbar';
import Sidebar from './../../components/Sidebar';
import NftProfileCardGeneric from './../../components/NFTCardGenerator';

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
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchAllMetadata = async () => {
      try {
        const contract = await getContract({
          client,
          address: '0x3Cfe67A81F41072c777F1D53f81162ADbC64A3D7',
          chain: bsc,
          abi: bingABI,
        });

        const temp = [];

        for (let index = 0; index < 512; index++) {
          try {
            const data = await readContract({
              contract,
              method: 'getMetadata',
              params: [BigInt(index)],
            });
            temp.push(data);
          } catch {
            // skip missing/deleted token
          }
        }

        setCards(temp);
      } catch (err) {
        console.error('Error fetching metadata list:', err);
      }
    };

    fetchAllMetadata();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="flex-1 overflow-y-auto p-8 space-y-12">
          {/* Title */}
          <section className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
              NFT <span className="text-blue-600">Gallery</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Browse all minted cards on the blockchain.
            </p>
          </section>

          {/* Card Grid */}
          <section>
            <h2 className="text-2xl font-bold text-gray-700 mb-6">Minted Cards</h2>
            <p className="text-gray-500 text-sm mb-6">
              {cards.length} card{cards.length !== 1 ? 's' : ''} found on-chain
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              {cards.map((card, i) => (
                <NftProfileCardGeneric
                  key={i}
                  username={card.name}
                  imageUrl={card.mainIMG}
                  quote1={card.quote1}
                  quote2={card.quote2}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
