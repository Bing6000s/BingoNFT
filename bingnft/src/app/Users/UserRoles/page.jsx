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
        TODO: approve friends request, and add the social interactions
        </h1>  
      </div>
    </div>
  );
}

