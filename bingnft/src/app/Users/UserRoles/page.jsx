import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import NftProfileCard from "@/components/NFTProfileCard";
export default function Homepage() {
  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden">
      <Navbar />
      <div className="flex">
        {/* Sidebar (left) */}
        <Sidebar />

        {/* Main content area */}
      <h1 className="text-black">
        TODO: approve user's request to release an NFT
         bind NFT to specific locations, 
         or bind NFT to specific events.
        </h1>  
      </div>
    </div>
  );
}

