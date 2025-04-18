import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import NftProfileCard1 from "@/components/NFTProfileCard";
export default function Homepage() {
  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden">
      <Navbar />
      <div className="flex">
        {/* Sidebar (left) */}
        <Sidebar />

        {/* Main content area */}
        <main className="flex-1 p-6">
      <h1 className="text-black">
        TODO: view a collection of users
        </h1>  
        </main>
      </div>
    </div>
  );
}

