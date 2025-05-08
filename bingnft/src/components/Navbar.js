'use client'
import {client} from "./../app/client"
import { ConnectButton } from "thirdweb/react"
import { IoIosNotifications } from "react-icons/io";
import { useActiveWallet } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";

const wallets = [createWallet("io.metamask")];

export default function Navbar(){
  return (
    <div className="relative flex items-center bg-gray-200 px-10 py-4">
      <div className="absolute left-1/2 transform -translate-x-1/2 font-extrabold text-3xl text-indigo-800">
        BingoNFT
      </div>

      <div className="ml-auto">
        <ConnectButton
          client={client}
          wallets={wallets}
          connectModal={{ size: 'compact' }}
        />
      </div>
    </div>
  )
}