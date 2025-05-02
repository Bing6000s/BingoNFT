import Navbar from "./../../components/Navbar";
import Sidebar from "./../../components/Sidebar";

export default function gallery(){
  return(
  <div className=" bg-gray-100 overflow-hidden">
    <div className="flex">
        <Sidebar/>
        <main className="flex-1 flex flex-col">
          <div>
            <Navbar/>
          </div>
        <section className="text-center px-4 mt-6 text-indigo-800">
            <h1 className="text-2xl font-semibold mb-2 leading-relaxed">
            Search a user on the blockchain!
            </h1>
            </section>
        </main>
    </div>
  </div>
  )
}