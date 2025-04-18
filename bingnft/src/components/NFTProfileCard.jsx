export default function NftProfileCard() {
  return (
    <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mx-auto flex flex-col md:flex-row gap-6">
      {/* Left side: Sub NFTs + Accomplishments */}
      <div className="md:w-2/3 flex flex-col justify-between">
        {/* Sub NFTs */}
        <div className="space-y-2">
          <div className="text-gray-700">
              <img
              src="/smallNFT/hackpsu.png"
              alt = "SubNFT1" 
              className="max-w-[50px] max-h-[50px]"
              />
          </div>
          <div className="text-gray-700">
               <img
              src="/smallNFT/ApexMaster.png"
              alt = "SubNFT2" 
              className="max-w-[50px] max-h-[50px]"
              />
            </div>
          <div className="text-gray-700">
               <img
              src="/smallNFT/hackpsu.png"
              alt = "SubNFT3" 
              className="max-w-[50px] max-h-[50px]"
              />
              </div>
        </div>

        {/* Accomplishments */}
        <div className="mt-6 space-y-1">
          <div className="font-semibold text-gray-800 text-lg">Accomplishments</div>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Drives RAV4 but still faster than you - Speed Tickets:5</li>
            <li>Gold in Apex & Val, thinks he's Radiant</li>
            <li>Falls on concrete like it’s a memory foam bed</li>
          </ul>
        </div>
      </div>

      {/* Right side: NFT display */}
      <div className="md:w-1/3 flex items-center justify-center">
        <img
          src="/gothe.png"
          alt="NFT"
          className="w-full max-w-[200px] aspect-square object-cover border-2 border-gray-300 rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}
