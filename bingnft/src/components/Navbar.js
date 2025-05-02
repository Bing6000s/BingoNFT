import {client} from "./../app/client"
import { ConnectButton } from "thirdweb/react"
import { IoIosNotifications } from "react-icons/io";

export default function Navbar(){
  return (
    <div className="flex justify-end bg-gray-200 px-10 py-4">
        <div>
          <ConnectButton client = {client}/>
        </div>
        <div>
        <IoIosNotifications className="mx-2 text-5xl"/>
        </div>
    </div>
  )
}