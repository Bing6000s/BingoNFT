'use client'
import {client} from "./../app/client"
import { ConnectButton } from "thirdweb/react"
import { IoIosNotifications } from "react-icons/io";
import { useActiveWallet } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";

const wallets = [createWallet("io.metamask")];

export default function Navbar(){
  return (
    <div className="flex justify-end bg-gray-200 px-10 py-4">
        <div>
          <ConnectButton       
            client={client}
            wallets={wallets}
            connectModal={{ size: "compact" }}/>
        </div>
        <div>
        <IoIosNotifications className="mx-2 text-5xl"/>
        </div>
    </div>
  )
}