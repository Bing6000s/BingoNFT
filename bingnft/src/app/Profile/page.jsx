import Navbar from "./../../components/Navbar";
import Sidebar from "./../../components/Sidebar";
import Profile from "../../components/Userpanel/profile";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden">
      <div className="flex">
        {/* Sidebar (left) */}
        <Sidebar />

        {/* Main content area */}
        <main className="flex-1 flex flex-col">
          {/* Navbar aligned to the top-right */}
          <div>
            <Navbar />
          </div>

          {/* Page heading */}
          <section className="text-center px-4 mt-6 text-indigo-800">
            <p className="text-lg leading-relaxed">
              Feel free to add a card — it only costs <span className="font-bold">1 wei</span>,
              which is less than <span className="font-bold">$0.000001 USD</span>.
            </p>
            <p className="text-l leading-relaxed">
              We currently only accepts <span className="font-bold">BNB coins.</span>
            </p>
          </section>

          {/* Profile form aligned center-right */}
          <div className="flex justify-center mt-8">
            <div className="w-full max-w-md">
              <Profile />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}