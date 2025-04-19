
export  function NftProfileCard() {
  return (
    <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mx-auto flex flex-col md:flex-row gap-8">
      {/* Left side */}
      <div className="md:w-2/3 flex flex-col justify-between">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">theBing</h2>

        {/* Sub NFTs */}
        <div className="flex gap-4">
          <img
            src="/smallNFT/hackpsu.png"
            alt="SubNFT1"
            className="w-14 h-14 rounded-lg border border-gray-300 object-cover"
          />
          <img
            src="/smallNFT/ApexMaster.png"
            alt="SubNFT2"
            className="w-14 h-14 rounded-lg border border-gray-300 object-cover"
          />
          <img
            src="/smallNFT/PennStateCmpsc.png"
            alt="SubNFT3"
            className="w-14 h-14 rounded-lg border border-gray-300 object-cover"
          />
        </div>

        {/* Accomplishments */}
        <div className="mt-8">
          <h3 className="font-semibold text-gray-800 text-lg mb-2">Accomplishments</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Drives RAV4 but still faster than you - Speed Tickets: 5</li>
            <li>Gold in Apex & Val, thinks he's Radiant</li>
            <li>Falls on concrete like it’s a memory foam bed</li>
          </ul>
        </div>
      </div>

      {/* Right side NFT */}
      <div className="md:w-1/3 flex items-center justify-center">
        <img
          src="/gothe.png"
          alt="Main NFT"
          className="w-full max-w-[220px] aspect-square object-cover border-2 border-gray-300 rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
}
export  function NftProfileCard1() {
  return (
    <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mx-auto flex flex-col md:flex-row gap-8">
      {/* Left side */}
      <div className="md:w-2/3 flex flex-col justify-between">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">RuanRuan</h2>

        {/* Sub NFTs */}
        <div className="flex gap-4">
          <img
            src="/smallNFT/ValorantGold.png"
            alt="SubNFT1"
            className="w-14 h-14 rounded-lg border border-gray-300 object-cover"
          />
          <img
            src="/smallNFT/ApexMaster.png"
            alt="SubNFT2"
            className="w-14 h-14 rounded-lg border border-gray-300 object-cover"
          />
          <img
            src="/smallNFT/hackpsu.png"
            alt="SubNFT3"
            className="w-14 h-14 rounded-lg border border-gray-300 object-cover"
          />
        </div>

        {/* Accomplishments */}
        <div className="mt-8">
          <h3 className="font-semibold text-gray-800 text-lg mb-2">Accomplishments</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Traveled through China collecting ghost stories older than dynasties.</li>
            <li>Taught a border collie to stare into the void with me. We howl at nothing together.</li>
            <li>Held down a job without burning the place down—physically or emotionally.</li>
          </ul>
        </div>
      </div>

      {/* Right side NFT */}
      <div className="md:w-1/3 flex items-center justify-center">
        <img
          src="/Chips.png"
          alt="Main NFT"
          className="w-full max-w-[220px] aspect-square object-cover border-2 border-gray-300 rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
}

