import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Profile from "@/components/Userpanel/profile"
export default function Homepage() {
  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden">
      <div className="flex">
        {/* Sidebar (left) */}
        <Sidebar />

        {/* Main content area */}
        <main className="flex-1 flex flex-col px-6 py-4">
          {/* Navbar aligned to the top-right */}
          <div className="flex justify-end mb-4">
            <Navbar />
          </div>

          {/* Page heading */}
          <h1 className="text-center font-bold mb-6">
            Edit Your NFT Card Information.
          </h1>

          {/* Profile form aligned center-right */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <Profile />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
