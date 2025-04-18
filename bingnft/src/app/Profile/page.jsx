import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Profile from "@/components/Userpanel/profile"
export default function Homepage() {
  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden">
      <Navbar />
      <div className="flex">
        {/* Sidebar (left) */}
        <Sidebar />

        {/* Main content area */}
        <div className="flex-1 p-6">
            <Profile/>
        </div>
      </div>
    </div>
  );
}

