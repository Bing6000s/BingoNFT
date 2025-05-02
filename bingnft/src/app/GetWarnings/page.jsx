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
          <div className="px-4 mt-6">
            <h1 className=" text-indigo-800 text-2xl text-center 
            font-thin mb-2 leading-relaxed
            ">
              Check if you are flagged by admin for inappropriate contents.</h1>
          </div>
        </main>
    </div>
  </div>
  )
}